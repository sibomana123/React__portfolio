import {AiFillLinkedin} from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai';
import {BiLogoFacebook} from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs';
import { BiLogoGithub } from 'react-icons/bi';
import './footer.css'
const Footer = () => {
  return (
    <footer id="footer">
      <a href="/#" className="footer__logo">
        Emmanuel
      </a>
      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>

        <li>
          <a href="#testimonials">Testimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <BiLogoFacebook />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
        <a href="https://twitter.com">
          <AiOutlineTwitter />
        </a>
        <a href="https://github.com">
          <BiLogoGithub />
        </a>
        <a href="https://linkedin.com">
          <AiFillLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; 2022 Emmanuel portfolio. All right reserved!!
        </small>
      </div>
    </footer>
  );
}

export default Footer