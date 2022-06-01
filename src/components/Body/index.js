import clsx from "clsx";
import { useSelector } from "react-redux";
import { sidebarSelector } from "../../redux/selectors";
import styles from './Body.module.scss';

function Body({children}) {
    const { classContainer } = useSelector(sidebarSelector);

    return (
        <main>
            <div className={clsx({'container': classContainer})}>
                <div className={clsx(styles.body)}>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Body;