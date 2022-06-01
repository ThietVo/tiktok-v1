import { useRef, useState } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import modalSlice from "../../redux/modalSlice";
import Button from "../Button";
import styles from "./Register.module.scss";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUserApi } from "../../callApi/usersApi";

function Register() {
  const dispatch = useDispatch();
  const registerBtnRef = useRef();
  const closeBtnRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [emailErr, setEmailErr] = useState();
  const [passwordErr, setPasswordErr] = useState();
  const [passwordAgainErr, setPasswordAgainErr] = useState();

  const handleCloseModal = () => {
    dispatch(modalSlice.actions.setModalLogin(false));
  };

  const handleEmailInput = (e) => {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(e.target.value.match(emailFormat)){
      setEmailErr(false);
    }else{
      setEmailErr(true);
    }
    setEmail(e.target.value);
  }

  const handlePasswordInput = (e) => {
    if(e.target.value.length < 6){
        setPasswordErr(true);
    }else{
        setPasswordErr(false);
    }
    setPassword(e.target.value);

    if(passwordAgain !== e.target.value){
        setPasswordAgainErr(true);
    }else{
        setPasswordAgainErr(false);
    }
  }

  const handlePasswordAgainInput = (e) => {
      if(e.target.value !== password){
        setPasswordAgainErr(true);
      }else{
        setPasswordAgainErr(false);
      }
      setPasswordAgain(e.target.value);
  }

  const handleCreateUser = () => {
    if(!passwordErr && !passwordAgainErr){
      createUserWithEmailAndPassword(auth, email, password).then(
        (currentUser) => {
          const id = currentUser.user.uid;
          const data = {
            id: id,
            email: email,
            password: password,
            tiktokid: `user${id}`,
            username: `user${id}`,
            verified: false,
            avatar:
              "https://firebasestorage.googleapis.com/v0/b/tiktok-49d46.appspot.com/o/images%2Favatar%2Fdefaultavatar.png?alt=media&token=3cbbec38-faa7-4335-8bad-c321f3e3743e",
            info: "",
            following: [],
            followers: [],
          };
          createUserApi(data);
        }
      );
      dispatch(modalSlice.actions.setModalLogin(false));
    }
  };
  return (
    <div className={styles.modalInnerForm}>
      <div className={styles.modalInnerFormGroup}>
        <input
          className={styles.modalInnerFormInput}
          placeholder="Nhập email..."
          value={email}
          onChange={handleEmailInput}
        ></input>
      </div>
      {emailErr && <div className={styles.alertError}>Email không hợp lệ!</div>}
      <div className={styles.modalInnerFormGroup}>
        <input
          type="password"
          className={styles.modalInnerFormInput}
          value={password}
          placeholder="Nhập password..."
          onChange={handlePasswordInput}
        ></input>
      </div>
      {passwordErr && <div className={styles.alertError}>Mật khẩu phải lớn hơn 6 ký tự.</div>}
      <div className={styles.modalInnerFormGroup}>
        <input
          type="password"
          className={styles.modalInnerFormInput}
          value={passwordAgain}
          placeholder="Nhập lại password..."
          onChange={handlePasswordAgainInput}
        ></input>
      </div>
      {passwordAgainErr && <div className={styles.alertError}>Mật khẩu không khớp.</div>}
      <div className={styles.modalInnerFormControl}>
        <Button
          ref={closeBtnRef}
          className={styles.modalInnerFormBtnClose}
          onClick={handleCloseModal}
          text={"Thoát"}
        >
          {" "}
        </Button>
        <Button
          ref={registerBtnRef}
          className={clsx(styles.modalInnerFormBtnRegister, {
            [styles.btnDisable]: !email ? true : false,
          })}
          text={"Đăng ký"}
          onClick={handleCreateUser}
        ></Button>
      </div>
    </div>
  );
}

export default Register;
