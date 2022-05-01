import Link from "next/link"
import styles from '../styles/nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav} >
        <div className={styles.logo}>
            <Link href="/" > MS_RICE </Link>
        </div>
        <ul className={styles.links}>
            <li>
               <Link href="/" > Home </Link>
            </li>
            <li>
               <Link href="/login" > Office </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav