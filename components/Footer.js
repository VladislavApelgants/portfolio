import Link from "next/link"


export default function Footer() {
    return (
        <footer>
            <div className="container">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            
                <div>
                    <p>Contact</p>
                    <ul>
                        <li><a href="#">Email</a></li>
                        <li><a href="#">instagram</a></li>
                        <li><a href="#">Calls</a></li>
                    </ul>
                </div>
            
                <div>
                    <a href="#">
                        Notitanic
                        <img src="./public/vercel.svg" alt="logo" />
                    </a>
                </div>
            </div>
        </footer>
    )
}