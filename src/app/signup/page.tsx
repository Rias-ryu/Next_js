"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import axios from "axios"


export default function SignupPage() {
    const [user , setUser] = React.useState({
        email : "",
        password: "",
        username: "",
    })

    const onsignUp =  async () => {}


    return(
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-md w-full p-6 bg-gray-900 shadow-xl rounded-xl space-y-6">
        <h1 className="text-3xl font-bold text-center text-white">Login</h1>

        <div className="flex flex-col space-y-2">
          <label htmlFor="username" className="text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            id="username"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
            className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="username" className="text-sm font-medium text-gray-300">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            value={user.username}
            onChange={(e) =>
              setUser({ ...user, username: e.target.value })
            }
            className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={onsignUp}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          type="submit"
        >
          Login
        </button>

        <div className="pt-4 space-y-3 text-center">
          <Link
            href="/login"
            className="block w-full px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
          >
            Visit Login Page
          </Link>
          <Link
            href="/"
            className="block w-full px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
          >
            Visit Home
          </Link>
        </div>
      </div>
    </div>

    )
}