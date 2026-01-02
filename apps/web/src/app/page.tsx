'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

export default function Index() {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            router.push('/dashboard');
        }
    }, [isAuthenticated, isLoading, router]);

    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

            <div className="relative text-center z-10 px-4">
                <div className="mb-8 flex justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center font-bold text-3xl text-white shadow-2xl shadow-blue-500/40">A</div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Atlas<span className="text-blue-500">EOR</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Compliant global hiring, payroll, and team management for <span className="text-slate-200">India</span> and the <span className="text-slate-200">USA</span>.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/register"
                        className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 transition-all transform hover:-translate-y-1"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="/login"
                        className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl border border-slate-700 transition-all transform hover:-translate-y-1"
                    >
                        Sign In
                    </Link>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Global Payroll', desc: 'Automated tax & benefit calculations for IN/US.' },
                        { title: 'Full Compliance', desc: 'Localized contracts and document management.' },
                        { title: 'Self-Service', desc: 'Employee onboarding & manager hierarchies.' }
                    ].map((feature, i) => (
                        <div key={i} className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 backdrop-blur-sm">
                            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-slate-500 line-clamp-2">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
