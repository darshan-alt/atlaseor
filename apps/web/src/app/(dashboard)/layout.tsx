'use client';

import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { HasRole } from '../../components/HasRole';
import { Role } from '../../types/auth';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isLoading, isAuthenticated, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isLoading, isAuthenticated, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
                <div className="flex flex-col items-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    <p className="text-slate-400 animate-pulse">Loading your dashboard...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) return null;

    return (
        <div className="min-h-screen bg-[#0f172a] text-slate-200 flex flex-col">
            {/* Sidebar / Header */}
            <header className="bg-[#1e293b] border-b border-slate-700 px-6 py-4 flex items-center justify-between shadow-lg">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">A</div>
                    <h1 className="text-xl font-bold text-white tracking-tight">AtlasEOR</h1>
                </div>

                <div className="flex items-center space-x-6">
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-medium text-white">{user?.firstName} {user?.lastName}</p>
                        <p className="text-xs text-slate-400 capitalize">{user?.role.toLowerCase().replace('_', ' ')}</p>
                    </div>
                    <button
                        onClick={logout}
                        className="px-4 py-2 text-sm font-medium bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors border border-slate-600"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="flex flex-1">
                {/* Navigation */}
                <nav className="w-64 bg-[#1e293b]/50 border-r border-slate-700 p-4 hidden lg:block">
                    <ul className="space-y-2">
                        <li>
                            <a href="/dashboard" className="flex items-center space-x-3 px-4 py-3 bg-blue-600/10 text-blue-400 rounded-xl font-medium border border-blue-600/20">
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <HasRole roles={[Role.SUPER_ADMIN, Role.AUDITOR]}>
                            <li>
                                <a href="/audit-logs" className="flex items-center space-x-3 px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl transition-all">
                                    <span>Audit Logs</span>
                                </a>
                            </li>
                        </HasRole>
                        <HasRole roles={[Role.COMPANY_OWNER, Role.HR_ADMIN, Role.SUPER_ADMIN]}>
                            <li>
                                <a href="/offers" className="flex items-center space-x-3 px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl transition-all">
                                    <span>Offers</span>
                                </a>
                            </li>
                        </HasRole>
                        <HasRole roles={[Role.COMPANY_OWNER, Role.HR_ADMIN, Role.SUPER_ADMIN]}>
                            <li>
                                <a href="/offers" className="flex items-center space-x-3 px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl transition-all">
                                    <span>Offers</span>
                                </a>
                            </li>
                            <li>
                                <a href="/contracts" className="flex items-center space-x-3 px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl transition-all">
                                    <span>Contracts</span>
                                </a>
                            </li>
                        </HasRole>
                        <li>
                            <a href="/employees" className="flex items-center space-x-3 px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl transition-all">
                                <span>Workforce</span>
                            </a>
                        </li>
                        <li>
                            <a href="/team" className="flex items-center space-x-3 px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl transition-all">
                                <span>Team Accounts</span>
                            </a>
                        </li>
                        <li>
                            <a href="/payroll" className="flex items-center space-x-3 px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl transition-all">
                                <span>Payroll</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center space-x-3 px-4 py-3 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl transition-all">
                                <span>Compliance</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Main Content */}
                <main className="flex-1 p-8 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
