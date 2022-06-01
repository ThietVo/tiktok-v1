import { FaCopyright } from 'react-icons/fa';
import styles from './SidebarFooter.module.scss';


function SidebarFooter() {
    return (
        <div className={styles.sidebarFooter}>
            <div className={styles.sidebarFooterList}>
                <a href="#" className={styles.sidebarFooterLink}>
                    Giới thiệu
                </a>
                <a href="#" className={styles.sidebarFooterLink}>
                    Bảng tin
                </a>
                <a href="#" className={styles.sidebarFooterLink}>
                    Liên Hệ
                </a>
                <a href="#" className={styles.sidebarFooterLink}>
                    Sự Nghiệp
                </a>
                <a href="#" className={styles.sidebarFooterLink}>
                    ByteDance
                </a>
            </div>
            <div className={styles.sidebarFooterList}>
                <a href="#" className={styles.sidebarFooterLink}>
                    TikTok for Good
                </a>
                <a href="#" className={styles.sidebarFooterLink}>
                    Quảng cáo
                </a>
                <a href="#" className={styles.sidebarFooterLink}>
                    Developers
                </a>
                <a href="#" className={styles.sidebarFooterLink}>
                    Transparency
                </a>
                <a href="#" className={styles.sidebarFooterLink}>
                    TikTok Rewards
                </a>
            </div>
            <div className={styles.sidebarFooterList}>
                <a href="#" className={styles.sidebarFooterLink}>
                    Trợ giúp
                </a>
                <a href="#" className={styles.sidebarFooterLink}>
                    An toàn
                </a>
                <a href="#" className={styles.sidebarFooterLink}>
                    Điều khoản
                </a>
                <a href="#" className={styles.sidebarFooterLink}>
                    Quyền riêng tư
                </a>
                <a href="#" className={styles.sidebarFooterLink}>
                    Creator Portal
                </a>
                <a href="#" className={styles.sidebarFooterLink}>
                    Hướng dẫn Cộng Đồng
                </a>
            </div>

            <div className={styles.sidebarFooterMore}>
                <span className={styles.sidebarFooterMoreText}>Thêm</span>
                <div className={styles.sidebarFooterMoreRule}>
                    <a href="#" className={styles.sidebarFooterMoreRuleLink}>
                        NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TIKTOK
                    </a>
                </div>
            </div>

            <span className={styles.sidebarFooterCopyRight}>
                <FaCopyright />
                2022 TikTok
            </span>
        </div>
    )
}

export default SidebarFooter;