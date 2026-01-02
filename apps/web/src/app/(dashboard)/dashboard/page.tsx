'use client';

import React from 'react';
import { useAuth } from '../../../context/AuthContext';

export default function DashboardPage() {
    const { user } = useAuth();

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div>
                <h2 className="text-3xl font-bold text-white tracking-tight">Welcome, {user?.firstName}!</h2>
                <p className="text-slate-400 mt-1">Here is what's happening with your international team.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Active Employees', value: '0', change: '0%', color: 'blue' },
                    { label: 'Pending Offers', value: '0', change: '0%', color: 'amber' },
                    { label: 'Total Payroll', value: '$0', change: '0%', color: 'emerald' },
                    { label: 'Compliance Index', value: '100%', change: 'Stable', color: 'indigo' },
                ].map((stat, i) => (
                    <div key={i} className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-lg group hover:border-blue-500/50 transition-all">
                        <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                        <div className="flex items-baseline justify-between mt-2">
                            <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
                            <span className="text-xs font-semibold py-1 px-2 rounded-full bg-slate-800 text-slate-300">
                                {stat.change}
                            </span>
                        </div>
                        <div className={`mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden`}>
                            <div className={`h-full bg-${stat.color}-500 w-1/3 rounded-full opacity-50`}></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-[#1e293b] rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
                    <div className="px-6 py-5 border-b border-slate-700 flex items-center justify-between">
                        <h3 className="font-semibold text-white">Recent Activity</h3>
                        <button className="text-xs text-blue-400 font-medium hover:text-blue-300">View All</button>
                    </div>
                    <div className="p-0">
                        <div className="flex flex-col">
                            <div className="px-6 py-8 text-center">
                                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-700">
                                    <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-white font-medium">No recent activity</h4>
                                <p className="text-slate-500 text-sm max-w-xs mx-auto mt-1">When you start onboarded employees, their status will appear here.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#1e293b] rounded-2xl border border-slate-700 shadow-xl p-6">
                    <h3 className="font-semibold text-white mb-6">Compliance Checklist</h3>
                    <div className="space-y-4">
                        {[
                            { task: 'Verify KYC Documents', done: true },
                            { task: 'Sign Master Service Agreement', done: true },
                            { task: 'Add Funding Method', done: false },
                            { task: 'Create First Local Offer', done: false },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center space-x-3">
                                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${item.done ? 'bg-emerald-500/20 text-emerald-500' : 'border border-slate-600'}`}>
                                    {item.done && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>}
                                </div>
                                <span className={`text-sm ${item.done ? 'text-slate-500 line-through' : 'text-slate-300'}`}>{item.task}</span>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold rounded-xl border border-slate-700 transition-all">
                        See Compliance Details
                    </button>
                </div>
            </div>
        </div>
    );
}
