import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

type FormValues = {
  signupsurname: string;
  signupemail: string;
  lastnamE: string;
  firstnamE: string;
  signupstate: string;
  signupdob: string;
  signupphone: number;
  signupmatric: string;
  signuppassword: string;
  signupconfirmpassword: string;
  formCheck: string;
};

const SignupForm = () => {

  const form = useForm<FormValues>({
    mode: "onTouched",
  });
  const {register, handleSubmit, formState, reset} = form;
  
  const {errors, isSubmitting, isSubmitSuccessful, isValid, isDirty} = formState;
  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };

  useEffect(() => {
    if(isSubmitSuccessful){
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <div className="container-fluid signup-contain d-flex justify-content-center align-items-center min-vh-100 ">
      <div className="row border rounded-5  shadow su-box-area">
        <div className="col-md-12 su-right-box">
          <div className="row align-items-center">
            <div className="su-header-text mb-4">
              <p className="su-header">STUDENT REGISTRATION FORM </p>
              <p>Please fill out this form with the required information.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-2">
              <input
                type="text"
                className="form-control-lg text-capitalize fs-6 w-100 f-control"
                placeholder="Surname"
                id="signupsurname"
                {...register("signupsurname", {
                  required: {
                    value: true,
                    message: "Surname is required",
                  },
                  })}
              />
              <p className="error">{errors.signupsurname?.message}</p>
            </div>
            <div className="row">
                <div className="col-md-6 mb-2">
                  <input
                    type="text"
                    className="f-control text-uppercase form-control-lg text-capitalize fs-6 w-100"
                    id="firstnamE"
                    placeholder="First name"
                    {...register("firstnamE", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <p className="error">{errors.firstnamE?.message}</p>
                </div>
                <div className="col-md-6 mb-2">
                  <input
                    type="text"
                    className="f-control text-uppercase form-control-lg fs-6 w-100"
                    id="lastnamE"
                    placeholder="Last name"
                    {...register("lastnamE", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <p className="error">{errors.lastnamE?.message}</p>
                </div>
              </div>

            <div className="mb-2">
               <select id="signupstate" className="f-control
               form-control-lg fs-6 w-100"
               {...register("signupstate", {
                 required: {
                   value: true,
                   message: "This field is required",
                 },
               })}>
                    <option selected>State of Origin</option>
                    <option>ABUJA FCT</option>
                    <option>ABIA</option>
                    <option>ADAMAWA</option>
                    <option>AKWA IBOM</option>
                    <option>ANAMBRA</option>
                    <option>BAUCHI</option>
                    <option>BAYELSA</option>
                    <option>BENUE</option>
                    <option>BORNO</option>
                    <option>CROSS RIVER</option>
                    <option>DELTA</option>
                    <option>EBONYI</option>
                    <option>EDO</option>
                    <option>EKITI</option>
                    <option>ENUGU</option>
                    <option>GOMBE</option>
                    <option>IMO</option>
                    <option>JIGAWA</option>
                    <option>KADUNA</option>
                    <option>KANO</option>
                    <option>KATSINA</option>
                    <option>KEBBI</option>
                    <option>KOGI</option>
                    <option>KWARA</option>
                    <option>LAGOS</option>
                    <option>NASSARAWA</option>
                    <option>NIGER</option>
                    <option>OGUN</option>
                    <option>ONDO</option>
                    <option>OSUN</option>
                    <option>OYO</option>
                    <option>PLATEAU</option>
                    <option>RIVERS</option>
                    <option>SOKOTO</option>
                    <option>TARABA</option>
                    <option>YOBE</option>
                    <option>ZAMFARA</option>
                  </select>
              <p className="error">{errors.signupstate?.message}</p>
            </div>
            <div className="mb-2">
              <input
                type="date"
                className="form-control-lg text-capitalize fs-6 w-100 f-control"
                placeholder="Date of Birth"
                id="signupdob"
                {...register("signupdob", {
                  required: {
                    value: true,
                    message: "DOB is required",
                  },
                })}
              />
            </div>
            <p className="error">{errors.signupdob?.message}</p>
            <div className="input-group mb-2">
              <label className="input-group-text f-select" htmlFor="inputGroupSelect01">
                Sex
              </label>
              <select className="form-select" id="inputGroupSelect01">
                <option selected>Male</option>
                <option value="1">Female</option>
              </select>
            </div>
            <div className="signup-form mb-2">
              <input
                type="email"
                className="form-control-lg fs-6 w-100 f-control"
                placeholder="Email Address"
                id="signup-email"
                {...register("signupemail",{
                  pattern:{
                    value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[+a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email format",
                  },
                  validate: {
                    notAdmin: (fieldvalue) => {
                      return (
                        fieldvalue !== "admin@example.com" ||
                        "Enter a different email address"
                      );
                    },
                    notBlackListed: (fieldValue) => {
                      return(
                        !fieldValue.endsWith("baddomain.com") ||
                        "This domain is not supported"
                      );
                    },
                  },
                })}
              />
              <p className="error">{errors.signupemail?.message}</p>
            </div>
            <div className="mb-2">
              <input
                type="number"
                className="form-control-lg fs-6 w-100 f-control"
                placeholder="Phone No."
                id="signupphone"
                {...register("signupphone", {
                  required: {
                    value: true,
                    message: "Phone No. is required",
                  },
                })}
              />
              <p className="error">{errors.signupphone?.message}</p>
            </div>
            <div className="input-group mb-2">
              <label className="input-group-text f-select" htmlFor="inputGroupSelect02">
                Department
              </label>
              <select className="form-select" id="inputGroupSelect02">
                <option value="agric">Agric & Environmental Engineering</option>
                <option value="civil">Civil Engineering</option>
                <option value="eee">
                  Electrical & Electronics Engineering
                </option>
                <option value="mech">Mechanical Engineering</option>
              </select>
            </div>
            <div className="input-group mb-2">
              <label className="input-group-text f-select" htmlFor="inputGroupSelect03">
                Level
              </label>
              <select className="form-select" id="inputGroupSelect03">
                <option value="1" selected>100</option>
                <option value="2">200</option>
                <option value="3">300</option>
                <option value="4">400</option>
                <option value="5">500</option>
              </select>
            </div>
            <div className=" mb-2">
              <input
                type="text"
                className="form-control-lg text-uppercase fs-6 w-100 f-control"
                placeholder="Matric No."
                id="signupmatric"
                {...register("signupmatric", {
                  required: {
                    value: true,
                    message: "Matric No. is required",
                  },
                })}
              />
              <p className="error">{errors.signupmatric?.message}</p>
            </div>
            <div className=" mb-2">
              <input
                type="password"
                className="form-control-lg fs-6 w-100 f-control"
                placeholder="Password"
                id="signuppassword"
                {...register("signuppassword", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
              />
              <p className="error">{errors.signuppassword?.message}</p>
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="form-control-lg fs-6 w-100 f-control"
                placeholder="Confirm Password"
                id="signupconfirmpassword"
                {...register("signupconfirmpassword", {
                  required: {
                    value: true,
                    message: "Confirm Password",
                  },
                })}
              />
              <p className="error">{errors.signupconfirmpassword?.message}</p>
            </div>
            <div className="input-group mb-5 d-flex justify-content-between">
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-primary w-100 fs-6 register-btn"
                disabled={!isDirty || !isValid || isSubmitting}>
                  Register
                </button>
              </div>
              </div>
              </form>
              <div className="row">
                <small>
                  Already have a account?
                  <Link to="/Login" className="text-decoration-none mx-1">
                    Login
                  </Link>
                  here
                </small>
              </div>
              </div>
            </div>
            </div>
            </div>
  );
};

export default SignupForm;
