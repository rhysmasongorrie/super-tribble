'use client';
import { onAuthStateChanged, signOut, User } from "firebase/auth";

import { auth } from "@/lib/firebase";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function ResponsiveSizes() {
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      return (
        <div>
            <Button variant="filled" onClick={() => signOut(auth)}>Sign Out</Button>
        </div>
      );
    } else {
      return router.push('/');
    }
  })
}