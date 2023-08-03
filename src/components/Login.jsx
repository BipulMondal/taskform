import React, { useState } from "react";
import HttpClient from "../utils/utils/HttpClient";

const Login = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const [mailError, setMailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  const handleClick = (e) => {
    e.preventDefault();
    console.log(emailRegex.test(mail));
    if(!emailRegex.test(mail)){
        setMailError('Email is not valid')
        return
    }

    if (mail.trim().length !== 0 && password.trim().length !== 0) {
      console.log(mail);
      console.log(password);
    //   setMail("");
    //   setPassword("");
    }
    else{
        setMailError('Email is require')
        setPasswordError('Password is required')
    }

    // if (mail.trim().length === 0) {
    //   setMailError("Email is required");
    // }
    // if (password.trim().length === 0) {
    //   setPasswordError("password is required");
    // }
    
    // const sendData = {
    //   email: "sanu@gmail.com",
    //   password: "123456",
    // };
    // console.log("sendData",sendData) 
    // const res = await HttpClient.requestData("login", "POST", sendData);
    // console.log("resLogin", res);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-[20rem] w-[24rem] p-4 bg-gray-200">
        <label htmlFor="">Email</label>
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email Here"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
          className="p-2.5 w-full"
        />
        {/* <p className="text-red-600">{mailError}</p> */}
   {mailError   &&    <p className="text-red-600">{mailError}</p>} 

        <br />
        <label htmlFor="" className="mt-6">Password</label>
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email Here"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="mt-4 p-2.5 w-full"
        />
        {/* <p className="text-red-600 ">{passwordError}</p> */}
        {passwordError  && <p className="text-red-600">{passwordError}</p> }

        <br />

        <button
          type="submit"
          onClick={handleClick}
          className="h-12 w-28 rounded-full bg-blue-800 text-white mt-6"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
