import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LazyLoad from "react-lazyload";

import styles from "./Home.module.scss";
import HomeItem from "./HomeItem";
import sidebarUserListSlice from "../../redux/sidebarUserListSlice";
import videosSlice from "../../redux/videosSlice";
import { getVideosWithUsersApi } from "../../callApi/videosApi";
import { userLoginSelector } from "../../redux/selectors";
import sidebarSlice from "../../redux/sidebarSlice";
import { Link } from "react-router-dom";
import MobileHeader from "../MobileResponsive/MobileHeader";
import LazyLoading from "../LazyLoading/LazyLoading";

function Home() {
  const dispatch = useDispatch();
  const { userLogged } = useSelector(userLoginSelector);
  const [videosWithUsers, setVideosWithUsers] = useState([]);

  useEffect(() => {
    getVideosWithUsersApi().then((result) => {
      const arr = result.filter((element) => element.hasPublic === true && element.user.id !== userLogged.id);
      setVideosWithUsers(arr.sort(() => Math.random() - 0.5));
      dispatch(videosSlice.actions.setVideosWithUsers(arr));
    });
    document.title = "Tiktok - Make Your Day";
    dispatch(sidebarUserListSlice.actions.setShowSidebarUserList(true));
    dispatch(sidebarSlice.actions.setClassContainer(true));
  }, []);

  return (
    <div className={styles.homeMain}>
      {/* mobile responsive */}
      <MobileHeader />

      {videosWithUsers &&
        videosWithUsers.map((video, index) => {
          return (
            <LazyLoad key={index} placeholder={<LazyLoading />}>
              <HomeItem
                index={index}
                user={video.user}
                video={video}
                FollowBtn={true}
              />
            </LazyLoad>
          );
        })}
    </div>
  );
}

export default Home;
