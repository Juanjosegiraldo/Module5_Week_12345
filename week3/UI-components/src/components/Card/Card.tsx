import React from 'react';
import Badge from '../Badge/Badge';
import './Card.css';

interface CardProps {
    title: string;
    type: "green" | "white" | "black";
    imageUrl?: string;
    footer?: React.ReactNode;
    // The card must include at least one Badge
    badgeStatus: "success" | "warning" | "info" | "error" | "neutral";
    badgeLabel: string;
}

const Card: React.FC<CardProps> = ({ title, type, imageUrl, footer, badgeStatus, badgeLabel }) => {
    return (
        <div className={`card card-${type}`}>
            {imageUrl && <img src={imageUrl} alt={title} className="card-img" />}
            <div className="card-body">
                <Badge label={badgeLabel} status={badgeStatus} />
                <h3 className="card-title">{title}</h3>
                {footer && <div className="card-footer">{footer}</div>}
            </div>
        </div>
    );
};

export default Card;