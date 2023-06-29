import profileImg from '../../assets/profileImg.png'
import data from './data';
import './header.css'
const Header = () => {
  return (
    <div className="container header__container">
      <div className="header__profile">
        <img src={profileImg} alt="profile portait" />
        </div>
        <h3>Emmanuel SIBOMANA</h3>
        <p>
          I’m Emmanuel. Glad to see you! I’m a software developer! I can help
          you build a product , feature or website Look through some of my work
          and experience! If you like what you see and have a project you need
          coded, don’t hesitate to contact me. LET’S CONNECT
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>

        <div className="header__socials">
          {
            data.map(item=> <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    // </div>
  );
}

export default Header