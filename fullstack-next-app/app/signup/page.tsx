"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ App Router import
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/v1/signup", {
        username,
        email
        password,
      });

      console.log("✅ User created:", res.data);

      // ✅ Redirect to signin page
      router.push("/signin");
    } catch (err) {
      console.error("❌ Signup failed:", err);
    }
  };

  return (
    <div className="flex items-center text-black justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">📝 Sign Up</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Enter Username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg shadow hover:bg-green-600 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account?{" "}
          <Link href="/signin" className="text-green-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
