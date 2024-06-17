import React,
{
  useState
} from 'react';

import {
  Container,
  Image,
  Title,
  Form,
  Input,
  Button,
  Label,
  ErrorMessage
} from '../Common/Styles/Styles'

const SignUp = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    setError('');

    if (password !== passwordConfirm) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password should be at least 8 characters');
      return;
    }

    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;
    const regexDigit = /[0-9]/;
    const regexSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (
      !regexUpperCase.test(password) ||
      !regexLowerCase.test(password) ||
      !regexDigit.test(password) ||
      !regexSpecialChar.test(password)
    ) {
      setError(
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
      );
      return;
    }

    setUsername('');
    setPassword('');
    setPasswordConfirm('');
    setError('');
  };

  return (

    <Container
      justifyContent={'center'}
      flexDirection={'column'}
      margin={'0'}>

      <Title
        margin={'0'}
        color={'black'}>
        Sign Up</Title>

      <Container
        width={'60%'}
        padding={'80px 64px'}
        backgroundColor={'#002244'}
        borderRadius={'16px'}
        justifyContent={'space-around'}
      >
        <Image
          width={'35%'}
          src="/Assets/register.svg"
          alt="Register" />

        <Form
          onSubmit={handleSignUp}
          aria-label="Sign Up Form">

          <Label htmlFor="username"> Username</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
            required
          />

          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <Label htmlFor="passwordConfirm">Confirm Password</Label>
          <Input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            placeholder="Confirm your password"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
            required
          />

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button type="submit">Sign Up</Button>
        </Form>

      </Container>




    </Container>
  );
};

export default SignUp;
