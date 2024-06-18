import styled from 'styled-components';
import { Link } from 'react-router-dom';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const Container = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  display: ${props => props.display || 'flex'};
  background-color: ${props => props.backgroundColor};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems || 'center'};
  padding: ${props => props.padding || '16px'};
  margin: ${props => props.margin || '16px'};
  background-image: url(${props => props.backgroundImg});
  gap: ${props => props.gap};

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: ${props => props.mobileFlexDirection || 'column'};
    padding: 8px;
    margin: 8px;
  }
`;

export const FeatureItem = styled.div`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'column'};
  align-items: ${props => props.alignItems || 'center'};
  text-align: ${props => props.textAlign || 'center'};
  padding: ${props => props.padding || '16px'};
  background-color: ${props => props.backgroundColor || '#0056b3'};
  color: ${props => props.color || 'white'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || '4px'};
  max-height: ${props => props.maxHeight || '30%'};
  max-width: ${props => props.maxWidth || '40%'};
  box-shadow: ${props => props.boxShadow || '0 0 20px rgba(0,0,0,0.1)'};
  
  &:hover {
    cursor: ${props => props.cursor || 'pointer'};
    background-color: ${props => props.hoverBackgroundColor || '#4CAF50'};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px;
    max-width: 100%;
  }
`;

export const Nav = styled.nav`
  background: ${props => props.background || '#002244'};
  height: ${props => props.height || '80px'};
  display: ${props => props.display || 'flex'};
  justify-content: ${props => props.justifyContent || 'space-between'};
  padding: ${props => props.padding || '0 20px'};
  align-items: ${props => props.alignItems || 'center'};

  @media (max-width: ${breakpoints.mobile}) {
    height: 60px;
    padding: 0 10px;
  }
`;

export const Image = styled.img`
  border-radius: ${props => props.borderRadius};
  max-width: ${props => props.maxWidth};

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  color: ${props => props.color || '#FFFF'};
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize || '3rem'};
  font-weight: ${props => props.fontWeight || '700'};
  line-height: ${props => props.lineHeight || '1.2'};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const Form = styled.form`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'column'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
`;

export const Input = styled.input`
  padding: ${props => props.padding || '10px'};
  margin-bottom: ${props => props.marginBottom};
  border: ${props => props.border || '1px solid #ccc'};
  border-radius: ${props => props.borderRadius || '4px'};
  font-size: ${props => props.fontSize || '16px'};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  margin: ${props => props.margin || '16px'};
  padding: ${props => props.padding || '16px'};
  background-color: ${props => props.backgroundColor || '#0056b3'};
  color: ${props => props.color || 'white'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || '4px'};
  cursor: ${props => props.cursor || 'pointer'};
  font-size: ${props => props.fontSize || '18px'};
  
  &:hover {
    background-color: ${props => props.hoverBackgroundColor || '#4CAF50'};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px;
    font-size: 16px;
  }
`;

export const Label = styled.label`
  text-align: ${props => props.textAlign || 'left'};
  margin: ${props => props.marginBottom || '12px'};
  color: ${props => props.color || '#FFFF'};

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 8px;
  }
`;

export const ErrorMessage = styled.span`
  color: ${props => props.color};
  font-size: ${props => props.fontSize || '14px'};
  padding: ${props => props.padding || '8px 0'};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const NavLink = styled(Link)`
  color: ${props => props.color || '#fff'};
  text-decoration: ${props => props.textDecoration || 'none'};
  padding: ${props => props.padding || '12px'};
  height: ${props => props.height};
  display: ${props => props.display || 'flex'};
  align-items: ${props => props.alignItems || 'center'};
  font-size: ${props => props.fontSize || '21px'};
  transition: ${props => props.transition || 'background-color 0.3s ease'};
  
  &:hover {
    background: ${props => props.hoverBackground || '#037B4A'};
    border-radius: ${props => props.hoverBorderRadius || '5px'};
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px;
    font-size: 18px;
  }
`;

export const P1 = styled.p`
  font-size: ${props => props.fontSize || '1.5rem'};
  margin-bottom: ${props => props.marginBottom || '30px'};
  color: ${props => props.color};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

export const TextArea = styled.textarea`
  width: ${props => props.width || '40%'};
  padding: ${props => props.padding || '10px'};
  font-size: ${props => props.fontSize || '1rem'};
  border: ${props => props.border || '1px solid #ccc'};
  border-radius: ${props => props.borderRadius || '5px'};
  color: ${props => props.color};

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    padding: 8px;
    font-size: 0.9rem;
  }
`;

export const Icon = styled.i`
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  font-size: ${props => props.fontSize || '2rem'};
  color: ${props => props.color || '#FFFF'};
  padding: ${props => props.padding || '16px'};
  cursor: ${props => props.cursor || 'pointer'};
  align-items: ${props => props.alignItems};
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
    padding: 8px;
  }
`;

export const IconContainer = styled.div`
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  font-size: ${props => props.fontSize || '2rem'};
  color: ${props => props.color || '#007BFF'};
  padding: ${props => props.padding || '16px'};
  cursor: ${props => props.cursor || 'pointer'};
  display: ${props => props.visible ? 'flex' : 'none'};
  align-items: ${props => props.alignItems};
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px;
    font-size: 1.5rem;
  }
`;
