import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { setAlert } from '../actions/alert';
import { signup } from '../actions/auth';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image1 from '../assets/images/Image1.jpg';
const SignUp = ({ setAlert, signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) setAlert('Passwords do not match', 'error');
    else signup({ name, email, password, password2 });
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <MainForm>
      <Helmet>
        <title>veelvyx Estate - Sign Up</title>
        <meta name="description" content="sign up page" />
      </Helmet>
      <Title>Sign Up</Title>
      <SubTitle>Create your Account</SubTitle>
      <Form onSubmit={(e) => onSubmit(e)}>
        <div>
          <Input
            className="auth__form__input"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
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
        <div className="auth__form__group">
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>
        <Button>Register</Button>
      </Form>
      <SubTitle>
        Already have an account? <SignLink to="/login">Sign In</SignLink>
      </SubTitle>
    </MainForm>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, signup })(SignUp);

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
    url(${Image1});
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
