import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Container>
      <HeroSection>
        <h1>Welcome to Our Store</h1>
        <p>Find the best products here.</p>
      </HeroSection>
      <FeaturedProducts>
        <h2>Featured Products</h2>
        <div className="products">
          {/* Map through products and display them here */}
        </div>
      </FeaturedProducts>
      <AboutSection>
        <h2>About Us</h2>
        <p>We provide the best products in the industry.</p>
      </AboutSection>
      <Testimonials>
        <h2>Customer Testimonials</h2>
        <p>&quot;This is the best store ever!&quot;</p>
      </Testimonials>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const HeroSection = styled.div`
  background-color: #f8f9fa;
  padding: 60px;
  text-align: center;
`;

const FeaturedProducts = styled.div`
  padding: 40px 0;
`;

const AboutSection = styled.div`
  padding: 40px 0;
  background-color: #f0f0f0;
`;

const Testimonials = styled.div`
  padding: 40px 0;
`;

export default HomePage;
