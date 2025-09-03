'use client';

import { useState } from "react";

import { onAuthStateChanged, signOut, User } from "firebase/auth";

import { signInWithGoogle } from "@/lib/authentication/authentication.firebase";
import { auth } from "@/lib/firebase";
import { Button } from "@mantine/core";

export default function Home() {

  const [user, setUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  })

  const notSignedIn = () => {
    return (
      <div>
        <p>You are not signed in</p>
        <Button variant="filled" onClick={signInWithGoogle}>Sign In</Button>
        <button onClick={signInWithGoogle}>Sign In</button>
      </div>
    )
  }

  const signedIn = () => {
    return (
      <div>
        <p>Signed in as {user?.displayName}</p>
        <Button variant="filled" onClick={() => signOut(auth)}>Sign Out</Button>
        {/* <button onClick={() => }>Sign Out</button> */}
      </div>
    )
  }

  return (
    <div>
      <h1>Welcome to Helm</h1>
      {user && signedIn()}
      {!user && notSignedIn()}
    </div>
  );
}

