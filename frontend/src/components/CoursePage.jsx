import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getCourseLectures } from "../actions/course";
import Loader from "./Loader";

const CoursePage = ({ user }) => {
  const [lectureNumber, setlectureNumber] = useState(0);
  const { lectures, loading } = useSelector((state) => state.course);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);

  if (
    user.role !== "user" &&
    (user.subscribtion === undefined || user.subscribtion.status !== "active")
  ) {
    return <Navigate to="/subscribe" />;
  }
  return loading ? (
    <Loader />
  ) : (
    <section className="coursePage">
      <div className="container">
        {lectures && lectures.length > 0 ? (
          <>
            <div className="video-section">
              <div className="video">
                <video
                  controls
                  width="100%"
                  controlsList="nodownload noremoteplayback"
                  disablePictureInPicture
                  disableRemotePlayback
                  muted
                  loop
                  src={lectures[lectureNumber].video.url}
                >
                  Sorry, your browser doesn't support videos.
                </video>
                <h1>{`#${lectureNumber + 1} ${
                  lectures[lectureNumber].title
                }`}</h1>
                <h1>Description</h1>
                <h1>{lectures[lectureNumber].description}</h1>
              </div>

              <div className="course-topic">
                {lectures.map((element, index) => (
                  <button
                    onClick={() => setlectureNumber(index)}
                    key={element._id}
                    className="topic-name"
                  >
                    <h1>
                      #{index + 1} {"  "}
                      {element.title}
                    </h1>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <h1 className="sub-heading">No lectures</h1>
        )}
      </div>
    </section>
  );
};

export default CoursePage;
