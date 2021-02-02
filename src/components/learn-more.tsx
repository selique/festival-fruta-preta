import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './contact.module.css';

export default function LearnMore() {
	return (
		<div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.contact)}>
			Conheça o manifesto do{' '}
			<a href={'/manifesto'} className={styles['contact-email']} rel="noopener noreferrer">
				Festival Fruta Preta
			</a>
			.
		</div>
	);
}
