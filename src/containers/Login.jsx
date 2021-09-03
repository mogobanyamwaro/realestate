import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
import Image2 from '../assets/images/Image2.jpg';
import styled from 'styled-components';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <MainForm>
      <Helmet>
        <title>Realest Estate - Login</title>
        <meta name="description" content="login page" />
      </Helmet>
      <Title>Sign In</Title>
      <SubTitle>Sign into your Account</SubTitle>
      <Form onSubmit={(e) => onSubmit(e)}>
        <div>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>
        <Button>Login</Button>
      </Form>
      <SubTitle>
        Don't have an account?
        <SignLink to="/signup">Sign Up</SignLink>
      </SubTitle>
    </MainForm>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

const MainForm = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    ),
    url(${Image2});
  background-image: Image1;

  background-size: cover;
`;
const Form = styled.form`
  margin-top: 50px;
  text-align: center;
`;
const Input = styled.input`
  ::placeholder {
    color: #fff;
  }
  display: block;
  width: 350px;
  height: 40px;
  margin: 20px;
  border: none;
  outline: none;
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  background: transparent;
  color: #fff;
`;

const Button = styled.button`
  width: 340px;
  height: 40px;
  font-size: 17px;
  background-color: steelblue;
  border: none;
  margin-top: 30px;
  color: #fff;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #fff;
`;
const SubTitle = styled.p`
  margin-bottom: 10px;
  margin-top: 10px;
  color: #fff;
  font-size: 15px;
`;
const SignLink = styled(Link)`
  color: yellow;
`;
