import logo from '../../assets/logo.webp'
import data from './data'
import './navbar.css'
const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img src={logo} alt="logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item=> <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }

        </ul>
        <button id='theme__icon'>
        </button>
      </div>
    </nav>
  )
}

export default Navbar