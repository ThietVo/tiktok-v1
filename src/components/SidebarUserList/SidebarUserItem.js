import { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import clsx from "clsx";
import { Link } from "react-router-dom";

import Avatar from "../Avatar";
import styles from "./SidebarUserItem.module.scss";
import UserCard from "../UserCard";

function SidebarUserItem({ user }) {
  const [style, setStyle] = useState({ display: "none" });

  let timerId = useRef();

  const handleMouseEnter = () => {
    timerId.current = setTimeout(() => setStyle({ display: "block" }), 1000);
  };
  const handleMouseLeave = () => {
    clearTimeout(timerId.current);

    setStyle({ ...style, display: "none" });
  };

  return (
    <div
      className={clsx(styles.user, "active")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`${user.id}`} className={styles.userLink} key={user.id}>
        <Avatar urlImg={user.avatar} avatarSmall />

        <div className={styles.userContent}>
          <div className="d-flex">
            <p className={styles.userContentTitle}>{user.tiktokid}</p>
            {user.verified ? (
              <FaCheckCircle className={clsx("checkIconSmall")} />
            ) : (
              ""
            )}
          </div>
          <p className={styles.userContentDescription}>{user.username}</p>
        </div>
      </Link>
      <div className={styles.userCard}>
        <UserCard style={style} user={user} />
      </div>
    </div>
  );
}

export default SidebarUserItem;
