import HashTag from "../HashTag";
import styles from "./SidebarDiscovery.module.scss";

function SidebarDiscovery() {
  return (
    <div className={styles.discovery}>
      <p className={styles.discoveryHeader}>Khám phá</p>
      <HashTag text={"outfitgucnga"} />
      <HashTag text={"Anh Yêu Vội Thế (Mee Remix) - LaLa Trần, Mee Media"} />
    </div>
  );
}

export default SidebarDiscovery;
