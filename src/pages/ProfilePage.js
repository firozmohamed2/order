import React, { useState } from 'react';

function ProfilePage() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  return (
    <div>
      <h1>Your Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button>Edit Profile</button>
    </div>
  );
}

export default ProfilePage;
