 import * as Yup from 'yup';

export const NewProductSchema = Yup.object().shape({
   title: Yup.string()
     .min(2, 'El nombre esta corto!')
     .max(50, 'El nombre esta muy largo!')
     .required('Required'),
   price: Yup.string()
     .required('Required'),
   description: Yup.string().required('Required'),
 });