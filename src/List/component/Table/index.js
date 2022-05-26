import React from "react";

const Table = ({ customers,
  handleDelete,
  setFormValues,
  setIsEdit,
  setCustomerIndex }) => {
  const handleEditClick = (customer) => {
    setFormValues(customer);
    setIsEdit(true);
    setCustomerIndex(
      customers.findIndex((customerArray) => customer.id === customerArray.id)
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Number</th>
          <th>Action</th>
        </tr>
      </thead>

      {customers.map(customer => (
        <tr>
          <td>{customer.name}</td>
          <td>{customer.age}</td>
          <td>{customer.address}</td>
          <td>
            <button onClick={() => handleEditClick(customer)}>Edit</button>
            <button onClick={() => handleDelete(customer)}>Delete</button>
          </td>
        </tr>
      ))}
    </table>
  )
}

export default Table