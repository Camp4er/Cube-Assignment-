import React from 'react';
import { Customer } from '../../types/Customer';
import PhotoGrid from '../PhotoGrid/PhotoGrid';
import './CustomerDetails.css';

interface CustomerDetailsProps {
    customer: Customer | null;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
    if (!customer) {
        return <div className='customer-details-message'>Select a customer to view details</div>;
    }

    return (
        <div className='customer-details'>
            <h2 className='customer-details-name'>{customer.name}</h2>
            <p className='customer-details-title'>{customer.title}</p>
            <p className='customer-details-address'>{customer.address}</p>
            <PhotoGrid customerId={customer.id} />
        </div>
    );
};

export default CustomerDetails;
