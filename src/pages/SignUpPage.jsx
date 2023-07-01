import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, surname, email, password, role };
    console.log("New user created", newUser);
  };
  const handleNameInpt = (e) => setName(e.target.value);
  const handleSurnameInpt = (e) => setSurname(e.target.value);
  const handleEmailInpt = (e) => setEmail(e.target.value);
  const handlePasswordInpt = (e) => setPassword(e.target.value);
  const handleRoleInpt = (e) => {
    e.target.checked ? setRole("teacher") : setRole("user");
  };

  return (
    <div className="signup">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" value={name} onChange={handleNameInpt} />
        <label htmlFor="">Surname:</label>
        <input
          type="text"
          name="surname"
          value={surname}
          onChange={handleSurnameInpt}
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailInpt}
        />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordInpt}
        />
        <label htmlFor="">Role:</label>
        Are you a teacher?
        <input
          type="checkbox"
          name="role"
          value={role}
          onChange={handleRoleInpt}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
