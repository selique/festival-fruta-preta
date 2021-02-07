import styles from './ticket-info.module.css';
import styleUtils from '../../utils.module.css';
import Logo from '../../logo';
import { YEAR_DATE, SITE_URL } from '@lib/constants';
// import VercelLogo from '@components/icons/icon-platform';

const siteUrl = new URL(SITE_URL);
const siteUrlForTicket = `${siteUrl.host}${siteUrl.pathname}`.replace(/\/$/, '');

export default function TicketInfo({ logoTextSecondaryColor = 'var(--accents-5)' }) {
	const createdBy = (
		<div className={styles['created-by']}>
			<div className={styles['created-by-text']}>Criado por</div>
			<strong>UBQUB</strong>
			{/* <div className={styles['created-by-logo']}>
        <VercelLogo height="100%" color="var(--accents-4)" />
      </div> */}
		</div>
	);
	return (
		<div className={styles.info}>
			<div className={styles.logo}>
				<Logo textSecondaryColor={logoTextSecondaryColor} />
			</div>
			<div className={styles.date}>
				<div>{YEAR_DATE}</div>
				<div>ONLINE</div>
			</div>
			<div className={styleUtils['hide-on-mobile']}>{createdBy}</div>
			<div className={styles.url}>{siteUrlForTicket}</div>
			<div className={styleUtils['show-on-mobile']}>{createdBy}</div>
		</div>
	);
}
