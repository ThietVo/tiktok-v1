import { BiMessageAltMinus } from "react-icons/bi";
import styles from "./Notification.module.scss";

function Notification() {
    
  return (
    <div className={styles.notification}>
          <BiMessageAltMinus />
      </div>
  )
}

export default Notification;