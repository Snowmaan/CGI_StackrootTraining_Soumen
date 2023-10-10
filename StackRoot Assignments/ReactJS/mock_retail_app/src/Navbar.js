export default function Navbar() {
    return (
    <nav className="nav">
        <a href="/" className="site-title">Retail App</a>
        <ul>
            <li>
                <a href="/products">Products</a>
            </li>
            <li>
                 <a href="/contact">ContactUs</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
            <li>
                <a href="/register">Register</a>
            </li>
        </ul>
      </nav>
    )
  }