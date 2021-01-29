

export const SITE_URL = 'https://www.frutapreta.com.br';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'vercel';
export const BRAND_NAME = 'Fruta Preta';
export const SITE_NAME_MULTILINE = ['Fruta Preta', 'Conf'];
export const SITE_NAME = 'Festival Fruta Preta';
export const META_DESCRIPTION =
  'O Festival Fruta Preta é um evento 100% online promovendo o encontro dos artistas que vivem em Jaboticabal ou possuem alguma relação com a cidade e que estão interessados em mostrar e compartilhar suas produções artísticas.';
export const SITE_DESCRIPTION =
  'Festival Fruta Preta é um evento 100% online de cultura e arte';
export const DATE = '2 Fevereiro 2020';
export const SHORT_DATE = '02/02/2020 - 19:00 PT';
export const FULL_DATE = '2 fevereiro 2020 - 19:00 PT (GMT-3)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT = 'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/selique/festival-fruta-preta';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Stage A',
    route: '/stage/a'
  },
  {
    name: 'Stage C',
    route: '/stage/c'
  },
  {
    name: 'Stage M',
    route: '/stage/m'
  },
  {
    name: 'Stage E',
    route: '/stage/e'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Equipe',
    route: '/equipe'
  },
  {
    name: 'Jobs',
    route: '/jobs'
  }
];

export type TicketGenerationState = 'default' | 'loading';
