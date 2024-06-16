import React from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';

const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const HeroSection = styled.section`
  position: relative;
  background-color: #002244;
  color: #fff;
  padding: 100px 0;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Tittle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const HeroImage = styled.img`
  max-width: 100%;
  margin-top: 50px;
`;

const FeaturesSection = styled.section`
  background-color: #f2f2f2;
  padding: 80px 0;
  text-align: center;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 100%;
  margin: 0 auto;
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  max-width: 20%;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  text-align: center;

  &:hover {
  background: #037B4A;
  cursor: pointer;
}
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #04AA6D;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1.2rem;
`;

const Home = () => {

  return (
    <>
      <HeroSection>

        <Container>

          <HeroContent>
            <Tittle>Your Trusted Handyman Service Provider</Tittle>
            <HeroSubtitle>Book reliable home services including plumbing, gardening, electrical work, and more.</HeroSubtitle>
          </HeroContent>

          <HeroImage src="/Assets/background.jpg" alt="Handyman Services" />
        </Container>

      </HeroSection>

      <FeaturesSection>

        <Container>

          <Tittle>Why Choose Us?</Tittle>

          <FeaturesContainer>

            <FeatureItem>
              <FeatureIcon><i className="fas fa-tools"></i></FeatureIcon>
              <FeatureTitle>Wide Range of Services</FeatureTitle>
              <FeatureDescription>Choose from a variety of handyman services tailored to your needs.</FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon><i className="fas fa-users"></i></FeatureIcon>
              <FeatureTitle>Verified Professionals</FeatureTitle>
              <FeatureDescription>Our professionals are thoroughly vetted for skill and reliability.</FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon><i className="fas fa-clock"></i></FeatureIcon>
              <FeatureTitle>Flexible Scheduling</FeatureTitle>
              <FeatureDescription>Book appointments at your convenience, 24/7.</FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <FeatureIcon><i className="fas fa-star"></i></FeatureIcon>
              <FeatureTitle>Exceptional Customer Service</FeatureTitle>
              <FeatureDescription>Enjoy dedicated support throughout your service experience.</FeatureDescription>
            </FeatureItem>

          </FeaturesContainer>

          <Tittle>Our Services</Tittle>

          <FeaturesContainer>

            <FeatureItem>
              <FeatureTitle>Plumbing</FeatureTitle>
              <FeatureIcon><i className="fas fa-wrench"></i></FeatureIcon>
              <FeatureDescription>Installation, repair, and maintenance of plumbing fixtures.</FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <FeatureTitle>Painting</FeatureTitle>
              <FeatureIcon><i className="fas fa-paint-brush"></i></FeatureIcon>
              <FeatureDescription>Interior and exterior painting services.</FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <FeatureTitle>Carpentry</FeatureTitle>
              <FeatureIcon><i className="fas fa-screwdriver"></i></FeatureIcon>
              <FeatureDescription>Furniture assembly, repairs, and custom woodwork.</FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <FeatureTitle>Gardening</FeatureTitle>
              <FeatureIcon><i className="fas fa-leaf"></i></FeatureIcon>
              <FeatureDescription>Lawn care, landscaping, and garden maintenance.</FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <FeatureTitle>Electrical</FeatureTitle>
              <FeatureIcon><i className="fas fa-bolt"></i></FeatureIcon>
              <FeatureDescription>Installation, wiring, and repair of electrical systems.</FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <FeatureTitle>General Repairs</FeatureTitle>
              <FeatureIcon><i className="fas fa-hammer"></i></FeatureIcon>
              <FeatureDescription>Fixing household items and general maintenance.</FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <FeatureTitle>Handyman for Hire</FeatureTitle>
              <FeatureIcon><i className="fas fa-tools"></i></FeatureIcon>
              <FeatureDescription>Available for various odd jobs and tasks around the home.</FeatureDescription>
            </FeatureItem>

            <FeatureItem>
              <FeatureTitle>Home Renovation</FeatureTitle>
              <FeatureIcon><i className="fas fa-home"></i></FeatureIcon>
              <FeatureDescription>Complete home remodeling and renovation services.</FeatureDescription>
            </FeatureItem>

          </FeaturesContainer>

        </Container>
      </FeaturesSection>
    </>
  );
};

export default Home;
