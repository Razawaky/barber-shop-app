import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from "yup";
import Axios from "axios";

function FormTest() {

  const handleClickRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    } );
  };
  const handleClickLogin = (values) => console.log(values);

  const validationLogin = yup.object().shape({
    email: yup.string().email("Email Inválido").required("Campo obrigatório"),
    password: yup.string().min(8, "Senha muito curta").required("Campo obrigatório"),
  })

  const validationRegister = yup.object().shape({
    email: yup.string().email("Email Inválido").required("Campo obrigatório"),
    password: yup.string().min(8, "Senha muito curta").required("Campo obrigatório"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais")
  })
  return (
  <>
    <div className="container">

      <h1 className="text-teal-600 p-2">
        Login
      </h1> <br />

      <Formik 
        initialValues={{}} 
        onSubmit={handleClickLogin} 
        validationSchema={validationLogin} 
        >
        <Form className="login-form p-2">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeHolder="Email" />
            <ErrorMessage name="email" component="span" className="form-error" />
          </div>
          <br />
          <div className="login-form-group">
            <Field name="password" className="form-field" placeHolder="Senha" />
            <ErrorMessage name="password" component="span" className="form-error" />
          </div>
          <br />
          <button className="button" type="submit">login</button>
        </Form>
      </Formik>

       {/* outro */}
      <h1 className="text-teal-600 p-2">
        Registro
      </h1> <br />

      <Formik 
        initialValues={{}} 
        onSubmit={handleClickRegister} 
        validationSchema={validationRegister} 
        >
        <Form className="login-form p-2">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeHolder="Email" />
            <ErrorMessage name="email" component="span" className="form-error" />
          </div>

          <br />
          <div className="login-form-group">
            <Field name="password" className="form-field" placeHolder="Senha" />
            <ErrorMessage name="password" component="span" className="form-error" />
          </div>

          <br />
          <div className="login-form-group">
            <Field name="confirmPassword" className="form-field" placeHolder="Confirme sua senha" />
            <ErrorMessage name="confirmPassword" component="span" className="form-error" />
          </div>

          <br />
          <button className="button" type="submit">login</button>
        </Form>
      </Formik>
    </div>
  </>
  );
}

export default FormTest;