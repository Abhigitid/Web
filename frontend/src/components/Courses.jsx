import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllCourses } from "../actions/course";
import toast from "react-hot-toast";
import { addToPlaylist } from "../actions/profile";
import { loadUser } from "../actions/user";

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lecture,
}) => {
  return (
    <div className="course-card ">
      <div className="course-card-img">
        <img src={imageSrc} alt="courseImg" width={"100%"} />
      </div>
      <div className="course-card-content">
        <h1 className="sub-heading">{title}</h1>
        <p>{description}</p>
        <p>{`Creator- ${creator}`}</p>
        <p>{`Lecture- ${lecture}`}</p>
        <p>{`Views- ${views}`}</p>

        <Link to={`/course/${id}`}>
          <button className="btn">Watch</button>
        </Link>
        <button
          onClick={() => addToPlaylistHandler(id)}
          className="btn secondary-btn"
        >
          Add To List
        </button>
      </div>
    </div>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const addToPlaylistHandler = async (courseId) => {
    await dispatch(addToPlaylist(courseId));
    dispatch(loadUser());
  };

  const categories = [
    "Web Development",
    "Mobile Development",
    "UI/UX",
    "Data Science",
    "App Development",
    "Machine Learning",
    "Artificial Intelligence",
    "Blockchain",
    "Cyber Security",
    "Game Development",
    "Networking",
  ];

  const { courses, message, error } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [category, keyword, dispatch, error, message]);
  return (
    <section className="courses">
      <div className="container">
        <div className="coursesPage">
          <h1 className="sub-heading">All Courses</h1>
          <div className="search">
            <input
              onChange={(e) => setKeyword(e.target.value)}
              keyword={keyword}
              className="search"
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className="category" value={category}>
            <div className="items">
              {categories.map((item, index) => (
                <button
                  onClick={() => setCategory(item)}
                  key={index}
                  className=" btn category-btn"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="course-wrapper grid grid-four-cols">
            {courses && courses.length > 0 ? (
              courses.map((item) => (
                // <div className="card">
                <Course
                  key={item._id}
                  title={item.title}
                  description={item.description}
                  views={item.views}
                  imageSrc={item.poster.url}
                  id={item._id}
                  creator={item.createdBy}
                  lectureCount={item.numOfVideos}
                  addToPlaylistHandler={addToPlaylistHandler}
                />
                // </div>
              ))
            ) : (
              <h1 className="sub-heading">Course Not Found</h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
