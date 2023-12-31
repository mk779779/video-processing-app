"use client";
import { Fragment } from "react";
import { signInWithGoogle, signOut } from "../firebase/firebase";
import styles from "./sign-in.module.css";
import { User } from "firebase/auth";

interface SignInprops {
  user: User | null;
}

export default function SignIn({ user }: SignInprops) {
  return (
    <Fragment>
      {user ? (
        <button className="nav-link scrollto" onClick={signOut}>
          Sign Out
        </button>
      ) : (
        <button className="nav-link scrollto" onClick={signInWithGoogle}>
          Sign In
        </button>
      )}
    </Fragment>
  );
}
