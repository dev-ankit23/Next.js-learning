import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl text-black font-bold mb-6">📝 Todo App</h1>
        <div className="flex gap-4 justify-center">
          <Link
            href="/signin"
            className="px-6 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
          >
            Signin
          </Link>
          <Link
            href="/signup"
            className="px-6 py-2 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
