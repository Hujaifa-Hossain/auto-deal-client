import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`https://auto-deal-server.onrender.com/api/orders`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  const handleCancel = (_id) => {
    fetch(`https://auto-deal-server.onrender.com/api/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const proceed = window.confirm(
          "Stop! are you sure you want to delete?"
        );
        if (proceed) {
          if (data.deletedCount === 1) {
            const remainingOrders = myOrders.filter(
              (order) => order._id !== _id
            );
            setMyOrders(remainingOrders);
          }
        }
      });
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  console.log(status);
  useEffect(() => {
    fetch("https://auto-deal-server.onrender.com/api/orders")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  const handleUpdate = (id) => {
    fetch(
      `https://auto-deal-server.onrender.com/api/updateStatus/${id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
      }
    )
      .then((res) => res.json())
      .then((result) => setStatus(result));

    console.log(id);
  };

  return (
    <div>
      <table className="table container table-dark table-stripe text-center">
        <thead className="mx-auto">
          <tr>
            <th scope="col">Car</th>
            <th scope="col">Name</th>

            <th scope="col">Address</th>
            <th scope="col">Status</th>
            <th scope="col">Update</th>
            <th scope="col">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {myOrders?.map((i) => {
            return (
              <tr key={i?._id}>
                <td>{i?.car}</td>
                <td>{i?.user}</td>
                <td>{i?.address}</td>

                <td>
                  <div className="input-group">
                    <select
                      onChange={handleStatus}
                      className="form-select"
                      id="inputGroupSelect04"
                      aria-label="Example select with button addon"
                    >
                      <option selected value={i?.status}>
                        {i.status}
                      </option>
                      <option value="Approved">Approved</option>
                      <option value="Shipped">Shipped</option>
                    </select>
                  </div>
                </td>
                <td>
                  <button
                    onClick={() => handleUpdate(i?._id)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                </td>
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

export default ManageAllOrders;
