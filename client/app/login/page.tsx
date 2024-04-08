"use client";
import Link from "next/link";
import { useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { noCachePage } from "@/lib/actions";

export default function LoginPage() {
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const router = useRouter();

  async function loginFunction(e: any) {
    e.preventDefault();
    try {
      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };

      const { data } = await axios.post("http://localhost:5000/login", user, {
        headers: {
          "content-type": "application/json",
        },
      });

      if (data) {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", data.data.user);
        await noCachePage();
        return;
      } else {
        throw new Error("Error occured on login");
      }
    } catch (err) {
      console.log("Error is ", err);
    }
  }

  return (
    <div>
      <form onSubmit={loginFunction}>
        <input
          type="email"
          name="email"
          ref={emailRef}
          placeholder="Please Enter your email"
        />
        <input
          type="password"
          name="password"
          ref={passwordRef}
          placeholder="Please Enter your password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
