import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import { Container, Row, Col, Button } from 'react-bootstrap'

const validate = values => {
  const errors = {};
  if(!values.username) {
    errors.username = ' *Required';
  }
  if(!values.password) {
    errors.password = ' *Required';
  }
  return errors;
}
const renderField = ({ input, label, type, meta: { touched, error }}) => (
  <Row>
    <Col  md={2}>
    <label>{label}</label>
    </Col>
    <Col  md={4}>
      <input {...input} placeholder={label} type={type}/>
      {touched && (error && <span style={{color:'red'}}>{error}</span>)}
    </Col>
  </Row>
)

  
class LoginForm extends Component {  
  
  loginHandleSubmit = values => {
    console.log(values, 'loginHandleSubmit');
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Container className="mt-5">
        <h3>Login</h3>
        <form onSubmit={handleSubmit(this.loginHandleSubmit)}>
          <Field 
            name="username"
            type="text"
            component={renderField}
            label="User Name: "
          />
          <Field 
            name="password"
            type="password"
            component={renderField}
            label="Password: "
          />
          <Button variant="outline-success" type="submit">Login</Button>
        </form>
      </Container>
    );
  }
}

export default reduxForm({
  form:'loginForm',
  validate
})(LoginForm);