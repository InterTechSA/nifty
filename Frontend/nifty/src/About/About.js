import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const About = () => {
  return (
    <Container>
      <Title>About Us</Title>
      <p>We are a company dedicated to providing the best services...</p>
    </Container>
  );
};

export default About;
