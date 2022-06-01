import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import SidebarUserItem from "./SidebarUserItem";
import styles from "./SidebarUserList.module.scss";
import {
  sidebarUserListSelector,
  userLoginSelector,
} from "../../redux/selectors";
import { getUsers } from "../../redux/sidebarUserListSlice";

function SidebarUserList() {
  const [lengthList, setlengthList] = useState(5);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { userList } = useSelector(sidebarUserListSelector);
  const { userLogged } = useSelector(userLoginSelector);

  const handleAction = () => {
    if (show) {
      setlengthList(5);
      setShow(false);
    } else {
      setlengthList(30);
      setShow(true);
    }
  };

  const shuffleArr = useMemo(
    () => userList && [...userList].sort(() => Math.random() - 0.5),
    [userList]
  );

  let count = 0;
  return (
    <div className={styles.userList}>
      <p className={styles.userListHeader}>Tài khoản được đề xuất</p>

      {shuffleArr.map((user) => {
        count += 1;
        return (
          count <= lengthList &&
          user.id !== userLogged.id && (
            <SidebarUserItem key={user.id} user={user} />
          )
        );
      })}

      <div className={styles.userListAction}>
        <div
          className={styles.userListSeeAll}
          onClick={handleAction}
        >
          {!show ? "Xem tất cả" : "Ẩn bớt"}
        </div>
      </div>
      {/* show on table and mobile */}
      <div className={styles.tabletUserListAction} onClick={handleAction}>
        {!show ? <BsChevronDown /> : <BsChevronUp />}
      </div>
    </div>
  );
}

export default SidebarUserList;
