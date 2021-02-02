

import Link from 'next/link';
import Image from 'next/image';
import { Sponsor } from '@lib/types';
import styles from './sponsors-grid.module.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <Link key={sponsor.name} href={`/equipe/${sponsor.slug}`}>
      <a
        role="button"
        tabIndex={0}
        className={styles.card}
      >
        <div className={styles.cardContainer}>
          <div className={styles.imageWrapper}>
            <Image
                alt={sponsor.name}
                src={sponsor.photo.url}
                className={styles.image}
                loading="lazy"
                title={sponsor.name}
                width={150}
                height={150}
            />
          </div>
          <h2 className={styles.name}>{sponsor.name}</h2>
          <p className={styles.description}>{sponsor.description}</p>
        </div>
      </a>
    </Link>
  );
}

type Props = {
  sponsors: Sponsor[];
};

export default function SponsorsGrid({ sponsors }: Props) {

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} className={styles.cardContainer} >
      <Masonry gutter={'20'}>
        {sponsors.map(sponsor => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
