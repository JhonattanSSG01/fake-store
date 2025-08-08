"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NewProductSchema } from "@/schemas/newProduct";

const NewProduct = () => {
    return (
        <div>
            <h1>New Product!!!</h1>
            <Formik
                initialValues={{ title: '', price: '', description: '' }}
                validationSchema={NewProductSchema}
                onSubmit={(values, { setSubmitting }) => {
                    /* setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400); */
                    console.log(values);
                    
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <fieldset>
                            <label htmlFor="product">Nombre del producto</label>
                            <Field type="text" name="product" />
                            <ErrorMessage name="product" component="div" />

                        </fieldset>
                        <fieldset>
                            <label htmlFor="price">Precio del producto</label>
                            <Field type="number" name="price" />
                            <ErrorMessage name="price" component="div" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="desc">Description del producto</label>
                            <Field type="text" name="desc" />
                            <ErrorMessage name="desc" component="div" />
                        </fieldset>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default NewProduct;