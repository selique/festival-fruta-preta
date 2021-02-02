import { NextApiRequest, NextApiResponse } from 'next';
import { nanoid } from 'nanoid';
import { ConfUser } from '@lib/types';
import validator from 'validator';
import { SAMPLE_TICKET_NUMBER, COOKIE } from '@lib/constants';
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
	await doc.useServiceAccountAuth({
		client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
		private_key: `-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCrz/ooBPCqrx1R\nBvQumRLWum5FQ8lhG/Siw4xMosXzdivs8FaAvC3K9UecHoOkc+bExgR3P5fujHqx\nrGYT3LVmcZBdUQmSeR9PB3WQ5p0eqPNp7z2xCJPBGo3jOJs8D7hgJQXMtOMjcgjS\nnla3LBmTfh1WUg75kUsGwO5Zfz4FqoA6Jyw4TdFF3UJwMsIZ/QxtyQ+UwwRyJBTd\n5TcBJITOIkH57MiwpcIaKzFmv770Le61sMgg/MXqSexVd9gC9AsOin0xeTsFrHnc\nrp9a+bRGK6MYI8kcdKOCM7uqbCGw/bUH1yM1X14FQbncwWlxLgohagoKlUdhEgXw\nk1PNAk+/AgMBAAECggEAUTpagmEThx6TNaOb/gvQpEQvrf+GTarx1aGtyu2JuLi9\nu59ExkgxPisIV/71LeK9z3nu0pH2Oomf2DAxcmJ+QJigL/4IEH/DFZHpO0BMOBqY\nOhUpjXEIqdrsCejRO2wTNyFJxKYgXLmlAi5pwN/Ql7KgHBdfjQ3r8p10Ekvd/r79\ns/ewIsv0eGqlTBA8oo23bP7S87MM+E+k6hnFYTiWWKXs+9CBeLorfXJwlHMiX/lg\nik73phyfOjIA5gBtBjAMvjdKioacq3FqWbtm0Hb4+WahBWXt//2kV33SNTogu3XL\nI5B3wB5NzThjqMxua/8ud9X2QSlNJbgi4xVGHvrAQQKBgQDp5Qoe12kHbtvX1ARk\ntD/FUM6OVOql1ZlJb1mPHhNsu/ow7emyLhMxRscsp+Q8W/tDRCzhX/sq/twoE2ua\n6Q/yvCzDe/Acf7Yqh6VmF+v3BnPnpT2DhRfj6DrKNlwIUaV/zh1AKwZYhFu0Ye8t\njbNHBzijgVhWGHrejMT2yxTT0wKBgQC8DOOlDef3nC9ftufEBom0WhFxCM0xgSOj\nOrwtLuYRQKeXJYwAKJUK6b/HnQzlQQyGy1jrzTMAuKekupnMBJC4bU0P8+xXBUiv\n4FMNJGb15HBTYFWetZr6QS8hSJmqzzIUoK2QrTsYk697lpT3igB1k6VJhqn0AG7l\nEPuycBtc5QKBgEHWx1KHMHl3K0tF0zbFxm20oXBPVv33cn7JaVxwCufAwlyjm/Uc\nIyrr0YUwfX7AJap5tmh6rCkeNLrTPKcOk/6wGamtaZmcGZs/M7/ZXALdPiMm0HoF\nLQRqiqIBS0bMNNoVGwbFFbQ1Ddto9frMuHp1/euIrWUO3wdmeMs/v00hAoGAdVfZ\nqYIe8LzONvzMbN7jiN33KkCiwjRiR5X8HHm6aKOesEtmrCamslOgL3BJvrizl11G\nlIXMQLP5MGqcU9m5cMwLnVvJa5fJfq4NRRMlCGVOzkg7xThvh5+rSCqkcRivmH2X\nMMNYMALgKs+RD1JW7Qd/yXy1iqPGjzvkw7j+6h0CgYEA1L6mk63bBJHvDomLopu0\ngAriUle5N+4h4W7CmWq2u42JTagXPe+OJm+Lk4d9519C0Rg2hrnizK/Sv2sNTPPO\nWNMYYYnUtSa70p6Js24/cEBeJihJnL3F7/P2HHZ8RQWQ6tgGl3p2zpLJFGBH9Ww2\nn7XuiJL2wNxpvxTu9MIJXvg=\n-----END PRIVATE KEY-----\n`
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
