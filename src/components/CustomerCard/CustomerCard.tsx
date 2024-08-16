import React from 'react';
import './CustomerCard.css';

interface CustomerCardProps {
    name: string;
    title: string;
    onClick: () => void;
    isSelected: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ name, title, onClick, isSelected }) => {
    return (
        <div className={`customer-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            <h3 className="customer-name">{name}</h3>
            <p className="customer-title">{title}</p>
        </div>
    );
};

export default CustomerCard;


