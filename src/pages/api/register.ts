import { NextApiRequest, NextApiResponse } from 'next';
import { nanoid } from 'nanoid';
import { ConfUser } from '@lib/types';
import validator from 'validator';
import { COOKIE } from '@lib/constants';
import cookie from 'cookie';
import ms from 'ms';
import { GoogleSpreadsheet } from 'google-spreadsheet';

type ErrorResponse = {
	error: {
		code: string;
		message: string;
	};
};

export default async function register(
	req: NextApiRequest,
	res: NextApiResponse<ConfUser | ErrorResponse>
) {
	if (req.method !== 'POST') {
		return res.status(501).json({
			error: {
				code: 'method_unknown',
				message: 'This endpoint only responds to POST'
			}
		});
	}

	const email: string = ((req.body.email as string) || '').trim().toLowerCase();
	if (!validator.isEmail(email)) {
		return res.status(400).json({
			error: {
				code: 'bad_email',
				message: 'Invalid email'
			}
		});
	}

	// Initialize the sheet - doc ID is the long id in the sheets URL
	const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SPREADSHEET_ID);
	// Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
	// await doc.useApiKey(process.env.GOOGLE_SHEETS_API_KEY);
	const { privateKey } = JSON.parse(process.env.GOOGLE_PRIVATE_KEY || '{ privateKey: null }');
	console.log(privateKey);
	await doc.useServiceAccountAuth({
		client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
		private_key: privateKey
	});

	let id;
	let ticketNumber: number;
	let createdAt: number;
	let statusCode: number;
	let name: string | undefined = undefined;
	let username: string | undefined = undefined;

	await doc.loadInfo();
	const sheet = doc.sheetsByIndex[0];
	const rows = await sheet.getRows();
	const maprows = rows.map(({ id, email, ticketNumber, createdAt, name, username }) => {
		return {
			id,
			email,
			ticketNumber,
			createdAt,
			name,
			username
		};
	});
	const resposta = maprows.filter(item => item.email === email);

	if (resposta.length !== 0) {
		console.log('ja tem cadastrado');
		name = resposta[0].name;
		username = resposta[0].username;
		ticketNumber = parseInt(resposta[0].ticketNumber, 10);
		createdAt = parseInt(resposta[0].createdAt, 10);
		statusCode = 200;
	} else {
		console.log('nao tem cadastrado');
		await sheet.addRow({
			id: nanoid(),
			email: email,
			ticketNumber: '',
			createdAt: Date.now(),
			name: '',
			username: ''
		});
		statusCode = 201;
	}

	// Save `key` in a httpOnly cookie
	res.setHeader(
		'Set-Cookie',
		cookie.serialize(COOKIE, id, {
			httpOnly: true,
			sameSite: 'strict',
			secure: process.env.NODE_ENV === 'production',
			path: '/api',
			expires: new Date(Date.now() + ms('356 days'))
		})
	);

	return res.status(statusCode).json({
		id,
		email,
		ticketNumber,
		createdAt,
		name,
		username
	});
}
