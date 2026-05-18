import "./style/login.scss"
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { validateLogin } from "../../utils/validate"
import { useAuth } from "../hook/useAuth"
import { useSelector } from "react-redux"


const Login = () => {

    const navigate = useNavigate();

    const { loginCurrentUser } = useAuth();
    //   const currentUser = useSelector((state) =>  state.auth.user);


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            role: ''
        },
        validationSchema: validateLogin,
        onSubmit: async values => {
            await loginCurrentUser({ email: values.email, role: values.role, password: values.password });
            //   console.log(currentUser);
        }
    })

    return (
        <div className='LoginPage'>
            <div className="form">
                <h4>Please Enter Your Details</h4>
                <h2>Welcome Back</h2>
                <form className="formInputs" onSubmit={formik.handleSubmit}>

                    <div className="inputBlock">
                        <label htmlFor="email">Email Address</label>
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
                        ) : null}
                    </div>

                    <div className="inputBlock">
                        <label htmlFor="password">Password</label>
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
                        ) : null}
                    </div>

                    <div className="inputBlock">
                        <label htmlFor="role">Role</label>
                        <input
                            id="role"
                            name="role"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.role}
                        />
                        {formik.touched.role && formik.errors.role ? (
                            <div className="errorDiv">{formik.errors.role}</div>
                        ) : null}
                    </div>

                    <button className="submitBtn" type="submit">Submit</button>
                </form>
                <div className="registerLink"><p>Don't have an Account? <Link className="menu" to={'/register'}>Register</Link></p></div>
            </div>

            <ToastContainer position='top-right' />
        </div>
    )
}

export default Login