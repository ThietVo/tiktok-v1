import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./Button.module.scss";

function Button(props, ref) {
return <button ref={ref} className={clsx(styles.btn, props.className)} onClick={props.onClick} >{props.text}</button>;
}

export default forwardRef(Button);
