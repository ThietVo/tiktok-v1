import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import styles from "./SidebarFollowingList.module.scss";
import SidebarFollowingItem from "./SidebarFollowingItem";
import { userLoginSelector } from "../../redux/selectors";
import { getUserApi } from "../../callApi/usersApi";

function SidebarFollowingList() {
  const dispatch = useDispatch();
  const { userLogged } = useSelector(userLoginSelector);
  const [followingUsers, setFollowingUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [lengthList, setlengthList] = useState(5);

  useEffect(() => {
    if (userLogged.id) {
      if (userLogged.following.length > 0) {
        userLogged.following.map((id) => {
          return getUserApi(id).then((result) =>
            setFollowingUsers((prev) => [...prev, result])
          );
        });
      }
    }
  }, [userLogged]);

  const handleSeeAllClick = () => {
    setlengthList(followingUsers.length);
    setShow(true);
  };

  const handleHideMoreClick = () => {
    setlengthList(5);
    setShow(false);
  };

  const handleAction = () => {
    if (show) {
      setlengthList(5);
      setShow(false);
    } else {
      setlengthList(30);
      setShow(true);
    }
  };

  let count = 0;
  return (
    <div className={styles.userList}>
      <p className={styles.userListHeader}>Tài khoản đang theo dõi</p>
      {followingUsers.length > 0 &&
        followingUsers.map((user, index) => {
          count += 1;
          return (
            count <= lengthList && (
              <SidebarFollowingItem key={index} user={user} />
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

export default SidebarFollowingList;
