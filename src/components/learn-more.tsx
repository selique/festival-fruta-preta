import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './learn-more.module.css';

export default function LearnMore() {
	return (
		<>
			<div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.learnMore)}>			
				Conheça o manifesto do{' '}
				<a href={'/manifesto'} className={styles['learnMore-email']} rel="noopener noreferrer">
					Festival Fruta Preta
				</a>
				.
			</div>
			{/* <div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.learnMore)}>
				Para inscrever suas obras, apresentações ou idéias{' '}
				<a href={'/inscricoes'} className={styles['learnMore-email']} rel="noopener noreferrer">
					clique aqui
				</a>
				.
			</div> */}
		</>
	);
}
