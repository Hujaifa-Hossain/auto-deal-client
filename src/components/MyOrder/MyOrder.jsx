import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`https://shielded-brushlands-06342.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user?.email]);

  const handleCancel = (_id) => {
    fetch(`https://shielded-brushlands-06342.herokuapp.com/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const remainingOrders = myOrders.filter((order) => order._id !== _id);
          setMyOrders(remainingOrders);
          alert("Want to delete?");
        } else {
          alert("Something is wrong");
        }
      });
  };

  return (
    <div className="text-center">
      <table className="table container bg-dark text-white">
        <thead className="mx-auto">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Car</th>
            <th scope="col">Address</th>
            <th scope="col">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {myOrders?.map((i) => {
            // const { _id, user, email } = order;

            return (
              <tr key={i?._id}>
                <td>{i?.user}</td>

                <td>{i?.email}</td>
                <td>{i?.car}</td>
                <td>{i?.address}</td>
                <td>
                  <button
                    onClick={() => handleCancel(i?._id)}
                    className="btn btn-warning"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
