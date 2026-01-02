'use client';

import React, { useState, useEffect } from 'react';
import api from '../../../lib/api';

interface PayrollPreview {
    month: number;
    year: number;
    employeeCount: number;
    items: any[];
    totals: {
        grossSalary: number;
        netSalary: number;
        totalDeductions: number;
        totalContributions: number;
    };
}

export default function PayrollPage() {
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());
    const [preview, setPreview] = useState<PayrollPreview | null>(null);
    const [isSummarizing, setIsSummarizing] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handlePreview = async () => {
        setIsSummarizing(true);
        try {
            const response = await api.get<PayrollPreview>(`/payroll/preview?month=${month}&year=${year}`);
            setPreview(response.data);
        } catch (error) {
            alert('Failed to generate payroll preview. Ensure you have active employees.');
        } finally {
            setIsSummarizing(false);
        }
    };

    const handleRunPayroll = async () => {
        setIsRunning(true);
        try {
            await api.post('/payroll/run', { month, year });
            alert('Payroll processed successfully!');
            setPreview(null);
        } catch (error) {
            alert('Failed to process payroll.');
        } finally {
            setIsRunning(false);
        }
    };

    const [pastRuns, setPastRuns] = useState<any[]>([]);
    const [viewingPast, setViewingPast] = useState(false);
    const [isLoadingLedger, setIsLoadingLedger] = useState(false);

    const fetchPastRuns = async () => {
        setIsLoadingLedger(true);
        try {
            const res = await api.get('/payroll/ledger');
            setPastRuns(res.data);
        } catch (error) {
            console.error('Failed to fetch ledger');
        } finally {
            setIsLoadingLedger(false);
        }
    };

    useEffect(() => {
        if (viewingPast) {
            fetchPastRuns();
        }
    }, [viewingPast]);

    if (!mounted) return <div className="animate-pulse space-y-6">
        <div className="h-10 w-1/4 bg-slate-800 rounded"></div>
        <div className="h-20 w-full bg-slate-800 rounded"></div>
    </div>;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Payroll Engine</h2>
                    <p className="text-slate-400 mt-1">Review, simulate, and execute global payroll runs.</p>
                </div>
                <button
                    onClick={() => setViewingPast(!viewingPast)}
                    className="text-sm text-blue-400 hover:text-blue-300 font-medium"
                >
                    {viewingPast ? 'Back to Engine' : 'View Payroll Ledger'}
                </button>
            </div>

            {!viewingPast ? (
                <>
                    <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-wrap items-end gap-6">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Month</label>
                            <select
                                value={month}
                                onChange={(e) => setMonth(Number(e.target.value))}
                                className="w-40 bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-2 text-white outline-none"
                            >
                                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m, i) => (
                                    <option key={i + 1} value={i + 1}>{m}</option>
                                ))}
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Year</label>
                            <select
                                value={year}
                                onChange={(e) => setYear(Number(e.target.value))}
                                className="w-32 bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-2 text-white outline-none"
                            >
                                <option value={2025}>2025</option>
                                <option value={2026}>2026</option>
                            </select>
                        </div>
                        <button
                            onClick={handlePreview}
                            disabled={isSummarizing}
                            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all"
                        >
                            {isSummarizing ? 'Calculating...' : 'Preview Payroll'}
                        </button>
                    </div>

                    {preview && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {[
                                    { label: 'Employees', value: preview.employeeCount, color: 'blue' },
                                    { label: 'Total Gross', value: `$${preview.totals.grossSalary.toLocaleString()}`, color: 'slate' },
                                    { label: 'Total Deductions', value: `-$${preview.totals.totalDeductions.toLocaleString()}`, color: 'red' },
                                    { label: 'Net Payout', value: `$${preview.totals.netSalary.toLocaleString()}`, color: 'emerald' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700 shadow-lg">
                                        <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">{stat.label}</p>
                                        <p className={`text-2xl font-bold mt-1 ${stat.color === 'red' ? 'text-red-400' : stat.color === 'emerald' ? 'text-emerald-400' : 'text-white'}`}>
                                            {stat.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-[#1e293b] rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
                                <div className="px-6 py-4 border-b border-slate-700 bg-slate-800/30 flex justify-between items-center">
                                    <h3 className="font-semibold text-white">Line Item Breakdown</h3>
                                    <button
                                        onClick={handleRunPayroll}
                                        disabled={isRunning}
                                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-700 text-white text-xs font-bold rounded-lg uppercase tracking-wider transition-all"
                                    >
                                        {isRunning ? 'Processing...' : 'Approve & Run Payroll'}
                                    </button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse text-sm">
                                        <thead>
                                            <tr className="bg-slate-800/50 text-slate-400 text-[10px] uppercase tracking-wider">
                                                <th className="px-6 py-3">Employee</th>
                                                <th className="px-6 py-3">Gross</th>
                                                <th className="px-6 py-3">Taxes</th>
                                                <th className="px-6 py-3">Benefits (EE)</th>
                                                <th className="px-6 py-3">Employer Cost</th>
                                                <th className="px-6 py-3 text-right">Net Salary</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-800 text-slate-300">
                                            {preview.items.map((item, i) => (
                                                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="font-medium text-white">{item.employeeName}</div>
                                                        <div className="text-[10px] text-slate-500 uppercase">{item.country}</div>
                                                    </td>
                                                    <td className="px-6 py-4 font-mono">${item.grossSalary.toLocaleString()}</td>
                                                    <td className="px-6 py-4 text-red-400 font-mono">-${item.totalDeductions.toLocaleString()}</td>
                                                    <td className="px-6 py-4 text-slate-400 font-mono">included</td>
                                                    <td className="px-6 py-4 text-slate-300 font-mono">+${item.totalContributions.toLocaleString()}</td>
                                                    <td className="px-6 py-4 text-right">
                                                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg font-bold font-mono">
                                                            ${item.netSalary.toLocaleString()}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="bg-[#1e293b] rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-700 bg-slate-800/30 flex justify-between items-center">
                        <h3 className="font-semibold text-white">Payroll Ledger</h3>
                        <button onClick={fetchPastRuns} className="text-xs text-blue-400 hover:underline">Refresh</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr className="bg-slate-800/50 text-slate-400 text-[10px] uppercase tracking-wider">
                                    <th className="px-6 py-3">Period</th>
                                    <th className="px-6 py-3">Run Date</th>
                                    <th className="px-6 py-3">Employees</th>
                                    <th className="px-6 py-3">Net Payout</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800 text-slate-300">
                                {isLoadingLedger ? (
                                    <tr><td colSpan={6} className="px-6 py-4 text-center text-slate-500">Loading ledger...</td></tr>
                                ) : pastRuns.length === 0 ? (
                                    <tr><td colSpan={6} className="px-6 py-20 text-center text-slate-500">No past runs found in the ledger.</td></tr>
                                ) : (
                                    pastRuns.map((run) => (
                                        <tr key={run.id} className="hover:bg-slate-800/30 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-white">
                                                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][run.month - 1]} {run.year}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-slate-400 text-xs" suppressHydrationWarning>
                                                {new Date(run.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4">{run._count?.items || 0}</td>
                                            <td className="px-6 py-4 font-mono text-emerald-400 font-bold">${run.totalNetPayout?.toLocaleString() || '0'}</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded-full border border-emerald-500/20">
                                                    COMPLETED
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-blue-400 hover:text-blue-300 text-xs font-semibold">View Details</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
