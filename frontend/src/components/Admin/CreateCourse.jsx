import React, { useEffect, useState } from "react";
import CourseModal from "./CourseModal";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../actions/admin";
import toast from "react-hot-toast";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.admin);

  const categories = [
    "Web Development",
    "Mobile Development",
    "UI/UX",
    "Data Science",
    "App Development",
    "Machine Learning",
    "Artificial Intelligence",
  ];

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
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("createdBy", createdBy);
    myForm.append("category", category);
    myForm.append("file", image);

    dispatch(createCourse(myForm));
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
    <section className="createCourse">
      <div className="container">
        <h1 className="main-heading">Create Course</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={title}
            id="courseName"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            value={description}
            id="courseDescription"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Course Description"
          />
          <input
            type="text"
            value={createdBy}
            id="courseCreator"
            onChange={(e) => setCreatedBy(e.target.value)}
            placeholder="Creator Name"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
          >
            <option value="">Category</option>
            {categories.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            accept="image/*"
            required
            type="file"
            className="fileUploadCss"
            onChange={changeImageHandler}
          />
          {imagePrev && (
            <img
              src={imagePrev}
              boxSize={"100"}
              objectFit={"conatin"}
              alt="previmg"
            />
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <CourseModal />
      </div>
    </section>
  );
};

export default CreateCourse;
