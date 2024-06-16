import React, { useState } from 'react';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';

const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  padding: 16px;
`;

const HeroSection = styled.section`
  position: relative;
  background-color: #002244;
  color: #fff;
  padding: 16px 0;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const HeroImage = styled.img`
  max-width: 100%;
`;

const Section = styled.section`
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
  text-align: center;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlusIcon = styled.i`
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #007BFF;
  padding: 16px;
  cursor: pointer;
  display: ${props => props.visible ? 'none' : 'flex'};
`;

const IconDot = styled.div`
  margin: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const SocialMediaIcons = styled.div`
  width: fit-content;
  background-color: #04AA6D;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: ${props => props.visible ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 2;

`;

const FormContainer = styled.div`
  background-color: aliceblue;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  max-width: 40%;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 40%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 40%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CustomerReviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 100%;
  margin-top: 40px;
`;

const ReviewCard = styled.div`
  max-width: 30%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
`;

const ReviewAuthor = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const ReviewText = styled.p`
  font-size: 1rem;
  margin-top: 10px;
`;


const Home = () => {

  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  const generateReviews = () => {
    const reviews = [
      { id: 1, rating: 4.5, author: 'John Doe', text: 'Excellent service! They fixed my plumbing issue quickly.' },
      { id: 2, rating: 5, author: 'Jane Smith', text: 'Outstanding painters! They transformed my home beautifully.' },
      { id: 3, rating: 4, author: 'Michael Johnson', text: 'Great experience with their carpentry services. Highly recommended.' },
      { id: 4, rating: 4.5, author: 'Emily Brown', text: 'Professional electricians who resolved my electrical problems efficiently.' }
    ];

    return reviews.map(review => (

      <ReviewCard key={review.id}>
        {Array.from({ length: Math.floor(review.rating) }, (_, index) => (
          <i key={index} className="fas fa-star"></i>
        ))}
        {review.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}        <ReviewAuthor>{review.author}</ReviewAuthor>
        <ReviewText>{review.text}</ReviewText>
      </ReviewCard>
      
    ));
  };

  return (
    <>
      <HeroSection>

        <Container>

          <HeroContent>
            <Title>Your Trusted Handyman Service Provider</Title>
            <HeroSubtitle>Book reliable home services including plumbing, gardening, electrical work, and more.</HeroSubtitle>
          </HeroContent>

          <HeroImage src="/Assets/background.jpg" alt="Handyman Services" />
        </Container>

      </HeroSection>

      <Section>

        <Container>

          <Title>Why Choose Us?</Title>

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

          <Title>Our Services</Title>

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

        <Container>
          <Title>About Us</Title>
          <FeatureDescription>
            Nifty has been serving homeowners since 2005, providing exceptional handyman services across the country. Our mission is to deliver high-quality, reliable services that exceed customer expectations. Over the years, we have built a reputation for professionalism, expertise, and customer satisfaction, making us a trusted choice for all your home improvement needs.
          </FeatureDescription>
          <FeatureDescription>
            Our impact extends beyond just fixing things; we aim to enhance the quality of life for our customers by creating safe, functional, and beautiful living spaces. Whether it's plumbing, electrical work, painting, carpentry, or general repairs, Nifty is dedicated to making your home a better place.
          </FeatureDescription>

          <FormContainer>
            <FormTitle>Get in touch with our team.</FormTitle>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name:</Label>
                <Input type="text" id="name" name="name" required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email:</Label>
                <Input type="email" id="email" name="email" required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message:</Label>
                <TextArea id="message" name="message" rows="4" required></TextArea>
              </FormGroup>

              <SubmitButton type="submit">Submit</SubmitButton>
            </form>
          </FormContainer>
        </Container>

        <Container>
          <Title>Our Partners</Title>
          <FeatureDescription>Discover our trusted partner.</FeatureDescription>

          <FeaturesContainer>

            <FeatureItem>
              <FeatureIcon><i className="fas fa-tools"></i></FeatureIcon>
              <FeatureTitle>InterTechSA</FeatureTitle>
              <FeatureDescription>Choose from a variety of handyman services tailored to your needs.</FeatureDescription>
            </FeatureItem>

          </FeaturesContainer>

        </Container>

        <Container>
          <Title>Social Media</Title>
          <FeatureDescription>Connect with us on social media.</FeatureDescription>

          <SocialMediaWrapper>

            {!popupVisible && <PlusIcon className={`fas ${popupVisible ? 'fa-minus-circle' : 'fa-plus-circle'}`} onClick={togglePopup}></PlusIcon>}
            <SocialMediaIcons visible={popupVisible} onClick={togglePopup}>
              <IconDot>
                <i className="fab fa-facebook-f"></i>
              </IconDot>
              <IconDot>
                <i className="fab fa-twitter"></i>
              </IconDot>
              <IconDot>
                <i className="fab fa-instagram"></i>
              </IconDot>
              <IconDot>
                <i className="fab fa-linkedin-in"></i>
              </IconDot>
            </SocialMediaIcons>
          </SocialMediaWrapper>
        </Container>

        <Container>
          <Title>Customer Reviews</Title>
          <FeatureDescription>Read what our customers say about us.</FeatureDescription>

          <CustomerReviews>
            {generateReviews()}
          </CustomerReviews>
        </Container>



      </Section>
    </>
  );
};

export default Home;
