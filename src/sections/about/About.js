import aboutImg from '../../assets/aboutImg.jpg'
import cv from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'
import './about.css'
const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={aboutImg} alt="about_image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item=>(
                <Card key={item.id} className='about__card'>
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }

          </div>
          <p>
            Building projects my client love have always been my passions. being
            in the web development industry for 3years and serving more than 70
            happy clients worldwide, i'm always motivated to do more!
          </p>

          <p>
            Hi ! my name is Emmanuel from paris. i'm a full-stack web developer
            with a Bachelor's degree in Information stystem. My top priority is
            to get your business online the right way, giving you industry
            standard design and all the functionality neeed to operate smoothly
            online. Get in touch to day with the details of your project let's
            get startde! Check out my resume below!
          </p>

          <a href={cv} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About