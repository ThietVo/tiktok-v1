import { Fragment, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../Header/Header";
import Body from "../Body";
import Sidebar from "../Sidebar/Sidebar";
import SidebarNavigation from "../Sidebar/SidebarNavigation";
import SidebarLogin from "../Sidebar/SidebarLogin";
import SidebarUserList from "../SidebarUserList/SidebarUserList";
import SidebarDiscovery from "../Sidebar/SidebarDiscovery";
import SidebarFooter from "../Sidebar/SidebarFooter";
import SidebarFollowingList from "../SidebarFollowingList/SidebarFollowingList";
import {
  modalSelector,
  sidebarUserListSelector,
  userLoginSelector,
  sidebarSelector,
} from "../../redux/selectors";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import userLoginSlice from "../../redux/userLoginSlice";
import { getUserApi } from "../../callApi/usersApi";
import ModalLogin from "../Modal/ModalLogin";
import ModalUpload from "../Modal/ModalUpload";
import ModalVideoDetail from "../Modal/ModalVideoDetail";
import ModalDeleteComment from "../Modal/ModalDeleteComment";
import ModalDeleteVideo from "../Modal/ModalDeleteVideo";
import ModalEditProfile from "../Modal/ModalEditProfile";
import likedVideosSlice from "../../redux/likedVideosSlice";
import ToastMessage from "../ToastMessage/ToastMessage";
import ModalSetPrivacy from "../Modal/ModalSetPrivacy";
import { getLikedVideosOfUser } from "../../callApi/likedVideosApi";
import MobileFooter from "../MobileResponsive/MobileFooter";
import MobileHeader from "../MobileResponsive/MobileHeader";

const Layout = ({ children }) => {
  const { showSidebarUserList } = useSelector(sidebarUserListSelector);
  const { showSidebar } = useSelector(sidebarSelector);
  const {
    showModalLogin,
    showModalUpload,
    showModalVideoDetail,
    showModalDeleteComment,
    showModalDeleteVideo,
    showModalEditProfile,
    showToastMessage,
    showModalSetPrivacy,
  } = useSelector(modalSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      //if logged -> send id logged to redux
      if (currentUser) {
        setTimeout(() => {
          getUserApi(currentUser.uid).then((result) =>
          dispatch(userLoginSlice.actions.setUserLogin(result))
        );
        //get list videos liked by userLogged and dispatch to redux
        getLikedVideosOfUser(currentUser.uid).then((result) => {
          dispatch(likedVideosSlice.actions.setLikedVideos(result));
        });
        }, 1000)
      }
    });
  }, [dispatch]);

  const { userLogged } = useSelector(userLoginSelector); //get redux

  useEffect(() => {
    if (
      showModalLogin ||
      showModalUpload ||
      showModalVideoDetail ||
      showModalDeleteComment ||
      showModalDeleteVideo ||
      showModalEditProfile ||
      showModalSetPrivacy
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [
    showModalLogin,
    showModalUpload,
    showModalVideoDetail,
    showModalDeleteComment,
    showModalDeleteVideo,
    showModalEditProfile,
    showModalSetPrivacy,
  ]);
  return (
    <Fragment>
      {showModalLogin && <ModalLogin />}
      {showModalUpload && <ModalUpload />}
      {showModalVideoDetail && <ModalVideoDetail />}
      {showModalDeleteComment && <ModalDeleteComment />}
      {showModalDeleteVideo && <ModalDeleteVideo />}
      {showModalEditProfile && <ModalEditProfile />}
      {showToastMessage && <ToastMessage />}
      {showModalSetPrivacy && <ModalSetPrivacy />}
      <Header />
      {/* <MobileHeader /> */}
      <Body>
        {showSidebar && (
          <Sidebar>
            <SidebarNavigation />
            {showSidebarUserList ? <SidebarUserList /> : ""}
            {userLogged.id ? <SidebarFollowingList /> : <SidebarLogin />}
            <SidebarDiscovery />
            <SidebarFooter />
          </Sidebar>
        )}
        {children}
      </Body>
      <MobileFooter />
    </Fragment>
  );
};

export default Layout;
