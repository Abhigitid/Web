import React, { useState } from "react";
import SignUp from "../../assets/Images/signup.png";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { register } from "../../actions/user";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    myForm.append("file", image);

    dispatch(register(myForm));
  };

  return (
    <section className="register">
      <div className="container">
        <div className="register-page grid grid-two-cols">
          <div className="register-image">
            <figure>
              <img src={SignUp} alt="signup" width={"100%"} />
            </figure>
          </div>
          <div className="register-form">
            <h1 className="sub-heading">Register</h1>
            <div className="avatar">
              <Avatar
                facebookId="100008343750912"
                src={imagePrev}
                alt="imageprev"
                width={"20%"}
              />
            </div>
            <form onSubmit={submitHandler} className="form">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  minLength={8}
                  maxLength={16}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                />
              </div>
              <div>
                <label htmlFor="chooseAvatar">Choose Avatar</label>
                <input
                  type="file"
                  id="chooseAvatar"
                  required
                  accept="image/*"
                  className="fileUploadCss"
                  onChange={changeImageHandler}
                />
              </div>
              <button className="btn button" type="submit">
                Register
              </button>
              <p className="register-text">
                Already have an account? <a href="/login">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
