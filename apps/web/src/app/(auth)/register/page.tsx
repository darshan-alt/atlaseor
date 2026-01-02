'use client';

import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import Link from 'next/link';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        companyName: '',
        hqCountry: 'IN', // Default
    });
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { register } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            await register(formData);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Registration failed. Please check your information.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f172a] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl w-full space-y-8 p-10 bg-[#1e293b] rounded-2xl shadow-2xl border border-slate-700">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Register your company
                    </h2>
                    <p className="mt-2 text-center text-sm text-slate-400">
                        Start managing your global team today
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-slate-300 mb-1">First Name</label>
                            <input
                                name="firstName"
                                type="text"
                                required
                                className="appearance-none block w-full px-4 py-3 border border-slate-600 placeholder-slate-500 text-white bg-[#0f172a] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                                placeholder="John"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-slate-300 mb-1">Last Name</label>
                            <input
                                name="lastName"
                                type="text"
                                required
                                className="appearance-none block w-full px-4 py-3 border border-slate-600 placeholder-slate-500 text-white bg-[#0f172a] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                                placeholder="Doe"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-slate-300 mb-1">Work Email</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="appearance-none block w-full px-4 py-3 border border-slate-600 placeholder-slate-500 text-white bg-[#0f172a] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                                placeholder="john@acme.com"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-slate-300 mb-1">Password</label>
                            <input
                                name="password"
                                type="password"
                                required
                                className="appearance-none block w-full px-4 py-3 border border-slate-600 placeholder-slate-500 text-white bg-[#0f172a] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                                placeholder="••••••••"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-span-2">
                            <div className="border-t border-slate-700 my-4 pt-4">
                                <h3 className="text-lg font-medium text-white mb-4">Company Details</h3>
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-medium text-slate-300 mb-1">Company Name</label>
                            <input
                                name="companyName"
                                type="text"
                                required
                                className="appearance-none block w-full px-4 py-3 border border-slate-600 placeholder-slate-500 text-white bg-[#0f172a] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                                placeholder="Acme Corp"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-span-1">
                            <label className="block text-sm font-medium text-slate-300 mb-1">HQ Country</label>
                            <select
                                name="hqCountry"
                                className="block w-full px-4 py-3 border border-slate-600 text-white bg-[#0f172a] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm appearance-none"
                                onChange={handleChange}
                                value={formData.hqCountry}
                            >
                                <option value="IN">India</option>
                                <option value="US">United States</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex items-start mt-6">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-slate-600 rounded bg-[#0f172a]"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-slate-400">
                                I agree to the{' '}
                                <a href="#" className="underline hover:text-white">Terms of Service</a> and{' '}
                                <a href="#" className="underline hover:text-white">Privacy Policy</a>
                            </label>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all disabled:opacity-50 shadow-lg shadow-blue-500/20"
                        >
                            {isLoading ? 'Creating account...' : 'Complete Registration'}
                        </button>
                    </div>

                    <div className="text-center mt-4 text-sm text-slate-400">
                        Already registered?{' '}
                        <Link href="/login" className="font-medium text-blue-400 hover:text-blue-300">
                            Sign in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
