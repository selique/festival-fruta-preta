import styles from './header.module.css';

type Props = {
	hero: React.ReactNode;
	description?: React.ReactNode;
};

export default function Header({ hero, description }: Props) {
	return (
		<p>
			<h1 className={styles.hero}>{hero}</h1>
			<p className={styles.description}>{description}</p>
		</p>
	);
}
