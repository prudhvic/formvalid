import React from "react";
import { useState } from "react";

const Form = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [formNameValid, setFormValid] = useState(false);
  let [onTouch, setOnTouch] = useState(false);
  let [formEmailValid, setEmailValid] = useState(false);
  let [onTouchEmail, setTouchEmail] = useState(false);
  let [onTouchPassword, setTouchPassword] = useState(false);
  let [passwordValid, setPasswordValid] = useState(false);
  let namehandler = (e) => {
    setName(e.target.value);
    if (!(e.target.value.trim().length > 6)) {
      setOnTouch(true);
    } else {
      setOnTouch(false);
    }
  };
  let emailhandler = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.trim().includes("@")) {
      setTouchEmail(true);
    } else {
      setTouchEmail(false);
    }
  };
  let passwordhandler = (e) => {
    setPassword(e.target.value);
    if (!(e.target.value.trim().length > 6)) {
      setTouchPassword(true);
    } else {
      setTouchPassword(false);
    }
  };
  let submithandler = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      console.log(name);
      setOnTouch(true);
      return;
    } else {
      setOnTouch(false);
    }
    if (!email.includes("@") && email.length === 0) {
      setTouchEmail(true);
      return;
    } else {
      setTouchEmail(false);
    }
    if (password.length === 0) {
      setTouchPassword(true);
      return;
    } else {
      setTouchPassword(false);
    }
  };
  return (
    <div className="form">
      <form autoComplete="off" onSubmit={submithandler}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input id="name" value={name} type="text" onChange={namehandler} />
          {!formNameValid && onTouch && (
            <p className="error">
              Name not must be empty and filled with 6 characters
            </p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">email</label>
          <input
            id="email"
            value={email}
            type="email"
            onChange={emailhandler}
          />
          {!formEmailValid && onTouchEmail && (
            <p className="error">email must be filled</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">password</label>
          <input
            id="password"
            value={password}
            type="text"
            onChange={passwordhandler}
          />
          {!passwordValid && onTouchPassword && (
            <p className="error"> password must be filled with 6 letters</p>
          )}
        </div>

        <button>submit</button>
      </form>
    </div>
  );
};

export default Form;
