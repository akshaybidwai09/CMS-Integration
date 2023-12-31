import React, { useState, useEffect } from "react";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  email: string;
};

const Profile: React.FC = () => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userProfile");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    } else {
      setError("No user information found. Please login again.");
    }
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  // Format the date of birth if necessary
  const formattedDob = new Date(userInfo.dob).toLocaleDateString();

  return (
    <div className="profile">
      <h1>Profile Information</h1>
      <p>ID: {userInfo.id}</p>
      <p>First Name: {userInfo.firstName}</p>
      <p>Last Name: {userInfo.lastName}</p>
      <p>Date of Birth: {formattedDob}</p>
      <p>Email: {userInfo.email}</p>
    </div>
  );
};

export default Profile;
