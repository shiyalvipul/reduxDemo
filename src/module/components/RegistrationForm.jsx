import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'

class RegistrationForm extends Component {


  submitHandler = values => {
    console.log(values,'handleSubmit');
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return(
      <>
        <h3>Registration Form</h3>
        <form onSubmit={handleSubmit(this.submitHandler)}>
          <div>
            <label>First Name: </label>
              <Field
                name="firstName"
                type="text"
                component="input"
                placehoder="First Name"
              />
          </div>
          <div>
            <label>Last Name: </label>
              <Field
                name="lastName"
                type="text"
                component="input"
                placehoder="Last Name"
              />
          </div>
            <label>Sex: </label>
            <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
            <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
          <div>
            <label>Favorite Color: </label>
            <Field name="favoriteColor" component="select">
              <option></option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
            </Field>
          </div>
          <div>
            <label>Employed: </label>
            <Field name="employed" id="employed" component="input" type="checkbox" />
          </div>
          <div>
            <label>Notes: </label>
              <Field name="notes" component="textarea"/>
          </div>
          <div>
            <button type="submit" disabled={pristine || submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
        </form>
      </>
    );
  }
}
export default reduxForm({
  form: 'registration-form'
}) (RegistrationForm);