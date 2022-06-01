import clsx from "clsx";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./SidebarFollowingItem.module.scss";
import Avatar from "../Avatar";

function SidebarFollowingItem({ user }) {

  return (
    <div className={clsx(styles.user, "active")}>
      <Link to={`${user.id}`} className={styles.userLink}>
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
    </div>
  );
}

export default SidebarFollowingItem;
