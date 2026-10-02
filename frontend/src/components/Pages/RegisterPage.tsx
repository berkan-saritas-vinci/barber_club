import { useState, type SyntheticEvent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { AppContext } from "../../types";
import "./Register.css"

const RegisterPage = () => {
  const { registerUser }: AppContext = useOutletContext();

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await registerUser({ username, password });
      navigate("/");
    } catch (err) {
      console.error("RegisterPage::error: ", err);
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
  <div className="register-page">
    <div className="register-card">
      <h1 className="register-title">S'inscrire</h1>

      <form className="register-form" onSubmit={handleSubmit}>
        <label className="register-label" htmlFor="username">
          E-Mail
        </label>

        <input
          className="register-input"
          value={username}
          type="text"
          id="username"
          name="username"
          onChange={handleUsernameInputChange}
          required
        />

        <label className="register-label" htmlFor="password">
          Mot de passe
        </label>

        <input
          className="register-input"
          value={password}
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          required
        />

        <button className="register-button" type="submit">
          Créer le compte
        </button>
      </form>
    </div>
  </div>
);
};

export default RegisterPage;
