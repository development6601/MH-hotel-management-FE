import "./style/login.scss"
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { validateLogin } from "../../../utils/validate"
import { useAuth } from "../hook/useAuth"
import { useSelector } from "react-redux"

const Login = () => {

    const navigate = useNavigate();

    const { loginCurrentUser } = useAuth();
    const currentUser = useSelector((state) => state.auth.user);
    const error = useSelector((state) => state.auth.error);

    useEffect(() => {
        if (currentUser) {
            toast.info('User Login SuccessFully');
            navigate("/");
        }
        else {
            toast.info(error)
        }
    }, [currentUser, error])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            role: ''
        },
        validationSchema: validateLogin,
        onSubmit: async values => {
            await loginCurrentUser({ email: values.email, role: values.role, password: values.password }); 
        }
    })

    return (
        <div className="LoginPage">
            <div className="content">
                <div className="left-part">
                    <h4>ATLANTA</h4>
                    <div className="textContent">
                        <p>Experience comfort beyond expectations.</p>
                        <p>Find the perfect room,</p>
                        <p>and make every moment feel special.</p>
                    </div>

                </div>
                <div className="right-part">
                    <div className="textContent">
                        <h4>Please Enter Your Details</h4>
                        <h2>Welcome Back</h2>
                    </div>

                    <div className="form">

                        <div className="inputContent">
                            <label htmlFor="email">Email Address</label>
                            <div className="inputBlock">
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

                        </div>

                        <div className="inputContent">
                            <label htmlFor="password">Password</label>
                            <div className="inputBlock">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                <p className="forgotPassword"><Link className="forgotPasswordLink" to={'/forgotPassword'}>Forgot Password?</Link></p>
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="errorDiv">{formik.errors.password}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className="inputContent">
                            <label htmlFor="role">Role</label>
                            <div className="inputBlock">
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
                        </div>
                        <button className="submitBtn" onClick={formik.handleSubmit} type="submit">Submit</button>
                    </div>
                    <div className="registerLink"><p>Don't have an Account?<Link className="menu" to={'/register'}>Register</Link></p></div>
                </div>
            </div>
            <ToastContainer position='bottom-right' />
        </div>
    )
}

export default Login


{/* <p>Where hospitality begins and every guest experience matters.</p>
                        <p>Manage stays, service, and smiles all in one place.</p> */}