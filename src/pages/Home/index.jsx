import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Collaboration from '../../components/Collaboration';
import Testimonials from '../../components/Testimonials';
import WhyChoose from '../../components/WhyChoose';
import Footer from '../../components/Footer';

const Home = () => (
  <>
    <Helmet>
      {/* Basic SEO */}
      <title>YAP - 30 Min Delivery in Atmakur | Fast & Fresh</title>
      <meta name="description" content="Get groceries, food, and daily essentials delivered in 30 minutes across Atmakur. Shop now for fast delivery and best deals!" />
      <meta name="keywords" content="YAP, 30-minute delivery, Atmakur delivery, groceries online, fast delivery" />
      <meta name="robots" content="index, follow" />

      
      {/* Local SEO (Schema Markup) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "YAP - 30 Min Delivery",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Atmakur",
            "addressCountry": "IN"
          },
          "url": "https://Yapdelivery.com",
          "telephone": "+91 9876543210"
        })}
      </script>
    </Helmet>

    <Navbar />
    <section id="hero">
      <Hero />
      <Collaboration />
    </section>
    <section id="why-choose">
      <WhyChoose />
    </section>
    <section className="hidden" id="testimonials">
      <Testimonials />
    </section>
    <section id="footer">
      <Footer />
    </section>
  </>
);

export default Home;
