import Page from '@components/page';
import Layout from '@components/layout';
import Header from '@components/header';
import { META_DESCRIPTION } from '@lib/constants';
import styles from './manifesto.module.css';

export default function Festival({ ...props }) {
	const meta = {
		title: 'Manifesto',
		description: META_DESCRIPTION
	};
	return (
		<Page meta={meta} {...props}>
			<Layout>
				<Header
					hero="MANIFESTO DAS JABUTICABAS DE ROSEIRAS"
					description={'!!! ROSA NASCE EM JABUTICABEIRA !!!'}
				/>
				<div className={styles.layout}>
					<div className={styles.container}>
						<p className={styles.text}>
							Os pássaros abriram suas gaiolas, e num voo livre planaram sobre a província e
							deixaram suas sementes. Malditos pássaros, bendito voo, sagradas sementes cagadas. O
							solo da monocultura sucumbiu à pluriversidade e agora adubado germinam suas múltiplas
							sementes até então soterradas pela pacata revolta.
						</p>
						<p className={styles.text}>
							Há um Sol que nos torra, queima a todos igual. Mas as marcas são diferentes. Nós somos
							marcados pela história das jabuticabas do tempo. Mas não somos seus frutos. Nem os
							bons filhos que a casa tornam. Existimos neste tempo, e agora em todo espaço
						</p>
						<p className={styles.text}>
							Sapateamos sobre as ruínas da velha athenas paulista, adubamos e fomos além da
							realidade. Somos adubo. Alimentamos pela raiz antigos conceitos. E restaram apenas as
							jabuticabas de roseiras. A fruta resistente que não se sujeita aos mesquinhos,
							covardes, atrozes. Elas sim, inspiram, respiram e nos fazem transpirar.
						</p>
						<p className={styles.textBrand}>!!! ROSA NASCE EM JABUTICABEIRA !!!</p>
						<p className={styles.text}>
							Somos Joaquim Velho, Cora e Alex. Somos resistência, aqueles para quem o silêncio é
							apenas um momento e jamais um ofício. Filhos da causa perdida, gritamos:
						</p>
						<p className={styles.text}>
							Sim! Somos os acéfalos financeiros e emocionais. Amor, arte, poesia, revolução. Somos
							a roseira espinhenta trançada com jabuticabas melosas que caminham em direção a
							utopia.
						</p>
						<p className={styles.text}>
							Livres dos padrões exteriores, buscamos a vacina que cure. Nossos corpos fabricam
							anticorpos contra as injustiças, contra o mundo inviável e contra a sobrevida,
							minguante e velada.
						</p>
						<p className={styles.text}>
							Por uma vida plena de pássaros desenjaulados, voando livres e espalhando as sementes
							da arte.
						</p>
						<p className={styles.text}>Fruta Preta, uma Jabuticaba, uma fruta brasileira.</p>
					</div>
				</div>
			</Layout>
		</Page>
	);
}
