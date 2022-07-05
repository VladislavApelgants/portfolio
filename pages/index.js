import s from '../styles/home/hero/heroSection.module.scss'
import AboutMe from '../components/AbotMe'

 function Home() {
   return (
     <section className={s.hero}>
       <div className="container">
         <AboutMe />
       </div>
     </section>
   );
}

export default Home