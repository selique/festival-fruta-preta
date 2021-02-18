import { NextApiRequest, NextApiResponse } from 'next';
import { nanoid } from 'nanoid';
import * as qs from 'querystring';
import redis from '@lib/redis';
import { renderSuccess, renderError } from '@lib/render-github-popup';

/**
 * This API route must be triggered as a callback of your GitHub OAuth app.
 */
export default async function githubOAuth(req: NextApiRequest, res: NextApiResponse) {
	if (!req.query.code) {
		// This happens when user cancelled the authentication.
		// In this case, we send an empty message which indicates no data available.
		res.end(renderSuccess());
		return;
	}

	const params = JSON.stringify({
		client_id: process.env.INSTAGRAM_CLIENT_ID,
		client_secret: process.env.INSTAGRAM_SECRECT_KEY,
		grant_type: 'authorization_code',
		redirect_uri: process.env.NEXT_PUBLIC_SITE_ORIGIN + '/auth'
	});

	const accessTokenRes = await fetch(`https://api.instagram.com/oauth/access_token`, {
		method: 'POST',
		headers: {
			Accept: 'application/json'
		},
		body: params
	});

	if (!accessTokenRes.ok) {
		console.error(
			`Failed to get access token: ${accessTokenRes.status} ${await accessTokenRes.text()}`
		);
		res.statusCode = 500;
		res.end(renderError());
		return;
	}

	const { access_token: accessToken } = await accessTokenRes.json();

	const userRes = await fetch('https://api.github.com/user', {
		headers: {
			Authorization: `bearer ${accessToken as string}`
		}
	});

	if (!userRes.ok) {
		console.error(`Failed to get GitHub user: ${userRes.status} ${await userRes.text()}`);
		res.statusCode = 500;
		res.end(renderError());
		return;
	}

	const user = await userRes.json();

	if (redis) {
		const token = nanoid();
		const key = `github-user:${token}`;

		await redis
			.multi()
			.hmset(key, 'id', user.id, 'login', user.login, 'name', user.name || '')
			.expire(key, 60 * 10) // 10m TTL
			.exec();

		res.end(renderSuccess({ type: 'token', token }));
	} else {
		res.end(renderSuccess({ type: 'user', login: user.login, name: user.name }));
	}
}
