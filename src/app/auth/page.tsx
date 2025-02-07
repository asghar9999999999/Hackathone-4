"use client";
import { useState } from "react";

export default function SignUpLogin() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                {/* Toggle between Login and Sign Up */}
                <h1 className="text-2xl font-bold text-center mb-4">
                    {isLogin ? "Login" : "Sign Up"}
                </h1>
                <form>
                    {/* Conditional Inputs */}
                    {!isLogin && (
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    {isLogin ? (
                        <>
                            Don`&apos;t have an account?{" "}
                            <button
                                onClick={() => setIsLogin(false)}
                                className="text-blue-500 hover:underline"
                            >
                                Sign up here
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <button
                                onClick={() => setIsLogin(true)}
                                className="text-blue-500 hover:underline"
                            >
                                Login here
                            </button>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
