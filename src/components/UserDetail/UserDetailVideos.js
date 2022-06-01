import styles from "./UserDetailVideos.module.scss";
import UserDetailVideo from "./UserDetailVideo";
import { useDispatch, useSelector } from "react-redux";
import { userLoginSelector, videosSelector } from "../../redux/selectors";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getVideosOfUserApi } from "../../callApi/videosApi";
import videosSlice from "../../redux/videosSlice";

function UserDetailVideos() {
  const dispatch = useDispatch()
  const { userId: userDetailId } = useParams();
  const { userLogged } = useSelector(userLoginSelector);
  const { videosWithUsers } = useSelector(videosSelector);

  useEffect(() => {
    //get videos of user with userDetailId
    getVideosOfUserApi(userDetailId).then((result) => {
      const arr = //filter videos
        userDetailId === userLogged.id
          ? result
          : result.filter((element) => element.hasPublic === true);
      dispatch(videosSlice.actions.setVideosWithUsers(arr)); //update redux save videos
    });
  }, [userDetailId])

  return (
    <div className={styles.userDetailVideos}>
      {videosWithUsers &&
        videosWithUsers.map((video, index) => (
          <UserDetailVideo video={video} key={index} index={index} />
        ))}
    </div>
  );
}

export default UserDetailVideos;
