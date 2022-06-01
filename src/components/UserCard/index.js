import clsx from "clsx";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import { convertNum } from "../../js";
import Avatar from "../Avatar";
import styles from "./UserCard.module.scss";
import ButtonFollow from "../Button/ButtonFollow";
import NumLikes from "../NumLikes/NumLikes";
import NumFollowers from "../NumFollowers/NumFollowers";

function UserCard({ style, user }) {

  return (
    <>
      <div className={styles.userCard} style={style}>
        <div className={styles.userCardContent}>
          <Link to={`${user.id}`} className={styles.userCardLink}>
            <Avatar avatarMedium urlImg={user.avatar} />
            <div className={styles.userCardTitle}>
              {user.tiktokid}
              <FaCheckCircle className={clsx("checkIconSmall")} />
            </div>
            <div className={styles.userCardDescription}>{user.username}</div>
          </Link>
          <div className={styles.userCardFollowBtn}>
            <ButtonFollow user={user}/>
          </div>
        </div>
        <div className={styles.userCardCountInfos}>
          <NumFollowers num={user.followers.length ? user.followers.length : 0} />
          <NumLikes userId={user.id}/>
        </div>
      </div>
    </>
  );
}

export default UserCard;
