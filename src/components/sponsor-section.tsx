import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { Sponsor } from '@lib/types';
import styles from './sponsor-section.module.css';

type Props = {
	sponsor: Sponsor;
};

export default function SponsorSection({ sponsor }: Props) {
	return (
		<>
			<Link href="/equipe">
				<a className={styles.backlink}>
					<svg
						viewBox="0 0 24 24"
						width="24"
						height="24"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						fill="none"
						shapeRendering="geometricPrecision"
					>
						<path d="M15 18l-6-6 6-6" />
					</svg>
					Voltar
				</a>
			</Link>
			<div className={styles.layout}>
				<div className={styles.container}>
					<div className={styles['name-and-logo']}>
						<Image
							alt={sponsor.name}
							src={sponsor.photo.url}
							className={styles.image}
							loading="lazy"
							title={sponsor.name}
							height={64}
							width={64}
						/>
						<h1 className={styles.name}>{sponsor.name}</h1>
					</div>
					<p className={styles.description}>{sponsor.description}</p>
					<div className={styles.resources}>
						<h2 className={styles.heading}>Redes Socias</h2>
						{sponsor.links.map(link => (
							<a
								key={link.url}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(styles.button, styles['button-resource'])}
							>
								<span className={styles.truncate}>{link.text}</span>
								<svg
									viewBox="0 0 24 24"
									width="16"
									height="16"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									fill="none"
									shapeRendering="geometricPrecision"
								>
									<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
									<path d="M15 3h6v6" />
									<path d="M10 14L21 3" />
								</svg>
							</a>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
