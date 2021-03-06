import cn from 'classnames';
import styles from './footer.module.css';
import { COPYRIGHT_HOLDER, SITE_NAME, CODE_OF_CONDUCT, LEGAL_URL, UBQUB } from '@lib/constants';

export function HostedByVercel() {
	return (
		<a
			href="https://ubqub.com/"
			className={cn(styles['footer-link'], styles['footer-logo'])}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className={styles['secondary-text']}>Criado por </div>
			UBQUB
		</a>
	);
}

export default function Footer() {
	return (
		<footer className={cn(styles.footer)}>
			<div className={styles['footer-legal']}>
				<div className={styles['footer-hostedby']}>
					<HostedByVercel />
					<div className={styles['footer-separator']} />
				</div>
				<div className={styles['footer-copyright']}>
					Copyright © {`${new Date().getFullYear()} `} {COPYRIGHT_HOLDER || `${SITE_NAME}.`} All
					rights reserved.
				</div>
				<div className={styles['footer-center-group']}>
					<p className={styles['footer-paragraph']}>
						<a
							href={UBQUB}
							className={styles['footer-link']}
							target="_blank"
							rel="noopener noreferrer"
						>
							UBQUB
						</a>
					</p>
					<div className={styles['footer-separator']} />
					<p className={styles['footer-paragraph']}>
						<a
							href={CODE_OF_CONDUCT}
							className={styles['footer-link']}
							target="_blank"
							rel="noopener noreferrer"
						>
							Código de conduta
						</a>
					</p>
					{LEGAL_URL && (
						<>
							<div className={styles['footer-separator']} />
							<p className={styles['footer-paragraph']}>
								<a
									href={LEGAL_URL}
									className={styles['footer-link']}
									target="_blank"
									rel="noopener noreferrer"
								>
									Legal
								</a>
							</p>
						</>
					)}
				</div>
			</div>
		</footer>
	);
}
