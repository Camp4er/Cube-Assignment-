import React, { useState } from 'react';
import CustomerCard from '../CustomerCard/CustomerCard';
import { Customer } from '../../types/Customer';
import './CustomerList.css';

const CustomerList: React.FC<{ onSelectCustomer: (customer: Customer) => void }> = ({ onSelectCustomer }) => {
    const [customers] = useState<Customer[]>([
        { id: 1, name: 'Customer 01', title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nihil exercitationem laboriosam illum delectus impedit! Rerum, id ab velit, dolorum tempore blanditiis dignissimos, quas ratione a fuga amet voluptatem veritatis?", address: 'Address 01', photos: [] },
        { id: 2, name: 'Customer 02', title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nihil exercitationem laboriosam illum delectus impedit! Rerum, id ab velit, dolorum tempore blanditiis dignissimos, quas ratione a fuga amet voluptatem veritatis?", address: 'Address 02', photos: [] },
        { id: 3, name: 'Customer 03', title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nihil exercitationem laboriosam illum delectus impedit! Rerum, id ab velit, dolorum tempore blanditiis dignissimos, quas ratione a fuga amet voluptatem veritatis?", address: 'Address 03', photos: [] },
        { id: 4, name: 'Customer 04', title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nihil exercitationem laboriosam illum delectus impedit! Rerum, id ab velit, dolorum tempore blanditiis dignissimos, quas ratione a fuga amet voluptatem veritatis?", address: 'Address 04', photos: [] },
        { id: 5, name: 'Customer 05', title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nihil exercitationem laboriosam illum delectus impedit! Rerum, id ab velit, dolorum tempore blanditiis dignissimos, quas ratione a fuga amet voluptatem veritatis?", address: 'Address 05', photos: [] },
        { id: 6, name: 'Customer 06', title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nihil exercitationem laboriosam illum delectus impedit! Rerum, id ab velit, dolorum tempore blanditiis dignissimos, quas ratione a fuga amet voluptatem veritatis?", address: 'Address 06', photos: [] },
        { id: 7, name: 'Customer 07', title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nihil exercitationem laboriosam illum delectus impedit! Rerum, id ab velit, dolorum tempore blanditiis dignissimos, quas ratione a fuga amet voluptatem veritatis?", address: 'Address 07', photos: [] },
        { id: 8, name: 'Customer 08', title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nihil exercitationem laboriosam illum delectus impedit! Rerum, id ab velit, dolorum tempore blanditiis dignissimos, quas ratione a fuga amet voluptatem veritatis?", address: 'Address 08', photos: [] },
    ]);

    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    return (
        <div className="customer-list">
            {customers.map(customer => (
                <CustomerCard 
                    key={customer.id} 
                    name={customer.name} 
                    title={customer.title} 
                    onClick={() => {
                        setSelectedCustomer(customer);
                        onSelectCustomer(customer);
                    }} 
                    isSelected={selectedCustomer?.id === customer.id} 
                />
            ))}
        </div>
    );
};

export default CustomerList;
