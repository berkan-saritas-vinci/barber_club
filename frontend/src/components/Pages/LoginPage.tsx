import type { SyntheticEvent } from "react";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { AppContext } from "../../types";
import "./LoginPage.css"

const LoginPage = () => {
  const { loginUser }: AppContext = useOutletContext();

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await loginUser({ username, password });
      navigate("/");
    } catch (err) {
      console.error("LoginPage::error: ", err);
    }
  };

  const handleUsernameInputChange = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setUsername(input.value);
  };

  const handlePasswordChange = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setPassword(input.value);
  };

  return (
  <div className="login-page">
    <div className="login-card">
      <h1 className="login-title">Connectez-vous</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label" htmlFor="username">
          E-Mail
        </label>

        <input
          className="login-input"
          value={username}
          type="text"
          id="username"
          name="username"
          onChange={handleUsernameInputChange}
          required
        />

        <label className="login-label" htmlFor="password">
          Mot de passe
        </label>

        <input
          className="login-input"
          value={password}
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          required
        />

        <button className="login-button" type="submit">
          S'authentifier
        </button>
      </form>
    </div>
  </div>
);
};

export default LoginPage;
