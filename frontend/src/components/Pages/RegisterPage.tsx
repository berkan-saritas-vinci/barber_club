import { useState, type SyntheticEvent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { AppContext } from "../../types";

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
    <div>
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">E-Mail:</label>
        <input
          value={username}
          type="text"
          id="username"
          name="username"
          onChange={handleUsernameInputChange}
          required
        />
        <label htmlFor="password">Mot de passe:</label>
        <input
          value={password}
          type="text"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Créer le compte</button>
      </form>
    </div>
  );
};

export default RegisterPage;
