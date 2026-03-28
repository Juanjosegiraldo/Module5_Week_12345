import React from "react";
import { User } from "../interfaces/User";

// Props for the UserCard component
interface UserCardProps {
  user: User;
}

// Displays basic user info
const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        {/* Show first letter of name as avatar placeholder */}
        {user.fullName.charAt(0)}
      </div>
      <div className="user-info">
        <h4 className="user-name">{user.fullName}</h4>
        <p className="user-email">{user.email}</p>
        <span className={`role-badge ${user.role}`}>{user.role}</span>
        <p className="user-city">
          📍 {user.address.city}, {user.address.country}
        </p>
        <span className={`status ${user.isActive ? "active" : "inactive"}`}>
          {user.isActive ? "Active" : "Inactive"}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
