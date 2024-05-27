import React, { useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";

const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteButtonHandler,
  addLectureHandler,
  courseTitle,
  lectures = [],
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setVideo("");
    setVideoPrev("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay css={{ background: "red" }} />
      <ModalContent p={"15rem"} ml={"15rem"}>
        <h3>{courseTitle}</h3>
        <ModalCloseButton />
        <ModalBody>
          <div className="modal-body grid-two-cols">
            <div>
              <div>
                <h1 className="sub-heading">{courseTitle}</h1>
                <h3>{`#${id}`}</h3>
              </div>
              <h1 style={{ marginTop: "2rem" }} className=" sub-heading ">
                Lectures
              </h1>
              {lectures.map((item, i) => (
                <VideoCard
                  key={i}
                  title={item.title}
                  description={item.description}
                  num={i + 1}
                  lectureId={item._id}
                  courseId={id}
                  deleteButtonHandler={deleteButtonHandler}
                />
              ))}
            </div>
            <div className="add-lec-form">
              <form
                className="form"
                onSubmit={(e) =>
                  addLectureHandler(e, id, title, description, video)
                }
              >
                <div className="add-lecture">
                  <h1>Add Lecture</h1>
                  <div>
                    <input
                      placeholder={"Title"}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      placeholder={"Description"}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="btn">
                    <input
                      accept="video/mp4"
                      required
                      type="file"
                      className="fileUploadCss"
                      onChange={changeVideoHandler}
                    />
                  </div>
                  <div>
                    {videoPrev && (
                      <video
                        controlsList="nodownload"
                        src={videoPrev}
                        controls
                      ></video>
                    )}
                  </div>
                  <button className="btn" type="submit">
                    Add Lecture
                  </button>
                </div>
              </form>
            </div>
          </div>
        </ModalBody>
        <ModalFooter sx={{ position: "absolute", bottom: "0", right: "0" }}>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModal;

const VideoCard = ({
  title,
  description,
  num,
  courseId,
  lectureId,
  deleteButtonHandler,
}) => {
  return (
    <div className="videoCard">
      <div className="videoCardHead">
        <h2>{`#${num} ${title}`}</h2>
        <h4>{description}</h4>
      </div>
      <button
        className="btn deleteBtn"
        onClick={() => deleteButtonHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </button>
    </div>
  );
};
