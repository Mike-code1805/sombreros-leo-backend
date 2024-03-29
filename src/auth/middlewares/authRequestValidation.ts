import * as yup from 'yup';

export const singInUserSchema = yup.object({
  body: yup.object({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .min(5, 'password must be at least 5 characters')
      .required('Password is required'),
  }),
});

export const signUpUserSchema = yup.object({
  body: yup.object({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .min(5, 'password must be at least 5 characters')
      .required('Password is required'),
    passwordConfirmation: yup
      .string()
      .required('Password confirmation is required')
      .oneOf([yup.ref('password'), null], 'Paswords must match'),
  }),
});