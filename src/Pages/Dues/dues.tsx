import React from "react";
import {useState} from "react";
import "./dues.css";
import { useForm } from "react-hook-form";
import { PaystackButton } from 'react-paystack';

type FormValues = {
  email: string;
  matric: string;
  department: string;
  level: number;
};

const Dues = () => {
  const publicKey = "pk_test_81de634c096cf9617586a6f43c07c0f37d2f711a"
  const amount = 500 * 100 // Remember, set in kobo!
  const [matric, setMatric] = useState("")
  const [email, setEmail] = useState("")
  const [level, setLevel] = useState("")
  const [department, setDepartment] = useState("")

  const componentProps = {
    email,
    amount,
    metadata: {
      matric,
      level,
      department,

    },
    publicKey,
    currency: "NGN",
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for paying your Dues!"),
    onClose: () => alert("Wait! Don't leave :("),
  }


  const form = useForm<FormValues>({
    
  });
  const {register, handleSubmit, formState} = form;
  const {errors} = formState;
  const onSubmit = (data: FormValues) => {
    console.log("form submitted", data);
  };

  return (
    <div className="container-fluid dues-contain d-flex justify-content-center align-items-center min-vh-100 ">
      <div className="row border rounded-5 shadow dues-box-area">
        <div className="col-md-6 dues-left-box d-flex justify-content-center align-items-center flex-column">
          <p className="text-primary dues-sbtxt1">
            NUESA JOSTUM - Online Payment made easy
          </p>
          <p className="text-primary text-wrap dues-sbtxt2">
            We are a Team of Excellence, and we are committed to the right order
            of doing things. We have a heavy blueprint, a unique framework that
            would birth first-of-its-kind ideas and creatives, for you, our
            institute, and our immediate community. And one of the ways you can
            support us on this journey is by paying your annual due. This due
            will aid our moves and help us give you the best experience, for the
            first time in our history. Thank you.
          </p>
        </div>

        <div className="col-md-6 dues-right-box">
          <div className="row align-items-center">
            <div className="dues-header-text mb-4">
              <h2>Welcome, </h2>
              <p>we are glad to have you here</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className=" mb-3">
              <input
                type="text"
                className="form-control-lg fs-6 text-uppercase w-100 dues-input"
                placeholder="Matric No."
                id="matric"
                {...register("matric", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                onChange={(e) => setMatric(e.target.value)}
              />
              <p className="error">{errors.matric?.message}</p>
            </div>  
            <div className=" mb-3">
              <input
                type="email"
                className="form-control-lg fs-6 text-uppercase w-100 dues-input"
                placeholder="Email."
                id="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="error">{errors.email?.message}</p>
            </div>  
          
            <div className="mb-3">
              <select className=" dues-control form-control-lg fs-6 w-100" id="department"
                {...register("department", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                onChange={(e) => setDepartment(e.target.value)}>
                  <option value="00" selected>Choose Department...</option>
                <option value="agric">Agric & Environmental Engineering</option>
                <option value="civil">Civil Engineering</option>
                <option value="eee">
                  Electrical & Electronics Engineering
                </option>
                <option value="mech">Mechanical Engineering</option>
              </select>
              <p className="error">{errors.department?.message}</p>
            </div>

            <div className="mb-3">
              <input
                type="tel"
                className="form-control-lg fs-6 text-uppercase w-100 dues-input"
                placeholder="Level"
                id="level" 
                {...register("level", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
                onChange={(e) => setLevel(e.target.value)}
              />
              <p className="error">{errors.level?.message}</p>
            </div>
           

            <div className="form-group mb-5 d-flex justify-content-between">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="form-check"
                  id="formCheck"
                  value="" 
                  required
                />
                <label
                  htmlFor="formCheck"
                  className="form-check-label text-secondary"
                >
                  Verify the information entered.
                </label>
              </div>
              </div>    
              <PaystackButton {...componentProps} className="dues-btn" />
               </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dues;
