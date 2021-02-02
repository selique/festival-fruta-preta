import Page from '@components/page';
import Layout from '@components/layout';
import Header from '@components/header';
import { META_DESCRIPTION } from '@lib/constants';
import styles from './festival.module.css';

export default function Festival({ ...props }) {
	const meta = {
		title: 'Código de conduta',
		description: META_DESCRIPTION
	};
	return (
		<Page meta={meta} {...props}>
			<Layout>
				<Header hero="Código de conduta" description={meta.description} />
				<div className={styles.layout}>
					<div className={styles.container}>
						<h3 className={styles.headingText}>NINGUÉM SABE NADA</h3>
					</div>
				</div>
			</Layout>
		</Page>
	);
}
