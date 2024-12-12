import React, { useState } from "react";
import { loginUser } from "./API";

type LoginResponse = {
  message?: string;
  token?: string;
};

function Login(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response: LoginResponse = await loginUser({ email, password });

      if (response?.message) {
        setMessage(response.message);
      }

      if (response.token) {
        // Perform actions like saving the token in local storage
        localStorage.setItem("authToken", response.token);
        setMessage("Login successful!");
      } else {
        setMessage("Login failed. Invalid credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;