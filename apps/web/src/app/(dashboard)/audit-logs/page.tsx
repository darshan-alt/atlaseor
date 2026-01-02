'use client';

import React, { useEffect, useState } from 'react';
import api from '../../../lib/api';
import { useAuth } from '../../../context/AuthContext';
import { Role } from '../../../types/auth';

interface AuditLog {
    id: string;
    userId: string;
    action: string;
    resource: string;
    resourceId: string;
    payload: any;
    ipAddress: string;
    userAgent: string;
    createdAt: string;
}

export default function AuditLogsPage() {
    const [logs, setLogs] = useState<AuditLog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const response = await api.get<AuditLog[]>('/audit-logs');
                setLogs(response.data);
            } catch (error) {
                console.error('Failed to fetch audit logs', error);
            } finally {
                setIsLoading(false);
            }
        };

        if (user?.role === Role.SUPER_ADMIN || user?.role === Role.AUDITOR) {
            fetchLogs();
        }
    }, [user]);

    if (user?.role !== Role.SUPER_ADMIN && user?.role !== Role.AUDITOR) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Access Denied</h2>
                <p className="text-slate-400 mt-2 max-w-sm">You do not have the required permissions to view system audit logs.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">System Audit Logs</h2>
                    <p className="text-slate-400 mt-1">Monitor all administrative actions across the platform.</p>
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-[#1e293b] hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 transition-all flex items-center space-x-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>Refresh</span>
                </button>
            </div>

            <div className="bg-[#1e293b] rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
                                <th className="px-6 py-4 font-semibold">Timestamp</th>
                                <th className="px-6 py-4 font-semibold">User</th>
                                <th className="px-6 py-4 font-semibold">Action</th>
                                <th className="px-6 py-4 font-semibold">Resource</th>
                                <th className="px-6 py-4 font-semibold">Details</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-sm text-slate-300">
                            {isLoading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center">
                                        <div className="flex flex-col items-center">
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2"></div>
                                            <span>Loading logs...</span>
                                        </div>
                                    </td>
                                </tr>
                            ) : logs.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                                        No matching audit logs found.
                                    </td>
                                </tr>
                            ) : (
                                logs.map((log) => (
                                    <tr key={log.id} className="hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-slate-400">
                                            {new Date(log.createdAt).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-medium text-white">{log.userId || 'System'}</span>
                                                <span className="text-xs text-slate-500">{log.ipAddress}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${log.action === 'CREATE' ? 'bg-emerald-500/10 text-emerald-500' :
                                                    log.action === 'DELETE' ? 'bg-red-500/10 text-red-500' :
                                                        'bg-blue-500/10 text-blue-500'
                                                }`}>
                                                {log.action}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="text-slate-200">{log.resource}</span>
                                                <span className="text-[10px] text-slate-500 font-mono uppercase">{log.resourceId}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <details className="cursor-pointer group">
                                                <summary className="text-blue-400 hover:text-blue-300 transition-colors">View Data</summary>
                                                <pre className="mt-2 p-3 bg-[#0f172a] rounded-lg text-xs overflow-auto max-w-xs md:max-w-md lg:max-w-xl">
                                                    {JSON.stringify(log.payload, null, 2)}
                                                </pre>
                                            </details>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
