import image from './Images/logo192.png'

export default function Header() {
    return(
        <header>
            <nav className="navv">
                <div>
                    <img src={image} className="nav-bar"></img>
                    <h2>REACT FACTS</h2>
                </div>
                <ul className="navigation">
                    <li><a href = "">Pricing</a></li>
                    <li><a href = "">About</a></li>
                    <li><a href = "">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
