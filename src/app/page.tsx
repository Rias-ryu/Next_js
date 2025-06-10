import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="space-y-4 text-center">
        <Link
          href="/login"
          className="block w-60 mx-auto px-4 py-2 rounded-2xl bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition"
        >
          Visit Login Page
        </Link>
        <Link
          href="/signup"
          className="block w-60 mx-auto px-4 py-2 rounded-2xl bg-green-600 text-white text-lg font-semibold hover:bg-green-700 transition"
        >
          Visit Signup Page
        </Link>
      </div>
    </div>
  );
}
