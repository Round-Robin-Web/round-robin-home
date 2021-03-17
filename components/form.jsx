import React from 'react';
import { Formik } from 'formik';

const ContactForm = () => {
    return (
        <div>
          <h1>Anywhere in your app!</h1>
          <Formik
            initialValues={{ email: '', password: ''}}
            validate={values=> {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
          >

          </Formik>
        </div>
    )
}

export default ContactForm;