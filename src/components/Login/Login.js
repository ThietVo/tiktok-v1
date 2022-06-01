import { useRef, useState } from "react";
import clsx from "clsx";
import { GoAlert } from "react-icons/go";
import { useDispatch } from "react-redux";
import modalSlice from "../../redux/modalSlice";
import Button from "../Button";
import styles from "./Login.module.scss";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const dispatch = useDispatch();
  const loginBtnRef = useRef();
  const closeBtnRef = useRef();
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [errLogin, setErrLogin] = useState();

  const handleCloseModal = () => {
    dispatch(modalSlice.actions.setModalLogin(false));
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
      .then(() => {
        dispatch(modalSlice.actions.setModalLogin(false));
      })
      .catch((err) => {
        setErrLogin(true);
      });
  };
  return (
    <div className={styles.modalInnerForm}>
      <div className={styles.modalInnerFormGroup}>
        <input
          className={styles.modalInnerFormInput}
          placeholder="Nhập email..."
          value={emailLogin}
          onChange={(e) => setEmailLogin(e.target.value)}
        ></input>
      </div>
      <div className={styles.modalInnerFormGroup}>
        <input
          type="password"
          className={styles.modalInnerFormInput}
          value={passwordLogin}
          placeholder="Nhập password..."
          onChange={(e) => setPasswordLogin(e.target.value)}
        ></input>
      </div>

      {errLogin && (
        <div className={styles.loginFail}>
          <GoAlert className={styles.loginFailIcon} />
          <p className={styles.loginFailText}>
            Sai thông tin đăng nhập. Vui lòng kiểm tra lại!
          </p>
        </div>
      )}

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
          ref={loginBtnRef}
          className={clsx(styles.modalInnerFormBtnRegister, {
            [styles.btnDisable]: !emailLogin && !passwordLogin ? true : false,
          })}
          text={"Đăng nhập"}
          onClick={handleLogin}
        ></Button>
      </div>
    </div>
  );
}

export default Login;
