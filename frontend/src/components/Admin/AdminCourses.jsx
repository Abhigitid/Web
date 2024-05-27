import React, { useEffect, useState } from "react";

import { useDisclosure } from "react-use-disclosure";
import { RiDeleteBin7Fill } from "react-icons/ri";
import CourseModal from "./CourseModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses, getCourseLectures } from "../../actions/course";
import toast from "react-hot-toast";
import { addLecture, deleteCourse, deleteLecture } from "../../actions/admin";

const AdminCourses = () => {
  const TABLE_HEADS = [
    "Id",
    "Title",
    "Category",
    "Creator",
    "Poster",
    "Views",
    "No. of Videos",
    "Action",
  ];

  const { courses, lectures } = useSelector((state) => state.course);
  const { error, message } = useSelector((state) => state.admin);

  const dispatch = useDispatch();
  const { isOpen, close, open } = useDisclosure();

  const [courseId, setCourseId] = useState("");
  const [courseTitle, setCourseTitle] = useState("");

  const courseDetailsHandler = (courseId, title) => {
    dispatch(getCourseLectures(courseId));
    open();
    setCourseId(courseId);
    setCourseTitle(title);
  };

  const deleteButtonHandler = (courseId) => {
    dispatch(deleteCourse(courseId));
  };
  const deleteLectureButtonHandler = async (courseId, lectureId) => {
    await dispatch(deleteLecture(courseId, lectureId));
    dispatch(getCourseLectures(courseId));
  };
  const addLectureHandler = async (e, courseId, title, description, video) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);

    await dispatch(addLecture(courseId, myForm));
    dispatch(getCourseLectures(courseId));
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
    dispatch(getAllCourses());
  }, [dispatch, error, message]);

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Users</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {courses &&
              courses.map((item) => (
                <CourseList
                  key={item._id}
                  item={item}
                  courseDetailsHandler={courseDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                />
              ))}
          </tbody>
        </table>
        <CourseModal
          isOpen={isOpen}
          onClose={close}
          courseTitle={courseTitle}
          id={courseId}
          deleteButtonHandler={deleteLectureButtonHandler}
          addLectureHandler={addLectureHandler}
          lectures={lectures}
        />
      </div>
    </section>
  );
};

const CourseList = ({ item, courseDetailsHandler, deleteButtonHandler }) => {
  return (
    <tr>
      <td>{item._id}</td>
      <td>
        <img src={item.poster.url} alt="" width={"50%"} />
      </td>
      <td>{item.title}</td>
      <td>{item.category}</td>
      <td>{item.creator}</td>
      <td>{item.views}</td>
      <td>{item.numOfVideos}</td>
      <td>
        <button
          className="btn"
          onClick={() => courseDetailsHandler(item._id, item.title)}
        >
          View Lectures
        </button>

        <button
          className="btn secondary-btn"
          onClick={() => deleteButtonHandler(item._id)}
        >
          <RiDeleteBin7Fill />
        </button>
      </td>
    </tr>
  );
};
export default AdminCourses;
