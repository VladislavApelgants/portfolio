import Link from "next/link";
import s from '../styles/home/header/logo.module.scss';

export default function Logo() {
    return (
        <Link href="/" >
            <a className={s.logo}>
                <img src="./logo-Ikon.svg" alt="logo" />
                Notitanic
            </a>
        </Link>
    )
}