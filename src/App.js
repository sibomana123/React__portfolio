
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonilas from './sections/testimonials/Testimonilas';
import Footer from './sections/footer/Footer';
import Contact from './sections/contact/Contact';

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonilas />
      <Contact/>
      <Footer />
    </main>
  );
}

export default App;
