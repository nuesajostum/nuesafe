import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock} from "@fortawesome/free-solid-svg-icons";

type FormValues = {
    loginmatric: string;
    loginpassword: string;
};


const LoginForm= () => {
const form = useForm<FormValues>({
    mode: "onTouched",
});
    const {register, handleSubmit, formState} = form;
    const {errors} = formState;
    const onSubmit = (data: FormValues) => {
      console.log("form submitted", data);
    };
  return (

    <div className="container-fluid login-contain d-flex justify-content-center align-items-center min-vh-100 ">
        <div className='row border rounded-5 shadow box-area'>
            <div className='col-md-6 left-box d-flex flex-column'>
                
            </div>
        
        <div className='col-md-6 right-box'>
            <div className='row align-items-center'>
                <div className='login-header-text mb-4'>
                    <h2>Hello, </h2>
                    <p>We are happy to see you</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='login-flex'>
                    <div className='input'>
                    <FontAwesomeIcon icon={faUser} className='icon'/>
                    <input type='text' className='form-control-lg fs-6 text-uppercase' placeholder='Matric No.' id='loginmatric'
                    {...register("loginmatric", {
                        required: {
                          value: true,
                          message: "Matric No. is required",
                        }
                        })} />
                        
                </div>
                <p className="login-error">{errors.loginmatric?.message}</p>
                </div>
                <div className='login-flex'>
                    <div className='input'>
                <FontAwesomeIcon icon={faLock} className='icon' />
                    <input type='password' className='form-control-lg fs-6' placeholder='Password' id='loginpassword' 
                    {...register("loginpassword", {
                        required: {
                          value: true,
                          message: "Password is required",
                        }
                        })}
                  />
                </div>
                <p className="login-error">{errors.loginpassword?.message}</p>
                </div>
                <div className='input-group mb-5 d-flex justify-content-between'>
                    <div className='form-check'>
                        <input type="checkbox" className='form-check-input' name='form-check' id='formCheck' />
                        <label htmlFor="formCheck" className='form-check-label text-secondary'>Remember Me!</label>
                    </div>
                    <div className='forgot'>
                        <small><Link to="" className="text-decoration-none">Forgot Password?</Link></small>
                    </div>
                    <div className='input-group mb-3'>
                        <button className='btn btn-lg btn-primary w-100 fs-6 login-btn'>Login</button>
                    </div>
                    <div className='row'>
                        <small>Don't have account?<Link to="/Signup" className="text-decoration-none mx-1">Sign up</Link></small>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
    </div>



  )
}

export default LoginForm;