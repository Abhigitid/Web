import React, { useEffect } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getAllUsers,
  updateUserRole,
} from "../../../actions/admin";
import toast from "react-hot-toast";

const TABLE_HEADS = ["Id", "Name", "Email", "Role", "Subscription", "Action"];

const Users = () => {
  const { users, error, message } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const updateHandler = (userId) => {
    dispatch(updateUserRole(userId));
  };

  const deleteButtonHandler = (userId) => {
    dispatch(deleteUser(userId));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    dispatch(getAllUsers());
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
            {users &&
              users.map((item) => (
                <UserList
                  key={item._id}
                  item={item}
                  updateHandler={updateHandler}
                  deleteButtonHandler={deleteButtonHandler}
                />
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;

const UserList = ({ item, updateHandler, deleteButtonHandler }) => {
  return (
    <tr>
      <td>#{item._id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.role}</td>
      <td>
        {item.subscription && item.subscription.status === "active"
          ? "active"
          : "inactive"}
      </td>
      <td>
        <button className="btn" onClick={() => updateHandler(item._id)}>
          Change Role
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
