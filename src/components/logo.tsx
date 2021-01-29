

import IconLogo from './icons/icon-logo';
import styles from './logo.module.css';
import { SITE_NAME_MULTILINE } from '@lib/constants';

export default function Logo({ textSecondaryColor = 'var(--accents-5)' }) {
  return (
    <div className={styles.logo}>
      <div className={styles.icon}>
        <IconLogo size={'64'} />
      </div>
      <div className={styles.text}>
        <div>{SITE_NAME_MULTILINE[0]}</div>
        <div>{SITE_NAME_MULTILINE[1]}</div>
        <div style={{ ['--color' as string]: textSecondaryColor }}
          className={styles['text-secondary']}>
          {SITE_NAME_MULTILINE[2]}
        </div>
      </div>
    </div>
  );
}
