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
        <div className="max-w-md mx-auto mt-10 p-6 bg-black shadow-lg rounded-xl space-y-4">
  <h1 className="text-3xl font-bold text-center text-gray-800">Sign Up</h1>

  <div className="flex flex-col space-y-2">
    <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
    <input
      type="text"
      placeholder="Username"
      id="username"
      value={user.username}
      onChange={(e) => setUser({ ...user, username: e.target.value })}
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div className="flex flex-col space-y-2">
    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
    <input
      type="text"
      placeholder="Email"
      id="email"
      value={user.email}
      onChange={(e) => setUser({ ...user, email: e.target.value })}
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div className="flex flex-col space-y-2">
    <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
    <input
      type="password"
      placeholder="Password"
      id="password"
      value={user.password}
      onChange={(e) => setUser({ ...user, password: e.target.value })}
      className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <button
  onClick={onsignUp}
  className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
  type="submit">Submit</button>
  <Link href="/login">Visit Login Page</Link>
</div>

    )
}