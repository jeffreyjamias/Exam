import React, { useState } from 'react';
import Table from './component/Table';
import Form from './component/Form';
import Search from './component/Search';

const List = () => {
  const getCustomerList = () => {
    const data = sessionStorage.getItem('customers');
    if (data) return JSON.parse(data);
    return [];
  };
  const [customers] = useState(getCustomerList);
  const [formValues, setFormValues] = useState({
    name: '',
    age: '',
    address: '',
  });
  const [isEdit, setIsEdit] = useState(false);
  const [customerIndex, setCustomerIndex] = useState(0);
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (formValues) => {
    const newArray = [...customers];

    if (isEdit) {
      newArray.splice(customerIndex, 1, formValues);

      sessionStorage.setItem('customers', JSON.stringify(newArray));
      window.location.reload(false);
      return;
    }

    formValues.id = Math.random().toString(36).slice(2, 6);

    newArray.push(formValues);
    sessionStorage.setItem('customers', JSON.stringify(newArray));
    window.location.reload(false);
  };

  const handleDelete = (value) => {
    const customersCopy = [...customers];
    const result = customersCopy.filter(
      (customerCopy) => customerCopy.id !== value.id
    );

    sessionStorage.setItem('customers', JSON.stringify(result));
    window.location.reload(false);
  };

  const handleSearch = () => {
    const filteredCustomer = customers.filter(
      (customer) => customer.name === searchValue
    );

    if (filteredCustomer.length > 0)
      return console.log(
        customers.filter((customer) => customer.name === searchValue)
      );

    return console.log('No records found.');
  };

  return (
    <>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
      />
      <Form
        handleSubmit={handleSubmit}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <Table
        customers={customers}
        handleDelete={handleDelete}
        setFormValues={setFormValues}
        setIsEdit={setIsEdit}
        setCustomerIndex={setCustomerIndex}
      />
    </>
  );
};

export default List;
