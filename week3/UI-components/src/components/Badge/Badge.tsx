import React from 'react';
import './Badge.css';

interface BadgeProps {
    label: string; // Required
    status?: "success" | "warning" | "info" | "error" | "neutral";
    icon?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ label, status = "neutral", icon }) => {
    return (
        <div className={`badge badge-${status}`}>
            {icon && <span className="badge-icon">{icon}</span>}
            {label}
        </div>
    );
};

export default Badge;