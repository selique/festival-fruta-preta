import Page from '@components/page';
import Layout from '@components/layout';
import Header from '@components/header';
import { META_DESCRIPTION } from '@lib/constants';
import styles from './festival.module.css';

export default function Festival({ ...props }) {
	const meta = {
		title: 'O que é o Festival FRUTA PRETA?',
		description: META_DESCRIPTION
	};
	return (
		<Page meta={meta} {...props}>
			<Layout>
				<Header hero="O que é o Festival FRUTA PRETA?" description={meta.description} />
				<div className={styles.layout}>
					<div className={styles.container}>
						<h3 className={styles.headingText}>NINGUÉM SABE NADA:</h3>
						<p className={styles.text}>
							O festival foi pensado, está sendo desenvolvido e será executado em uma construção
							orgânica, independente, fluida, e livre. PLURIVERSIDADE!
						</p>
						<p className={styles.text}>
							Ele acontece virtualmente a partir de 02 de Fevereiro e… ao longo de 2021.
						</p>
						<p className={styles.text}>
							O festival nasceu da inquietude do ser e se abre ao diálogo com outros artistas,
							fazedores de cultura e produtores independentes de outros territórios.
						</p>
						<h3 className={styles.headingText}>PERGUNTAS E RESPOSTAS</h3>
						<div className={styles.askBox}>
							<h4 className={styles.askText}>
								Quem pode participar como artista do Festival Fruta Preta?
							</h4>
							<p className={styles.text}>
								Qualquer artista poderá se inscrever para participar do festival com suas obras,
								intervenção, live, apresentação, oficina, curso, etc.
							</p>
						</div>
						<div className={styles.askBox}>
							<h4 className={styles.askText}>
								Como inscrever minha obra, projeto ou idéia para participar do Festival?
							</h4>
							<p className={styles.text}>Há duas formas de participar do Festival Fruta preta:</p>
							<ul>
								<li>Sendo convidado pela curadoria do Festival.</li>
								<li>Se inscrevendo no site (incrições abertar sazonialmente).</li>
								{/* <li>
									<a href={'https://forms.gle/BGidEvA8A8rhrDTB8'} rel="noopener noreferrer">
										Inscrevendo sua arte aqui
									</a>
									.
								</li>
								<li>
									<a href={'https://forms.gle/xutfqUXyGcjNdFsh6'} rel="noopener noreferrer">
										Inscrevendo sua ideia de Formação/Educação aqui.
									</a>
								</li> */}
							</ul>
						</div>
						<div className={styles.askBox}>
							<h4 className={styles.askText}>Como será feita a curadoria das obras?</h4>
							<p className={styles.text}>
								Não há curadoria neste Festival. Acreditamos na diversidade de ideias e expressões
								sem julgamentos estéticos. Mas alguns pontos serão levados em consideração:
							</p>
							<ul>
								<li>
									Adequação e viabilidade técnica da apresentação/execução da obra ou proposta pelo
									festival virtual.
								</li>
								<li>O nível de entrosamento da obra/ideia com a proposta do festival.</li>
							</ul>
						</div>
						<div className={styles.askBox}>
							<h4 className={styles.askText}>
								Quais os formatos, tempo e locais que minhas obras ou ideias serão inseridas?
							</h4>
							<p className={styles.text}>
								Todos os tipos de expressões artísticas são bem-vindos. Como o festival é
								exclusivamente virtual, a adaptação do projeto para a execução em rede deve ser
								considerada antes do envio.
							</p>
						</div>
						<div className={styles.askBox}>
							<h4 className={styles.askText}>Tipos de artes e ideias sugeridas:</h4>
							<ul>
								<li>
									<p className={styles.text}>Artes plásticas</p>
								</li>
								<li>
									<p className={styles.text}>Fotografia</p>
								</li>
								<li>
									<p className={styles.text}>Audiovisual</p>
								</li>
								<li>
									<p className={styles.text}>Música</p>
								</li>
								<li>
									<p className={styles.text}>Teatro e Dança</p>
								</li>
								<li>
									<p className={styles.text}>Literatura</p>
								</li>
								<li>
									<p className={styles.text}>Linguagens Híbridas</p>
								</li>
								<li>
									<p className={styles.text}>Arte e Cultura Popular</p>
								</li>
							</ul>
						</div>
						<div className={styles.askBox}>
							<h4 className={styles.askText}>Tipos de espaços de educação/formação:</h4>
							<ul>
								<li>
									<p className={styles.text}>Minicursos</p>
								</li>
								<li>
									<p className={styles.text}>Oficinas</p>
								</li>
								<li>
									<p className={styles.text}>Palestras</p>
								</li>
								<li>
									<p className={styles.text}>Rodas de conversa</p>
								</li>
								<li>
									<p className={styles.text}>
										Plenárias e Desenvolvimento de ações futuras de forma independente.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Layout>
		</Page>
	);
}
