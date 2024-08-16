import React, { useState } from 'react';
import CustomerDetails from '../CustomerDetails/CustomerDetails';
import CustomerList from '../CustomerList/CustomerList';
import { Customer } from '../../types/Customer';
import './Outer.css';

const Outer: React.FC = () => {

  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    const handleSelectCustomer = (customer: Customer) => {
        setSelectedCustomer(customer);
    };

    return (
      <div className="outer-border">
        <h1>Cube Assignemnt</h1>
        <div className="outer">
          <CustomerList onSelectCustomer={handleSelectCustomer} />
          <CustomerDetails customer={selectedCustomer} />
        </div>
      </div>
  );

}

export default Outer;
