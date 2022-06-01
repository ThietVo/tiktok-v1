import { Link } from 'react-router-dom';
import styles from './MobileHeader.module.scss';

function MobileHeader() {

  return (
    <div className={styles.mobileHeader}>
        <div className={styles.mobileHeaderList}>
            <Link to="/following" className={styles.mobileHeaderListItem}>
                Đang Follow
            </Link>
            <Link to="/" className={styles.mobileHeaderListItem}>
                Dành cho bạn
            </Link>
        </div>
    </div>
  )
}

export default MobileHeader;