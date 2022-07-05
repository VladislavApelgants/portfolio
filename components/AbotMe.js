import s from '../styles/home/hero/aboutMe.module.scss'

export default function AboutMe() {
    return (
        <div className={s.hero__container}>
            <div className={s.aboutContainer} >
                <div>
                    <p className={s.greetings}>hello</p>
                    <h1 className={s.page__title}>I`m Vladislav Apelhants</h1>
                    <p className={s.hero__description}>Я начинающий фронтенд разработчик, елси хотите сайт под ключ, то с удовольствием вам в этом помогу. Жмите кнопочку ниже и свяжитесь со мной</p>
                    <button type="button" className={s.hero__btnContact}>contact me</button>
                </div>

                <div className={s.i__am}>
                    <div className={s.ellipse}></div>
                </div>
            </div>
        </div>
    );
}