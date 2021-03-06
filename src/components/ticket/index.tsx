import cn from 'classnames';
import Tilt from 'vanilla-tilt';
import { useRef, useEffect, useState } from 'react';
import { UserData } from '@lib/hooks/use-conf-data';
import { TicketGenerationState } from '@lib/constants';
import isMobileOrTablet from '@lib/is-mobile-or-tablet';
import { scrollTo } from '@lib/smooth-scroll';
import styles from './ticket.module.css';
import styleUtils from '../../components/utils.module.css';
import TicketForm from './components/ticket-form';
import TicketVisual from './components/ticket-visual';
import TicketActions from './components/ticket-actions';
import TicketCopy from './components/ticket-copy';
import { DATE, SITE_NAME } from '@lib/constants';
import Form from '../form';

type Props = {
	username: UserData['username'];
	id: UserData['id'];
	ticketNumber: UserData['ticketNumber'];
	name: UserData['name'];
	sharePage?: boolean;
};

export default function Ticket({ username, id, name, ticketNumber, sharePage }: Props) {
	const ticketRef = useRef<HTMLDivElement>(null);
	const [ticketGenerationState, setTicketGenerationState] = useState<TicketGenerationState>(
		'default'
	);
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ticketRef.current && !window.matchMedia('(pointer: coarse)').matches) {
			Tilt.init(ticketRef.current, {
				glare: true,
				max: 5,
				'max-glare': 0.16,
				'full-page-listening': true
			});
		}
	}, [ticketRef]);

	useEffect(() => {
		if (!sharePage && divRef && divRef.current && isMobileOrTablet()) {
			scrollTo(divRef.current, -30);
		}
	}, [divRef, sharePage]);

	return (
		<div
			className={cn(styles['ticket-layout'], {
				[styles['ticket-share-layout']]: sharePage
			})}
		>
			<div ref={divRef}>
				<div className={styles['ticket-text']}>
					<h2 className={cn(styles.hero, styleUtils.appear, styleUtils['appear-first'])}>
						{sharePage ? name ? <>{name}’s Ticket</> : <>{SITE_NAME}</> : <>Bora pro Festival!</>}
					</h2>
					<p className={cn(styles.description, styleUtils.appear, styleUtils['appear-second'])}>
						{sharePage ? (
							<>
								Join {name && 'them '} on {DATE}.
							</>
						) : (
							<>
								{/* Aqui está o seu passaporte.
								<br /> */}
								Compartilhe com sua galera!
								<br />
								{/* <p className={styles.descriptionSmall}>
									{' '}
									Clique no botão abaixo para preecher automaticamente com seus dados.
								</p> */}
							</>
						)}
					</p>
				</div>
				{/* <div className={cn(styleUtils.appear, styleUtils['appear-third'])}>
					{!sharePage ? (
						<TicketForm
							defaultUsername={username}
							setTicketGenerationState={setTicketGenerationState}
						/>
					) : (
						<Form sharePage />
					)}
				</div> */}
			</div>
			<div className={styles['ticket-visual-wrapper']}>
				{/* <div
					ref={ticketRef}
					className={cn(styles['ticket-visual'], styleUtils.appear, styleUtils['appear-fourth'])}
				>
					<TicketVisual
						username={username}
						name={name}
						ticketNumber={ticketNumber}
						ticketGenerationState={ticketGenerationState}
					/>
				</div> */}
				{!sharePage && (
					<div>
						<div className={styles['ticket-actions']}>
							<TicketActions id={id} />
						</div>
						{/* <div className={styles['ticket-copy']}>
							<TicketCopy username={username} />
						</div> */}
					</div>
				)}
			</div>
		</div>
	);
}
