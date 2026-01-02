'use client';

import React, { useEffect, useState } from 'react';
import api from '../../../lib/api';
import { useAuth } from '../../../context/AuthContext';
import { Role, User } from '../../../types/auth';
import { HasRole } from '../../../components/HasRole';

export default function TeamPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user: currentUser } = useAuth();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await api.get<User[]>('/auth/users'); // I might need to add this endpoint
                setUsers(response.data);
            } catch (error) {
                console.error('Failed to fetch team members', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleRoleChange = async (userId: string, newRole: Role) => {
        try {
            await api.patch(`/auth/users/${userId}/role`, { role: newRole });
            setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
        } catch (error) {
            alert('Failed to update role');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Team Management</h2>
                    <p className="text-slate-400 mt-1">Manage roles and permissions for your team members.</p>
                </div>
                <HasRole roles={[Role.COMPANY_OWNER, Role.SUPER_ADMIN, Role.HR_ADMIN]}>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all">
                        Invite Member
                    </button>
                </HasRole>
            </div>

            <div className="bg-[#1e293b] rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
                                <th className="px-6 py-4 font-semibold">Name</th>
                                <th className="px-6 py-4 font-semibold">Email</th>
                                <th className="px-6 py-4 font-semibold">Role</th>
                                <th className="px-6 py-4 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-sm text-slate-300">
                            {isLoading ? (
                                <tr><td colSpan={4} className="px-6 py-8 text-center text-slate-500 animate-pulse">Loading team...</td></tr>
                            ) : (
                                users.map((user) => (
                                    <tr key={user.id} className="hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                                                    {user.firstName[0]}{user.lastName[0]}
                                                </div>
                                                <span className="font-medium text-white">{user.firstName} {user.lastName}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-400">{user.email}</td>
                                        <td className="px-6 py-4">
                                            <HasRole roles={[Role.COMPANY_OWNER, Role.SUPER_ADMIN, Role.HR_ADMIN]} fallback={
                                                <span className="capitalize text-slate-400">{user.role.toLowerCase().replace('_', ' ')}</span>
                                            }>
                                                <select
                                                    value={user.role}
                                                    onChange={(e) => handleRoleChange(user.id, e.target.value as Role)}
                                                    disabled={user.id === currentUser?.id}
                                                    className="bg-[#0f172a] border border-slate-600 text-slate-200 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 py-1.5 appearance-none cursor-pointer disabled:opacity-50"
                                                >
                                                    {Object.values(Role).map(r => (
                                                        <option key={r} value={r}>{r.replace('_', ' ')}</option>
                                                    ))}
                                                </select>
                                            </HasRole>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-slate-500 hover:text-white transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                                </svg>
                                            </button>
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
