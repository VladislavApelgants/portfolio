import Nav from './Navigation'
import Logo from './Logo'
import Burger from './Burger'
import s from '../styles/home/header/header.module.scss'

export default function Header() {
    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <Logo />
                <Nav />
                <Burger/>
            </div>
        </header>
    )
}
