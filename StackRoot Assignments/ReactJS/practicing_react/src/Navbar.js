import './Navbar.css'

export default function Navbar() {
    return (
    <nav className="nav">
        <a href="/" className="site-title">Retail App</a>
        <ul>
            <li>
                <a href="/products">Products</a>
            </li>
            <li>
                 <a href="/offers">Offers</a>
            </li>
        </ul>
      </nav>
    )
  }