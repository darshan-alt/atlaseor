'use client';

import React, { useEffect, useState } from 'react';
import api from '../../../lib/api';

interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    status: string;
    baseSalary: number;
    managerId?: string;
    manager?: {
        firstName: string;
        lastName: string;
    }
}

export default function EmployeesPage() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchEmployees = async () => {
        try {
            const response = await api.get<Employee[]>('/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error('Failed to fetch employees', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleAssignManager = async (employeeId: string, managerId: string) => {
        try {
            await api.patch(`/employees/${employeeId}`, { managerId: managerId || null });
            fetchEmployees();
        } catch (error) {
            alert('Failed to assign manager');
        }
    };

    const [selectedEmployeeForDocs, setSelectedEmployeeForDocs] = useState<Employee | null>(null);
    const [docs, setDocs] = useState<any[]>([]);
    const [isDocsLoading, setIsDocsLoading] = useState(false);

    const fetchDocs = async (empId: string) => {
        setIsDocsLoading(true);
        try {
            const res = await api.get(`/documents/employee/${empId}`);
            setDocs(res.data);
        } catch (error) {
            console.error('Failed to fetch docs');
        } finally {
            setIsDocsLoading(false);
        }
    };

    const handleCreateDocPlaceholder = async (name: string, type: string) => {
        if (!selectedEmployeeForDocs) return;
        try {
            await api.post('/documents/placeholder', {
                employeeId: selectedEmployeeForDocs.id,
                name,
                type,
            });
            fetchDocs(selectedEmployeeForDocs.id);
        } catch (error) {
            alert('Failed to add document requirement');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Global Workforce</h2>
                    <p className="text-slate-400 mt-1">Manage your international team members and their employment status.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                    Array(3).fill(0).map((_, i) => (
                        <div key={i} className="bg-[#1e293b] rounded-2xl p-6 border border-slate-700 animate-pulse">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-slate-800"></div>
                                <div className="h-4 w-24 bg-slate-800 rounded"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-3 w-full bg-slate-800 rounded"></div>
                                <div className="h-3 w-2/3 bg-slate-800 rounded"></div>
                            </div>
                        </div>
                    ))
                ) : employees.length === 0 ? (
                    <div className="col-span-full py-20 text-center bg-[#1e293b]/50 rounded-2xl border border-dashed border-slate-700">
                        <p className="text-slate-500">No active employees found. Start by hiring candidates via the Offers page.</p>
                    </div>
                ) : (
                    employees.map((emp) => (
                        <div key={emp.id} className="bg-[#1e293b] rounded-2xl p-6 border border-slate-700 shadow-xl group hover:border-blue-500/50 transition-all hover:shadow-blue-500/5">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/20">
                                        {emp.firstName[0]}{emp.lastName[0]}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">{emp.firstName} {emp.lastName}</h3>
                                        <p className="text-xs text-slate-400 font-mono">{emp.country}</p>
                                    </div>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${emp.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-slate-500/10 text-slate-500'
                                    }`}>
                                    {emp.status}
                                </span>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-slate-700/50">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Work Email</span>
                                    <span className="text-slate-300 truncate max-w-[150px]">{emp.email}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Base Salary</span>
                                    <span className="text-white font-mono font-bold">${emp.baseSalary.toLocaleString()}</span>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span className="text-slate-500 text-sm">Reporting Manager</span>
                                    <select
                                        className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs text-white"
                                        value={emp.managerId || ''}
                                        onChange={(e) => handleAssignManager(emp.id, e.target.value)}
                                    >
                                        <option value="">No Manager</option>
                                        {employees.filter(m => m.id !== emp.id).map(m => (
                                            <option key={m.id} value={m.id}>{m.firstName} {m.lastName}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="mt-6 flex space-x-2">
                                <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg border border-slate-700 transition-all">
                                    Profile
                                </button>
                                <button
                                    onClick={() => { setSelectedEmployeeForDocs(emp); fetchDocs(emp.id); }}
                                    className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg border border-slate-700 transition-all">
                                    Documents
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {selectedEmployeeForDocs && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="bg-[#1e293b] w-full max-w-2xl rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
                        <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white">Documents: {selectedEmployeeForDocs.firstName} {selectedEmployeeForDocs.lastName}</h3>
                            <button onClick={() => setSelectedEmployeeForDocs(null)} className="text-slate-400 hover:text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleCreateDocPlaceholder('Passport Copy', 'ID_PROOF')}
                                    className="px-3 py-1.5 bg-blue-600/20 text-blue-400 text-xs font-bold rounded-lg border border-blue-500/20 hover:bg-blue-600/30 transition-all"
                                >
                                    + Passport Req
                                </button>
                                <button
                                    onClick={() => handleCreateDocPlaceholder('Tax Identification', 'TAX_DOC')}
                                    className="px-3 py-1.5 bg-emerald-600/20 text-emerald-400 text-xs font-bold rounded-lg border border-emerald-500/20 hover:bg-emerald-600/30 transition-all"
                                >
                                    + Tax Card Req
                                </button>
                            </div>

                            <div className="space-y-3">
                                {isDocsLoading ? <p className="text-slate-500 animate-pulse">Loading documents...</p> :
                                    docs.length === 0 ? <p className="text-slate-500 italic">No document requirements set yet.</p> :
                                        docs.map(doc => (
                                            <div key={doc.id} className="flex items-center justify-between p-4 bg-[#0f172a] border border-slate-700 rounded-xl">
                                                <div>
                                                    <p className="text-white font-medium">{doc.name}</p>
                                                    <p className="text-[10px] text-slate-500 uppercase">{doc.type}</p>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${doc.status === 'VERIFIED' ? 'bg-emerald-500/10 text-emerald-500' :
                                                        doc.status === 'REJECTED' ? 'bg-red-500/10 text-red-500' :
                                                            doc.status === 'UPLOADED' ? 'bg-blue-500/10 text-blue-500' :
                                                                'bg-slate-500/10 text-slate-500'
                                                        }`}>
                                                        {doc.status}
                                                    </span>
                                                    {doc.status === 'PENDING' && (
                                                        <div className="relative">
                                                            <input
                                                                type="file"
                                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                                onChange={async (e) => {
                                                                    const file = e.target.files?.[0];
                                                                    if (!file) return;
                                                                    const formData = new FormData();
                                                                    formData.append('file', file);
                                                                    try {
                                                                        await api.post(`/documents/${doc.id}/upload`, formData, {
                                                                            headers: { 'Content-Type': 'multipart/form-data' }
                                                                        });
                                                                        fetchDocs(selectedEmployeeForDocs.id);
                                                                    } catch (error) {
                                                                        alert('Upload failed');
                                                                    }
                                                                }}
                                                            />
                                                            <span className="text-xs text-blue-400 underline font-semibold">Upload File</span>
                                                        </div>
                                                    )}
                                                    {doc.status === 'UPLOADED' && (
                                                        <div className="flex space-x-2">
                                                            <button
                                                                onClick={async () => {
                                                                    await api.patch(`/documents/${doc.id}/status`, { status: 'VERIFIED' });
                                                                    fetchDocs(selectedEmployeeForDocs.id);
                                                                }}
                                                                className="text-[10px] bg-emerald-600/20 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20 hover:bg-emerald-600/30 font-bold"
                                                            >
                                                                Verify
                                                            </button>
                                                            <button
                                                                onClick={async () => {
                                                                    await api.patch(`/documents/${doc.id}/status`, { status: 'REJECTED' });
                                                                    fetchDocs(selectedEmployeeForDocs.id);
                                                                }}
                                                                className="text-[10px] bg-red-600/20 text-red-400 px-2 py-1 rounded border border-red-500/20 hover:bg-red-600/30 font-bold"
                                                            >
                                                                Reject
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
