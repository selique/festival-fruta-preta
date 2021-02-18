import Page from '@components/page';
import Layout from '@components/layout';
import Header from '@components/header';
import cn from 'classnames';
import { META_DESCRIPTION } from '@lib/constants';
import styles from './inscricoes.module.css';

export default function Incricoes({ ...props }) {
	const meta = {
		title: 'Inscrições',
		description: META_DESCRIPTION
	};
	return (
		<Page meta={meta} {...props}>
			<Layout>
				<Header hero="Inscrições" />
				<div className={styles.layout}>
					<div className={styles.container}>
						<div className={styles.formBox}>
							<h3 className={styles.headingText}>Formulário para Artistas:</h3>
							<p className={styles.text}>
								ESTE FORMULÁRIO É DESTINADO A TODO E QUALQUER ARTISTAS DO UNIVERSO.
							</p>
							<a
								href={'https://forms.gle/BGidEvA8A8rhrDTB8'}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(styles.button, styles['button-resource'])}
							>
								<span className={styles.truncate}>{'Clique Aqui'}</span>
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
						</div>
						<div className={styles.formBox}>
							<h3 className={styles.headingText}>Formulário para Eventos:</h3>
							<p className={styles.text}>
								ESTE FORMULÁRIO É DESTINADO A PROPOSIÇÃO DE EVENTOS COMO: Oficinas, Mini-Cursos,
								Palestras, Rodas de conversas, e Podcasts
							</p>
							<a
								href={'https://forms.gle/xutfqUXyGcjNdFsh6'}
								target="_blank"
								rel="noopener noreferrer"
								className={cn(styles.button, styles['button-resource'])}
							>
								<span className={styles.truncate}>{'Clique Aqui'}</span>
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
						</div>
					</div>
				</div>
			</Layout>
		</Page>
	);
}
