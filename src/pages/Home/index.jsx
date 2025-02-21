import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Testimonials from '../../components/Testimonials'
import WhyChoose from '../../components/WhyChoose'

const Home = () => (
  <>
    <Navbar />
    <section id="hero">
      <Hero />
    </section>
    <section id="testimonials">
      <Testimonials />
    </section>
    <section id="why-choose">
      <WhyChoose />
    </section>
  </>
)

export default Home
