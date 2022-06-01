import clsx from "clsx";
import styles from './Sidebar.module.scss';

function Sidebar({children}) {

    return(
        <div className={styles.wrapper}>
            <div className={clsx(styles.sidebar)}>
                {children}
            </div>
        </div>
    )
}

export default Sidebar;