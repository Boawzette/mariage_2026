"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }) {
  const [allowed, setAllowed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function verify() {
      try {
        const res = await fetch("/api/auth/check-password");
        if (res.ok) {
          setAllowed(true);
        } else {
          router.push("/login");
        }
      } catch {
        router.push("/login");
      }
    }

    verify();
  }, [router]);

  if (!allowed) return null;

  return <>{children}</>;
}
