import { FaCommentDots } from "react-icons/fa";
import styles from "./ButtonComment.module.scss";

function ButtonComment({ numComments }) {
  return (
    <button className={styles.btnComment}>
        <div
        className={styles.btnCommentIcon}
        >
            <FaCommentDots />
        </div>
        <span>{ numComments }</span>
    </button>
  )
}

export default ButtonComment;