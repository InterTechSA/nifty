import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Image,
  Container,
  Icon,
  Title,
  FeatureItem,
  TextArea,
  P1,
  Form,
  Input,
  Button,
  Label,
  IconContainer,
} from '../Common/Styles/Styles'

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
      { id: 1, rating: 2, author: 'John Doe', text: 'Excellent service! They fixed my plumbing issue quickly.' },
      { id: 2, rating: 5, author: 'Jane Smith', text: 'Outstanding painters! They transformed my home beautifully.' },
      { id: 3, rating: 3, author: 'Michael Johnson', text: 'Great experience with their carpentry services. Highly recommended.' },
      { id: 4, rating: 4, author: 'Emily Brown', text: 'Professional electricians who resolved my electrical problems efficiently.' }
    ];

    return reviews.map(review => (

      <FeatureItem
        borderRadius={'16px'}
        key={review.id}>

        <Container>
          {Array.from({ length: Math.floor(review.rating) }, (_, index) => (
            <i key={index} className="fas fa-star"></i>
          ))
          }
        </Container>

        {review.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}

        <P1>{review.author}</P1>

        <P1>{review.text}</P1>
      </FeatureItem>
    ));
  };

  return (
    <Container
      margin={'0'}
      flexDirection={'column'}>

      <Container
        borderRadius={'16px'}
        width={'100%'}
        margin={'0'}
        backgroundColor={'#002244'}
        flexDirection={'column'}>

        <Title>Your Trusted Handyman Service Provider</Title>

        <P1
          color={'#FFFFFF'}>
          Book reliable home services including plumbing, gardening, electrical work, and more.
        </P1>

        <Image
          borderRadius={'16px'}
          width={'100%'}
          src="/Assets/background.jpg"
          alt="Handyman Services" />
      </Container>

      <Container
        width={'100%'}
        flexDirection={'column'}>

        <Title
          margin={'0 0 12px 0'}
          color={'Black'}>
          Why Choose Us?
        </Title>

        <Container
          margin={'0'}
          borderRadius={'16px'}
          width={'100%'}
          gap={'16px'}
          backgroundColor={'#002244'}
          flexDirection={'row'}
          justifyContent={'space-around'}>

          <FeatureItem>
            <Icon className="fas fa-tools"></Icon>
            <Title>Wide Range of Services</Title>
            <P1>Choose from a variety of handyman services tailored to your needs.</P1>
          </FeatureItem>

          <FeatureItem>
            <Icon className="fas fa-users"></Icon>
            <Title>Verified Professionals</Title>
            <P1>Our professionals are thoroughly vetted for skill and reliability.</P1>
          </FeatureItem>

          <FeatureItem>
            <Icon className="fas fa-clock"></Icon>
            <Title>Flexible Scheduling</Title>
            <P1>Book appointments at your convenience, 24/7.</P1>
          </FeatureItem>

          <FeatureItem>
            <Icon className="fas fa-star"></Icon>
            <Title>Customer Service</Title>
            <P1>Enjoy dedicated support throughout your service experience.</P1>
          </FeatureItem>

        </Container>


        <Container
          width={'100%'}
          flexDirection={'column'}>
          <Title color='black'>Our Services</Title>


          <Container
            margin={'0'}
            width={'100%'}
            borderRadius={'16px 16px 0 0'}
            gap={'16px'}
            backgroundColor={'#002244'}
            flexDirection={'row'}
            justifyContent={'space-around'}>

            <FeatureItem>
              <Title>Plumbing</Title>
              <Icon className="fas fa-wrench"></Icon>
              <P1>Maintenance work for plumbing features.</P1>
            </FeatureItem>

            <FeatureItem>
              <Title>Painting</Title>
              <Icon className="fas fa-paint-brush"></Icon>
              <P1>Interior and exterior painting services.</P1>
            </FeatureItem>


            <FeatureItem>
              <Title>Carpentry</Title>
              <Icon className="fas fa-screwdriver"></Icon>
              <P1>Furniture assembly, repairs, and custom woodwork.</P1>
            </FeatureItem>


            <FeatureItem>
              <Title>Gardening</Title>
              <Icon className="fas fa-leaf"></Icon>
              <P1>Lawn care, landscaping, and garden maintenance.</P1>
            </FeatureItem>

          </Container>

          <Container
            margin={'0'}
            width={'100%'}
            gap={'16px'}
            borderRadius={'0 0 16px 16px'}
            backgroundColor={'#002244'}
            flexDirection={'row'}
            justifyContent={'space-around'}>

            <FeatureItem>
              <Title>Electrical Repairs</Title>
              <Icon className="fas fa-bolt"></Icon>
              <P1>Installation, wiring, and repair of electrical systems.</P1>
            </FeatureItem>

            <FeatureItem>
              <Title>General Repairs</Title>
              <Icon className="fas fa-hammer"></Icon>
              <P1>Fixing household items and general maintenance.</P1>
            </FeatureItem>

            <FeatureItem>
              <Title>Handyman for Hire</Title>
              <Icon className="fas fa-tools"></Icon>
              <P1>Available for various odd jobs and tasks around the home.</P1>
            </FeatureItem>

            <FeatureItem>
              <Title>Home Renovation</Title>
              <Icon className="fas fa-home"></Icon>
              <P1>Complete home remodeling and renovation services.</P1>
            </FeatureItem>
          </Container>
        </Container>

      </Container>

      <Container
        borderRadius={'16px'}
        width={'100%'}
        backgroundColor={'#002244'}
        flexDirection={'column'}>

        <Title
          margin={'0'}
        >About Us</Title>

        <P1 color='#FFFFFF'>
          Nifty has been serving homeowners since 2005, providing exceptional handyman services across the country. Our mission is to deliver high-quality, reliable services that exceed customer expectations. Over the years, we have built a reputation for professionalism, expertise, and customer satisfaction, making us a trusted choice for all your home improvement needs.
        </P1>

        <P1 color='#FFFFFF'>
          Our impact extends beyond just fixing things; we aim to enhance the quality of life for our customers by creating safe, functional, and beautiful living spaces. Whether it's plumbing, electrical work, painting, carpentry, or general repairs, Nifty is dedicated to making your home a better place.
        </P1>

        <Container
          flexDirection={'column'}
          borderRadius={'16px'}
          backgroundColor={'#0056b3'}>

          <Title
            margin={'0'}
          >Get in touch with our team.</Title>

          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">Name:</Label>
            <Input type="text" id="name" name="name" required />

            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" required />

            <Label htmlFor="message">Message:</Label>
            <TextArea id="message" name="message" rows="4" required></TextArea>

            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </Container>

      <Container
        flexDirection={'column'}
        alignItems={'center'}
        width={'100%'}>

        <Title
          margin={'0'}
          color='black'>Our Partners</Title>

        <Container
          flexDirection={'column'}
          width={'100%'}
          borderRadius={'16px'}
          alignItems={'center'}
          backgroundColor={'#002244'}>

          <P1
            color='#FFFFFF'>
            Discover our trusted partner.
          </P1>

          <FeatureItem
            borderRadius={'16px'}>
            <Title>InterTechSA</Title>
            <Image
              borderRadius={'16px'}
              width={'50%'}
              src="/Assets/logo.svg"
              alt="Handyman Services" />
            <P1>Choose from a variety of handyman services tailored to your needs.</P1>
            
          </FeatureItem>

        </Container>
      </Container>

      <Container
        width={'100%'}
        flexDirection={'column'}>

        <Title
          margin={'0'}
          color='black'>Social Media</Title>

        <Container
          width={'100%'}
          backgroundColor={'#002244'}
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'center'}>

          <P1 color='#FFFFFF'>Connect with us on social media.</P1>

          {!popupVisible &&

            <Icon
              color={'#007BFF'}
              alignItems={'center'}
              className={'fas fa-plus-circle'}
              onClick={togglePopup}>
            </Icon>
          }

          <IconContainer
            width={'100%'}
            alignItems={'center'}
            justifyContent={'space-evenly'}
            visible={popupVisible} onClick={togglePopup}>

            <Icon className="fab fa-facebook-f" />
            <Icon className="fab fa-twitter" />
            <Icon className="fab fa-instagram" />
            <Icon className="fab fa-linkedin-in" />
          </IconContainer>

        </Container>
      </Container>

      <Container
        flexDirection={'column'}>
        <Title
          margin={'0'}
          color='black'>Customer Reviews</Title>

        <P1>Read what our customers say about us.</P1>

        <Container
          borderRadius={'16px'}
          margin={'0'}
          width={'100%'}
          gap={'16px'}
          backgroundColor={'#002244'}
          flexDirection={'row'}
          justifyContent={'space-around'}>

          {generateReviews()}
        </Container>
      </Container>
    </Container>

  );
};

export default Home;
