import { Outlet } from 'react-router-dom';
import Footer from "../Footer";
import Header from "../Header";

import {
  clearAuthenticatedUser,
  getAuthenticatedUser,
  storeAuthenticatedUser,
} from "../../utils/session";

import type { AppContext, 
  MaybeAuthenticatedUser, 
  AuthenticatedUser, 
  User
} from '../../types';

import NavBar from "../NavBar/index";
import { useState } from 'react';

function App() {
  const [authenticatedUser, setAuthenticatedUser] =
    useState<MaybeAuthenticatedUser>(() => getAuthenticatedUser());

    const registerUser = async (newUser: User) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/auths/register", options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const createdUser: AuthenticatedUser = await response.json();

      setAuthenticatedUser(createdUser);
      storeAuthenticatedUser(createdUser);

      console.log("createdUser: ", createdUser);
    } catch (err) {
      console.error("registerUser::error: ", err);
      throw err;
    }
  };

  const loginUser = async (user: User) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/auths/login", options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const authenticatedUser: AuthenticatedUser = await response.json();
      console.log("authenticatedUser: ", authenticatedUser);

      setAuthenticatedUser(authenticatedUser);
      storeAuthenticatedUser(authenticatedUser);
    } catch (err) {
      console.error("loginUser::error: ", err);
      throw err;
    }
  };

    const clearUser = () => {
    clearAuthenticatedUser();
    setAuthenticatedUser(undefined);
  }


    const fullAppContext: AppContext = {
    registerUser,
    loginUser,
  };

  return (
    <>
    <Header />
    <main>
      <NavBar authenticatedUser={authenticatedUser} clearUser={clearUser} />
      <Outlet context={fullAppContext} />
    </main>
    <Footer />
    </>
  )
}

export default App
