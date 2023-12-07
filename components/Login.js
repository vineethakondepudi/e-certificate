"use client";

import React from 'react';
import { MdEmail } from 'react-icons/md';
import { MdOutlineWifiPassword } from 'react-icons/md';
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <form className="flex flex-col gap-3 border bg-slate-700 rounded-xl border-gray-800 p-8 max-w-md mx-auto">
        <h1
          className="text-white text-3xl text-center mb-6 font-sans"
        >
          Sign in
        </h1>
        <div className="relative">
          <MdEmail
            className="absolute top-1/2 transform -translate-y-1/2 left-3"
            size={20}
          />
          <input
            className="pl-10 border border-slate-500 px-16 py-2"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="relative">
          <MdOutlineWifiPassword
            className="absolute top-1/2 transform -translate-y-1/2 left-3"
            size={20}
          />
          <input
            className="pl-10 border border-slate-500 px-16 py-2"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center"> {/* Centering the login button */}
          <Link href="/navbar">
            <button
              className="bg-blue-500 font-bold text-white py-3 px-6 transition-transform transform hover:scale-105"
              style={{
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
