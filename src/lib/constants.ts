export const SITE_URL = 'https://www.frutapreta.com.br';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'vercel';
export const BRAND_NAME = 'Fruta Preta';
export const SITE_NAME_MULTILINE = ['Fruta', 'Preta', 'LIVE'];
export const SITE_NAME = 'Festival Fruta Preta';
export const META_DESCRIPTION =
	'O Festival Fruta Preta é um evento 100% online promovendo o encontro de artistas que estão interessados em mostrar e compartilhar suas produções artísticas.';
export const SITE_DESCRIPTION = 'Festival Fruta Preta é um evento 100% online de cultura e arte';
export const YEAR_DATE = '2021';
export const DATE = `2 Fevereiro ${YEAR_DATE}`;
export const SHORT_DATE = `02/02/${YEAR_DATE} - 19:00 PT`;
export const FULL_DATE = `2 fevereiro ${YEAR_DATE} - 19:00 PT (GMT-3)`;
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT = '/codigo-de-conduta';
export const REPO = 'https://www.ubqub.com/';
export const UBQUB = 'https://www.ubqub.com/';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
	// {
	// 	name: 'O Festival',
	// 	route: '/festival'
	// },
	// {
	//   name: 'Stage A',
	//   route: '/stage/a'
	// },
	// {
	//   name: 'Stage C',
	//   route: '/stage/c'
	// },
	// {
	//   name: 'Stage M',
	//   route: '/stage/m'
	// },
	// {
	//   name: 'Stage E',
	//   route: '/stage/e'
	// },
	// {
	//   name: 'Schedule',
	//   route: '/schedule'
	// },
	// {
	//   name: 'Speakers',
	//   route: '/speakers'
	// },
	// {
	// 	name: 'Equipe',
	// 	route: '/equipe'
	// },
	// {
	// 	name: 'Inscrições',
	// 	route: '/inscricoes'
	// }
	// {
	//   name: 'Jobs',
	//   route: '/jobs'
	// }
];

export type TicketGenerationState = 'default' | 'loading';
