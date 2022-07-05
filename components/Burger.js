import Nav from "./Navigation";
import s from "../styles/home/header/burger-menu.module.scss"

export default function Burger() {
    return (
        <div className={s.burgerMenu}>
            <Nav />
        </div>
    )
}