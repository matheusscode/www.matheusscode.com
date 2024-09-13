"use client";

import "@/styles/globals.css";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  router.push("/");
}
