import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { courseRequest } from "../actions/other";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const Request = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [course, setCourse] = React.useState("");

  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.other);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(courseRequest(name, email, course));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);
  return (
    <section className="request">
      <div className="container">
        <h1 className="main-heading">Request For a Course</h1>
        <form onSubmit={submitHandler}>
          <div>
            <input
              type="name"
              id="name"
              required
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              required
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              id="course"
              required
              value={course}
              placeholder="Course"
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div>
            <button className="btn">Send</button>
          </div>
          <div>
            <p>
              See Available Courses ?{" "}
              <span>
                <Link to="/courses">Click</Link>
              </span>{" "}
              here
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Request;
