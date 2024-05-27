import React, { useEffect, useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDisclosure } from "react-use-disclosure";
import cposter from "../../assets/Images/ReactCourse.jpeg";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromPlaylist,
  updateProfilePicture,
} from "../../actions/profile";
import { cancelSubscription, loadUser } from "../../actions/user";
import toast from "react-hot-toast";

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.profile);
  const { message: subscriptionMessage, error: subscriptionError } =
    useSelector((state) => state.subscription);
  const removeFromPlayListHandler = async (id) => {
    dispatch(removeFromPlaylist(id));
    dispatch(loadUser());
  };
  const changeImageSubmitHandler = async (e, image) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("file", image);
    await dispatch(updateProfilePicture(myForm));
    dispatch(loadUser());
  };
  const cancelSubscriptionHandler = async () => {
    await dispatch(cancelSubscription());
    dispatch(loadUser());
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
    if (subscriptionMessage) {
      toast.success(subscriptionMessage);
      dispatch({ type: "clearMessage" });
      dispatch(loadUser());
    }

    if (subscriptionError) {
      toast.error(subscriptionError);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, error, message, subscriptionError, subscriptionMessage]);

  const { isOpen, close, open } = useDisclosure();
  return (
    <section className="profile">
      <div className="container">
        <h1 className="main-heading">Profile</h1>
        <div className="profile-content grid grid-two-cols">
          <div className="profile-image">
            <img src={user.avatar.url} alt="profile" />
            <button className="btn" onClick={open}>
              Change Photo
            </button>
          </div>
          <div className="profile-details">
            <table className="table-data">
              <tr className="data">
                <th>Name</th>
                <th>{user.name}</th>
              </tr>
              <tr>
                <th>Email</th>
                <th>{user.email}</th>
              </tr>
              <tr>
                <th>Created At</th>
                <th>{user.createdAt.split("T")[0]}</th>
              </tr>
              {user.role !== "admin" && (
                <tr>
                  <th>Subscription</th>
                  <th>
                    {user.subscription &&
                    user.subscription.status === "active" ? (
                      <button
                        className="btn"
                        onClick={cancelSubscriptionHandler}
                      >
                        Cancel Subscription
                      </button>
                    ) : (
                      <Link to="/subscribe">
                        <button className="btn">Subscribe</button>
                      </Link>
                    )}
                  </th>
                </tr>
              )}
              <tr>
                <th className="table-btn">
                  <Link to="/updateProfile">Update Profile</Link>
                </th>
                <th className="table-btn">
                  <Link to="/changePassword">
                    <button className="btn">Change Password</button>
                  </Link>
                </th>
              </tr>
            </table>
          </div>
        </div>

        <div className="profile-playlist">
          <h1 className="sub-heading">Playlist</h1>
          {user.playlist.length > 0 && (
            <div>
              {user.playlist.map((element) => (
                <div className="playlist" key={element.course}>
                  <img src={cposter} alt="cposter" width={"100%"} />
                  <div>
                    <Link to={`/course/${element.course}`}>
                      <button className="btn">Watch Now</button>
                    </Link>
                    <button
                      className="btn secondary-btn"
                      onClick={() => removeFromPlayListHandler(element.course)}
                    >
                      <RiDeleteBin7Fill />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <ChangePhotoBox
          changeImageSubmitHandler={changeImageSubmitHandler}
          isOpen={isOpen}
          onClose={close}
        />
      </div>
    </section>
  );
};

export default Profile;

const ChangePhotoBox = ({ isOpen, onClose, changeImageSubmitHandler }) => {
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const changeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    onClose();
    setImagePrev("");
    setImage("");
  };
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={"blur(10px)"} />
      <ModalContent p={"20rem"}>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div>
            <form onSubmit={(e) => changeImageSubmitHandler(e, image)}>
              <div>
                {imagePrev && <img src={imagePrev} alt="profile" />}
                <input
                  onChange={changeImage}
                  type="file"
                  className="fileUploadCss"
                />
                <button type="submit" className="btn">
                  Change
                </button>
              </div>
            </form>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn" onClick={closeHandler} mr="3">
            Cancel
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
