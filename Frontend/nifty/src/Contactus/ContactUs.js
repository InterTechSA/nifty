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

const ContactUs = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <p>You can reach us at contact@company.com</p>
    </Container>
  );
};

export default ContactUs;
