import
React
  from 'react';

import {
  Image,
  Container,
  Title,
  Form,
  Input,
  Button,
  Label,
} from '../Common/Styles/Styles'

import {
  login
} from '../Common/Providers/Providers';

const SignIn = () => {

  const handleLogin = (event) => {

    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    login(username, password);
  }

  return (

    <Container
      justifyContent={'center'}
      flexDirection={'column'}
      margin={'0'}>

      <Title
        margin={'0'}
        color={'black'}>
        Sign In
      </Title>

      <Container
        width={'60%'}
        padding={'100px 64px'}
        backgroundColor={'#002244'}
        borderRadius={'16px'}
        justifyContent={'space-around'}
      >

        <Image
          width={'50%'}
          src="/Assets/login.svg"
          alt="login" />

        <Form
          onSubmit={handleLogin}>

          <Label htmlFor="username">Username:</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            required />

          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required />

          <Button type="submit">Sign In</Button>

        </Form>
      </Container>


    </Container>
  );
};

export default SignIn;
