import "./style/register.scss"
import { useFormik } from 'formik';
import React from 'react'
import { validateRegister } from '../../utils/validate';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validateRegister,
    onSubmit: values => {
      const user = {
        name: values.name,
        email: values.email,
        password: values.password,
      }

      let users = JSON.parse(localStorage.getItem('Users')) ? JSON.parse(localStorage.getItem('Users')) : [];
      users.push(user);

      localStorage.setItem('Users', JSON.stringify(users));
      navigate('/login')
    }
  })
  return (
    <div className='RegisterPage'>
      <div className="form">
        <h4>Please Enter Your Details</h4>
        <h2>Create Your Identity</h2>
        <form className="formInputs" onSubmit={formik.handleSubmit}>

          <div className="inputBlock">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="errorDiv">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="inputBlock"><label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="errorDiv">{formik.errors.email}</div>
            ) : null}</div>


          <div className="inputBlock"><label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="errorDiv">{formik.errors.password}</div>
            ) : null}</div>


          <button className="submitBtn" type="submit">Submit</button>
        </form>
        <div className="LoginLink"><p>Don't have an Account?<Link className="menu" to={'/login'}>Login</Link></p></div>
      </div>
    </div>
  )
}

export default Register