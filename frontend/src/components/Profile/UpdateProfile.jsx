import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../actions/profile";
import { loadUser } from "../../actions/user";

const UpdateProfile = ({ user }) => {
  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(name, email));
    dispatch(loadUser());
    navigate("/profile");
  };

  return (
    <section className="update-profile">
      <div className="container">
        <h1 className="main-heading">Update Profile</h1>
        <form onSubmit={submitHandler} className="update-form">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div>
            <button type="submit" className="btn">
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateProfile;
