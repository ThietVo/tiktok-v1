import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import styles from "./UserDetail.module.scss";
import Avatar from "../Avatar";
import { getUserApi } from "../../callApi/usersApi";
import { userLoginSelector } from "../../redux/selectors";
import sidebarSlice from "../../redux/sidebarSlice";
import ButtonFollow from "../Button/ButtonFollow";
import UserDetailVideos from "./UserDetailVideos";
import UserDetailLikedVideos from "./UserDetailLikedVideos";
import NumLikes from "../NumLikes/NumLikes";
import NumFollowers from "../NumFollowers/NumFollowers";
import NumFollowing from "../NumFollowing/NumFollowing";
import ButtonEditProfile from "../Button/ButtonEditProfile";

function UserDetail() {
  const { userId: userDetailId } = useParams();
  const [user, setUser] = useState({});
  const [active, setActive] = useState({
    isVideoTab: true,
    isLikedVideoTab: false,
  });

  const videoTabRef = useRef();
  const likedTabRef = useRef();

  const dispatch = useDispatch();
  const { userLogged } = useSelector(userLoginSelector);

  useEffect(() => {
    //get user with userDetailid
    getUserApi(userDetailId).then((result) => {
      document.title = `${result.username} (@${result.tiktokid}) TikTok | Xem các video mới nhất của ${result.username} trên Tiktok`;
      setUser(result);
    });

    dispatch(sidebarSlice.actions.setShowSidebar(true));
    dispatch(sidebarSlice.actions.setClassContainer(false));
  }, [userDetailId]);

  const handleClickTabVideo = () => {
    videoTabRef.current.style.color = "rgb(18, 18, 18)";
    videoTabRef.current.style.borderBottom = "3px solid #333";
    likedTabRef.current.style.color = "rgba(18, 18, 18, 0.5)";
    likedTabRef.current.style.borderBottom = "none";

    setActive({
      isVideoTab: true,
      isLikedVideoTab: false,
    });
  };
  const handleClickLikedVideo = () => {
    likedTabRef.current.style.color = "rgb(18, 18, 18)";
    likedTabRef.current.style.borderBottom = "3px solid #333";
    videoTabRef.current.style.color = "rgb(18, 18, 18, 0.5)";
    videoTabRef.current.style.borderBottom = "none";

    setActive({
      isVideoTab: false,
      isLikedVideoTab: true,
    });
  };
  return (
    <div className={styles.userDetail}>
      <div className={styles.userDetailHeader}>
        <div className={clsx("d-flex")}>
          <Avatar urlImg={user.avatar} avatarExtraLarge />
          <div className={styles.userDetailHeaderCard}>
            <div className={styles.userDetailHeaderCardTitle}>
              {user.tiktokid}
              {user.verified && (
                <FaCheckCircle className={clsx("checkIconMedium")} />
              )}
            </div>
            <div className={styles.userDetailHeaderCardSubTitle}>
              {user.username}
            </div>
            {user.id !== userLogged.id ? (
              <ButtonFollow user={user} />
            ) : (
              <ButtonEditProfile />
            )}
          </div>
        </div>
        <div className={styles.userDetailHeaderQuantity}>
          <NumFollowing
            num={
              user.following && user.following.length
                ? user.following.length
                : 0
            }
          />
          <NumFollowers
            num={
              user.followers && user.followers.length
                ? user.followers.length
                : 0
            }
          />
          <NumLikes userId={userDetailId} />
        </div>
        <div className={styles.userDetailHeaderDescription}>{user.info}</div>
      </div>
      <div className={styles.userDetailBody}>
        <div className={styles.userDetailBodyTab}>
          <p
            ref={videoTabRef}
            className={styles.userDetailBodyTabVideo}
            onClick={handleClickTabVideo}
          >
            Video
          </p>
          <p
            ref={likedTabRef}
            className={styles.userDetailBodyTabLiked}
            onClick={handleClickLikedVideo}
          >
            Đã thích
          </p>
        </div>
        {active.isVideoTab && <UserDetailVideos />}
        {active.isLikedVideoTab && <UserDetailLikedVideos />}
      </div>
    </div>
  );
}

export default UserDetail;
