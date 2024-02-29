import React from "react";
import "./alumni.css";
import { Link } from "react-router-dom";

const Alumni = () => {
  return (
    <div className="container-fluid Al-contain d-flex justify-content-center align-items-center min-vh-100 ">
      <div className="row border rounded-5 shadow Al-box-area">
        <div className="col-md-6 Al-left-box d-flex flex-column">
          <p className="text-primary Al-sbtxt1">
            Become a <br />
            Member
          </p>
          <p className="text-primary text-wrap Al-sbtxt2">
            <span>
              CONNECT WITH
              <br /> OVER 2000+
              <br /> NUESA JOSTUM <br />
              ALUMNI
            </span>
          </p>
        </div>

        <div className="col-md-6 Al-right-box">
          <div className="row align-items-center">
            <div className="Al-header-text mb-4">
              <p className="Al-header">
                NUESA JOSTUM ALUMNI REGISTRATION FORM{" "}
              </p>
              <p>Please fill out this form with the required information.</p>
            </div>
            <form class="needs-validation" novalidate>
              <div className="input-group mb-2">
                <select class="form-select" id="inputGroupSelect0001">
                  <option selected>Title</option>
                  <option value="1">Engr. Prof.</option>
                  <option value="1">Engr. Dr. </option>
                  <option value="1">Engr.</option>
                  <option value="1">Mr.</option>
                  <option value="1">Mrs.</option>
                  <option value="1">Miss.</option>
                </select>
              </div>
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control-lg text-uppercase fs-6 w-100 f-control"
                  placeholder="Surname"
                  name="Al-surname"
                  id="Al-surname"
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-2">
                  <input
                    type="text"
                    className="f-control text-uppercase form-control-lg fs-6 w-100"
                    id="validationCustom01"
                    placeholder="First name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6 mb-2">
                  <input
                    type="text"
                    className="f-control text-uppercase form-control-lg fs-6 w-100"
                    id="validationCustom02"
                    placeholder="Last name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>
              <div className="input-group mb-2">
                <input
                  type="date"
                  className="form-control-lg text-uppercase fs-6 w-100 f-control"
                  placeholder="Date of Birth"
                  name="Al-dob"
                  id="Al-dob"
                />
              </div>
              <div class="input-group mb-2">
                <label
                  class="input-group-text f-select"
                  for="inputGroupSelect001"
                >
                  Sex
                </label>
                <select class="form-select" id="inputGroupSelect001">
                  <option selected>Male</option>
                  <option value="1">Female</option>
                </select>
              </div>
              <div class="row">
                <div class="col-md-6 mb-2">
                  <input
                    type="text"
                    class="f-control text-uppercase form-control-lg fs-6 w-100"
                    id="validationCustom05"
                    placeholder="Country"
                    required
                  />
                  <div class="invalid-feedback">Please fill this field.</div>
                </div>
                <div class="col-md-6 mb-2">
                  <select id="inputState" class="f-control form-control-lg fs-6 w-100">
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
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
              </div>
              <div className="input-group mb-2">
                <input
                  type="email"
                  className="form-control-lg fs-6 w-100 f-control"
                  placeholder="Email Address"
                  name="Al-email"
                  id="Al-email"
                />
              </div>
              <div className="input-group mb-2">
                <input
                  type="tel"
                  className="form-control-lg fs-6 w-100 f-control"
                  placeholder="Phone No."
                  name="Al-phone"
                  id="Al-phone"
                  required
                />
              </div>
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control-lg text-uppercase fs-6 w-100 f-control"
                  placeholder="Position held (state if any)"
                  name="Al-position"
                  id="Al-position"
                />
              </div>
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control-lg fs-6 w-100 f-control"
                  placeholder="Year Graduated"
                  name="Al-year"
                  id="Al-year"
                />
              </div>
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control-lg text-capitalize fs-6 w-100 f-control"
                  placeholder="Occupation."
                  name="Al-occupation"
                  id="Al-occupation"
                />
              </div>
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control-lg text-capitalize fs-6 w-100 f-control"
                  placeholder="Contact Address"
                  name="Al-address"
                  id="Al-address"
                />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="input-group mb-3">
                  <button className="btn btn-lg btn-primary w-100 fs-6 Al-btn">
                    <Link to=""></Link>Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
