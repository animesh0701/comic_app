import React from "react";
import { useState } from "react";

const UpdateZip = () => {
  const [customer, setCustomer] = useState({
    name: "Asuka",
    age: 25,
    address: {
      city: "kyoto",
      zipcode: 4500,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipcode: 4600 },
    });
  };

  return (
    <div>
      {customer.address.zipcode}
      <button onClick={handleClick}>Update Zipcode</button>
    </div>
  );
};

export default UpdateZip;
