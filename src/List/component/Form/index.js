import React from 'react';

const CustomerForm = ({ handleSubmit, formValues, setFormValues }) => {
  const handleOnChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <>
      <label for="firstName">First name: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        onChange={(e) => handleOnChange(e)}
      />
      <br />

			<label for="age">Age: </label>
      <input
        type="text"
        id="age"
        name="age"
        value={formValues.age}
        onChange={(e) => handleOnChange(e)}
      />
      <br />

      <label for="address">Address: </label>
      <input
        type="text"
        id="address"
        name="address"
        value={formValues.address}
        onChange={(e) => handleOnChange(e)}
      />
      <br />
      <br />

      <button onClick={() => handleSubmit(formValues)}>Save</button>
    </>
  );
};

export default CustomerForm;
