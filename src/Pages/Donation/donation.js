import { useState } from "react";
import "./donation.css";
import { PaystackButton } from 'react-paystack';

const Donation = () => {

  const publicKey = "pk_test_81de634c096cf9617586a6f43c07c0f37d2f711a"
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [amount, setAmount] = useState("")

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      name,
      phone,
    },
    currency: "NGN",
    publicKey,
    text: "Make Payment",
    onSuccess: () =>
      alert("Thanks for your Donation!"),
    onClose: () => alert("Wait! Don't leave :("),
  }


  return (
    <div className="container-fluid donate-contain d-flex justify-content-center align-items-center min-vh-100 ">
      <div className="row border rounded-5 shadow donation-box-area">
        <div className="col-md-6 donation-left-box d-flex justify-content-center align-items-center flex-column">
          <p className="text-primary donation-sbtxt1">
            Your Gift Makes a Difference At NUESA Jostum!
          </p>
          <p className="text-primary text-wrap donation-sbtxt2">
            Your gift supports NUESA as we prepare students to become engineering
            innovators who recognize needs, design solutions, and engage in
            creative enterprises for the good of the world.
          </p>
        </div>

        <div className="col-md-6 donation-right-box">
          <div className="row align-items-center">
            <div className="donation-header-text mb-4">
              <p className="donation-header">ACCOUNT DETAILS </p>
              <h3>BANK NAME:<span> UNITED BANK FOR AFRICA (UBA)</span></h3>
              <h3>ACCOUNT NAME:<span> NUESA JOSTUM CHAPTER</span></h3>
              <h3>ACCOUNT NUMBER: <span>2325919281</span></h3>
              <p className="p-c">OR</p>
              <p className="p-s">Pay with Paystack</p>
            </div>
            <form>
            <div className="input-group mb-1">
              <input
                type="name"
                className="form-control-lg text-capitalize fs-6 w-100 donation-a"
                placeholder="Name"
                id="name"
                onChange={(e) => setName(e.target.value)}

                
              />
            </div>

            <div className="input-group mb-1">
              <input
                type="email"
                className="form-control-lg text-capitalize fs-6 w-100 donation-a"
                placeholder="Email"
                id="Email"
                onChange={(e) => setEmail(e.target.value)}

                
              />
            </div>

            <div className="input-group mb-1">
              <input
                type="amount"
                className="form-control-lg fs-6 w-100 donation-a"
                placeholder="Phone"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                
              />
            </div>

            <div className="input-group mb-1">
              <input
                type="amount"
                className="form-control-lg fs-6 w-100 donation-a"
                placeholder="Amount"
                id="amount"
                onChange={(e) => setAmount(e.target.value)}
                
              />
            </div>
            </form>
            <PaystackButton {...componentProps} className="donation-btn "/>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
