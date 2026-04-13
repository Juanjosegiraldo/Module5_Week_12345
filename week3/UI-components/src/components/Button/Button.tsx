import React from 'react';
import './Button.css';

interface ButtonProps {
    text: string; // Required prop
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    loading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    text,
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
    onClick
}) => {
    return (
        <button 
            className={`btn btn-${variant} btn-${size}`} 
            onClick={onClick}
            disabled={disabled || loading}
        >
            {leftIcon && <span className="icon-left">{leftIcon}</span>}
            {loading ? "Loading..." : text}
            {rightIcon && <span className="icon-right">{rightIcon}</span>}
        </button>
    );
};

export default Button;