import project1 from '../../assets/project1.webp'
import project2 from "../../assets/project2.webp";
import project3 from "../../assets/project3.webp";
import project4 from "../../assets/project4.webp";
import project5 from "../../assets/project5.webp";
import project6 from "../../assets/project6.webp";


import './portfolio.css'

const data = [
  {
    id: 1,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    demo: "https://cdn.dribbble.com/userupload/8127483/file/original-ac6a42ce571fd5ccd62a9a4d13f4c227.jpg?compress=1&resize=400x300&vertical=center",
    image: project1,
    github: "https://github.com",
  },

  {
    id: 2,
    title: "Candlestick charts library ✦ Hyper charts UI Kit",
    demo: "https://cdn.dribbble.com/userupload/8127086/file/original-fad1cc15261a241578e80cdb00aaa3e4.jpg?compress=1&resize=400x300&vertical=center",
    image: project2,
    github: "https://github.com",
  },

  {
    id: 3,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    demo: "https://cdn.dribbble.com/userupload/8127224/file/original-7a706fd5ffcb70733507ced4c6d7d8d4.jpg?compress=1&resize=1024x768",
    image: project3,
    github: "https://github.com",
  },

  {
    id: 4,
    title: "TREEMAP charts collection ✦ Hyper charts UI Kit",
    demo: "https://cdn.dribbble.com/userupload/8104149/file/original-22e4a18f788daf2cf89ecad85e371607.jpg?compress=1&resize=1024x768",
    image: project4,
    github: "https://github.com",
  },

  {
    id: 5,
    title: "Bubble charts collection ✦ Hyper charts UI Kit",
    demo: "https://cdn.dribbble.com/userupload/8127023/file/original-2d2fb858989fa01c95f9cef225e38790.jpg?compress=1&resize=1024x768",
    image: project5,
    github: "https://github.com",
  },

  {
    id: 6,
    title: "Radar charts collection ✦ Hyper charts UI Kit",
    demo: "https://cdn.dribbble.com/userupload/7916051/file/original-b0d37cf459173fddfe6772ebac79be77.jpg?compress=1&resize=1024x768",
    image: project6,
    github: "https://github.com",
  },
];

const Portfolio = () => {

  return (
    <section id="portfolio">
      <h4 className='wrk'>My Recent work</h4>
      <h2 className='prt'>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({image,id,title,demo,github})=>{
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })
        }

      </div>
    </section>
  );
}

export default Portfolio