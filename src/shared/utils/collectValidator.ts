import * as yup from 'yup';

export const collectValidator = yup.object({
  body: yup.object({
    name: yup.string().required('El nombre es requerido'),
    price: yup.string(),
    observations: yup.string(),
    owner: yup.string().required('El id del sombrero es requerido'),
  }),
});
