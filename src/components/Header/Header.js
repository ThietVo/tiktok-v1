import clsx from "clsx";
import styles from './Header.module.scss';

import Logo from "./Logo";
import HeaderSearch from "./HeaderSearch";
import HeaderRight from "./HeaderRight";
import HeaderRightLogged from "./HeaderRightLogged";
import { useSelector } from "react-redux";
import { sidebarSelector, userLoginSelector } from "../../redux/selectors";

function Header({ user }) {
    const { userLogged } = useSelector(userLoginSelector); 
    const { classContainer } = useSelector(sidebarSelector);

    return (
        <div className={styles.header}>
            <div className={clsx({'container' : classContainer} )}>
                <div className={styles.headerMain}>
                        <Logo />
                        <HeaderSearch />
                        {userLogged.id ? <HeaderRightLogged /> : <HeaderRight />}
                </div>   
            </div>           
        </div>
    )
}

export default Header;