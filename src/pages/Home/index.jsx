import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Collaboration from '../../components/Collaboration'
import Testimonials from '../../components/Testimonials'
import WhyChoose from '../../components/WhyChoose'
import Footer from '../../components/Footer'

const Home = () => (
  <>
    <Navbar />
    <section id="hero">
      <Hero />
      <Collaboration />
    </section>
    <section id="why-choose">
      <WhyChoose />
    </section>
    <section id="testimonials">
      <Testimonials />
    </section>
    <section id="footer">
      <Footer />
    </section>
  </>
)

export default Home
