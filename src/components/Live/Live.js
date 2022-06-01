import { useEffect } from 'react';
import { useDispatch} from 'react-redux'
import styles from './Live.module.scss';
import sidebarUserListSlice from '../../redux/sidebarUserListSlice';
import sidebarSlice from '../../redux/sidebarSlice';

function Live() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(sidebarUserListSlice.actions.setShowSidebarUserList(false));
        dispatch(sidebarSlice.actions.setClassContainer(false));
    }, []);

    return (
        <div className={styles.live}>
            <h1>Live</h1>
        </div>
    )
}

export default Live;