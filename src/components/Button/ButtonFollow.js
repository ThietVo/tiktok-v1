import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from ".";
import { updateUserApi } from "../../callApi/usersApi";
import modalSlice from "../../redux/modalSlice";
import { userLoginSelector } from "../../redux/selectors";
import userLoginSlice from "../../redux/userLoginSlice";
import styles from "./ButtonFollow.module.scss";

function ButtonFollow({ user }) {
    const followBtnRef = useRef();
    const dispatch = useDispatch();
    const { userLogged } = useSelector(userLoginSelector);
    const [ isFollow, setIsFollow ] = useState(false);

    useEffect(() => {
        if (userLogged.following && userLogged.following.includes(user.id)) {
          setIsFollow(true);
        } else {
          setIsFollow(false);
        }
      }, [user.id, userLogged]);

    const handleClickFollowBtn = () => {
        if (!userLogged.id) {
            dispatch(modalSlice.actions.setModalLogin(true));
          } else {
            let followingIds = [];
            let followerIds = [];
            if (!isFollow) {
              followingIds = [...userLogged.following, user.id];
              followerIds = [...user.followers, userLogged.id];
              setIsFollow(true);
            } else {
              followingIds = userLogged.following && userLogged.following.filter((id) => id !== user.id);
              followerIds = user.followers
                ? user.followers.filter((id) => id !== userLogged.id)
                : [];
              setIsFollow(false);
            }
            const data1 = {
              ...userLogged,
              following: [...followingIds],
            };
            const data2 = {
              followers: [...followerIds],
            };
            updateUserApi(userLogged.id, data1);
            dispatch(userLoginSlice.actions.setUserLogin(data1));
            updateUserApi(user.id, data2);
          }
    }
  return (
    <div className={styles.wrapper}>
        <Button
            ref={followBtnRef}
            text={!isFollow ? "Follow" : "Đang Follow"}
            className={styles.followBtn}
            onClick={handleClickFollowBtn}
          />
    </div>
  )
}

export default ButtonFollow;