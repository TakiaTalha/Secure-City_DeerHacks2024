import Link from "next/link"
import styles from  "./nav.module.css";
// import "./nav.css";

const Navbar = () =>     {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                {/* <img src="/logo.png" alt="logo" /> */}  
                <h3 >Secure City</h3> 
            </div>
            <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/explore">Explore</Link>
                <Link href="/support">Support</Link>
                <Link href="/report">Report</Link>
                <Link href="/login" className={styles.login}>Login</Link>
            </div>
        </div>
    )
}
export default Navbar