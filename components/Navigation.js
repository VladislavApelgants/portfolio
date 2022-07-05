import Link from "next/link";
import {useRouter} from "next/router"
import s from '../styles/home/header/navigation.module.scss'



export default function Nav() {
    const { pathname } = useRouter();
    console.log(pathname);
    return (
            <nav className={s.header__navigation}>
                <ul className={s.navList}>
                    <li className={s.navItem}><Link href="/"><a className={ pathname === '/' ? s.navLink__current : s.navLink}>Home</a></Link></li>
                    <li className={s.navItem}><Link href="#"><a className={s.navLink}>About Me</a></Link></li>
                    <li className={s.navItem}><Link href="./portfolio"><a className={ pathname === '/portfolio' ? s.navLink__current : s.navLink} > Portfolio</a></Link></li>
                    <li className={s.navItem}><Link href="#"><a className={s.navLink}>Contact</a></Link></li>
                </ul>
            </nav>
    )
}