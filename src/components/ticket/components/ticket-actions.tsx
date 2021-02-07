// import { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import { SITE_URL, TWEET_TEXT } from '@lib/constants';
import IconTwitter from '../../icons/icon-twitter';
import IconFacebook from '../../icons/icon-facebook';
import IconInstagram from '../../icons/icon-instagram';
// import IconDownload from '../../icons/icon-download';
// import LoadingDots from '../../loading-dots';
import styleUtils from '../../utils.module.css';
import styles from './ticket-actions.module.css';

type Props = {
	id: string;
};

export default function TicketActions({ id }: Props) {
	// const [imgReady, setImgReady] = useState(false);
	// const [loading, setLoading] = useState(false);
	// const downloadLink = useRef<HTMLAnchorElement>();
	const permalink = encodeURIComponent(SITE_URL);
	const text = encodeURIComponent(TWEET_TEXT);
	const tweetUrl = `https://twitter.com/intent/tweet?url=${permalink}&via=vercel&text=${text}`;
	const facebookInUrl = `https://www.facebook.com/sharer/sharer.php?u=${permalink}`;
	// const downloadUrl = `/api/ticket-images/${id}`;

	// useEffect(() => {
	// 	setImgReady(false);

	// 	const img = new Image();

	// 	img.src = downloadUrl;
	// 	img.onload = () => {
	// 		setImgReady(true);
	// 		setLoading(false);
	// 		if (downloadLink.current) {
	// 			downloadLink.current.click();
	// 			downloadLink.current = undefined;
	// 		}
	// 	};
	// }, [downloadUrl]);

	return (
		<div className={styles.sharedContainer}>
			<a
				className={cn(styles.button, styleUtils.appear, styles.first, 'icon-button')}
				href={tweetUrl}
				rel="noopener noreferrer"
				target="_blank"
			>
				<IconTwitter width={24} /> Tweet isso!
			</a>
			<a
				className={cn(styles.button, styleUtils.appear, styles.second, 'icon-button')}
				href={facebookInUrl}
				rel="noopener noreferrer"
				target="_blank"
			>
				<IconFacebook width={20} /> Compartilhe!
			</a>
			{/* <a
				className={cn(styles.button, styleUtils.appear, styles.third, 'icon-button', {
					[styles.loading]: loading
				})}
				href={loading ? undefined : downloadUrl}
				onClick={e => {
					if (imgReady) return;

					e.preventDefault();
					downloadLink.current = e.currentTarget;
					// Wait for the image download to finish
					setLoading(true);
				}}
				download="ticket.png"
			>
				{loading ? (
					<LoadingDots size={4} />
				) : (
					<>
						<IconDownload width={24} /> Download
					</>
				)}
			</a> */}
		</div>
	);
}
