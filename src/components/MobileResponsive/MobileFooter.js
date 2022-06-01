import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { BiMessageAltMinus, BiUser, BiSearch } from 'react-icons/bi';
import styles from './MobileFooter.module.scss';
import uploadImg from '../../assets/images/upload/upload.svg';
import { useSelector } from 'react-redux';
import { userLoginSelector } from '../../redux/selectors';

function MobileFooter() {

    const { userLogged } = useSelector(userLoginSelector);

  return (
    <div className={styles.mobileFooter}>
        <div className={styles.mobileFooterList}>
            <Link to="/" className={styles.mobileFooterListItem}>
                <FaHome />
            </Link>
            <Link to="#" className={styles.mobileFooterListItem}>
                <BiSearch />
            </Link>
            <Link to="/upload" className={styles.mobileFooterListItem}>
                <img src={uploadImg} alt='' className={styles.mobileFooterListItemUpload}/>
            </Link>
            <Link to="#" className={styles.mobileFooterListItem}>
                <BiMessageAltMinus />
            </Link>
            <Link to={`${userLogged.id}`} className={styles.mobileFooterListItem}>
                <BiUser />
            </Link>
        </div>
    </div>
  )
}

export default MobileFooter;