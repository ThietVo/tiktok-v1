import { BiEdit } from "react-icons/bi";
import { useDispatch } from "react-redux";
import modalSlice from "../../redux/modalSlice";
import styles from "./ButtonEditProfile.module.scss";

function ButtonEditProfile() {
    const dispatch = useDispatch();
  const handleEditProfile = () => {
    dispatch(modalSlice.actions.setModalEditProfile(true));
  };
  return (
    <button
      className={styles.btnEdit}
      onClick={handleEditProfile}
    >
      <BiEdit className={styles.btnEditIcon} />
      Sửa hồ sơ
    </button>
  );
}

export default ButtonEditProfile;
