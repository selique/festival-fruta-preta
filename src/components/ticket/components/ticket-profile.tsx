import { TicketGenerationState } from '@lib/constants';
import IconInstagram from '@components/icons/icon-instagram';
import cn from 'classnames';
import IconAvatar from '../../icons/icon-avatar';
import styles from './ticket-profile.module.css';

type Props = {
	name?: string;
	username?: string;
	size?: number;
	ticketGenerationState: TicketGenerationState;
};

export default function TicketProfile({ name, username, size = 1, ticketGenerationState }: Props) {
	return (
		<div className={styles.profile}>
			<span
				className={cn(styles.skeleton, styles.wrapper, styles.inline, styles.rounded, {
					[styles.show]: ticketGenerationState === 'loading'
				})}
			>
				{username ? (
					<img src={`https://github.com/${username}.png`} alt={username} className={styles.image} />
				) : (
					<span className={cn(styles.image, styles['empty-icon'])}>
						<IconAvatar />
					</span>
				)}
			</span>
			<div className={styles.text}>
				<p
					className={cn(styles.name, {
						[styles['name-blank']]: !username
					})}
				>
					<span
						className={cn(styles.skeleton, styles.wrapper, {
							[styles.show]: ticketGenerationState === 'loading'
						})}
					>
						{name || username || 'Seu Nome'}
					</span>
				</p>
				<p className={styles.username}>
					<span
						className={cn(styles.skeleton, styles.wrapper, {
							[styles.show]: ticketGenerationState === 'loading'
						})}
					>
						<span className={styles.githubIcon}>
							<IconInstagram color="var(--secondary-color)" size={20 * size} />
						</span>
						{username || <>Seu Nome</>}
					</span>
				</p>
			</div>
		</div>
	);
}
