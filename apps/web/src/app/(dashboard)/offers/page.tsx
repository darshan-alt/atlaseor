'use client';

import React, { useEffect, useState } from 'react';
import api from '../../../lib/api';

interface Offer {
    id: string;
    candidateName: string;
    candidateEmail: string;
    jobTitle: string;
    country: string;
    salary: number;
    status: string;
    details: any;
    createdAt: string;
}

export default function OffersPage() {
    const [offers, setOffers] = useState<Offer[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        candidateName: '',
        candidateEmail: '',
        jobTitle: '',
        country: 'IN',
        salary: 0,
    });

    const fetchOffers = async () => {
        try {
            const response = await api.get<Offer[]>('/offers');
            setOffers(response.data);
        } catch (error) {
            console.error('Failed to fetch offers', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchOffers();
    }, []);

    const handleCreateOffer = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/offers', formData);
            setShowCreateModal(false);
            fetchOffers();
            setFormData({ candidateName: '', candidateEmail: '', jobTitle: '', country: 'IN', salary: 0 });
        } catch (error) {
            alert('Failed to create offer');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Hiring & Offers</h2>
                    <p className="text-slate-400 mt-1">Manage global candidate offers and compensation breakdowns.</p>
                </div>
                <button
                    onClick={() => setShowCreateModal(true)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all flex items-center space-x-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                    <span>New Offer</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <div className="bg-[#1e293b] rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
                                    <th className="px-6 py-4 font-semibold">Candidate</th>
                                    <th className="px-6 py-4 font-semibold">Role</th>
                                    <th className="px-6 py-4 font-semibold">Country</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                    <th className="px-6 py-4 font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800 text-sm text-slate-300">
                                {isLoading ? (
                                    <tr><td colSpan={5} className="px-6 py-12 text-center text-slate-500 animate-pulse">Loading offers...</td></tr>
                                ) : offers.length === 0 ? (
                                    <tr><td colSpan={5} className="px-6 py-12 text-center text-slate-500">No offers created yet.</td></tr>
                                ) : (
                                    offers.map((offer) => (
                                        <tr
                                            key={offer.id}
                                            className={`hover:bg-slate-800/30 transition-colors cursor-pointer ${selectedOffer?.id === offer.id ? 'bg-blue-500/5 border-l-2 border-blue-500' : ''}`}
                                            onClick={() => setSelectedOffer(offer)}
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-white">{offer.candidateName}</span>
                                                    <span className="text-xs text-slate-500">{offer.candidateEmail}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-slate-300">{offer.jobTitle}</td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 rounded bg-slate-800 text-xs font-mono">{offer.country}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${offer.status === 'ACCEPTED' ? 'bg-emerald-500/10 text-emerald-500' :
                                                        offer.status === 'REJECTED' ? 'bg-red-500/10 text-red-500' :
                                                            'bg-blue-500/10 text-blue-500'
                                                    }`}>
                                                    {offer.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <button className="text-slate-500 hover:text-white">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="space-y-6">
                    {selectedOffer ? (
                        <div className="bg-[#1e293b] rounded-2xl border border-slate-700 shadow-xl p-6 sticky top-8 animate-in slide-in-from-right duration-300">
                            <div className="border-b border-slate-700 pb-4 mb-6">
                                <h3 className="text-lg font-bold text-white">Compensation Preview</h3>
                                <p className="text-sm text-slate-400">{selectedOffer.jobTitle} - {selectedOffer.country}</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-400">Annual Gross Salary</span>
                                    <span className="text-white font-mono font-bold">${selectedOffer.salary.toLocaleString()}</span>
                                </div>

                                <div className="space-y-2 pt-4 border-t border-slate-700/50">
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Employee Deductions</p>
                                    {selectedOffer.details?.details?.taxes?.map((tax: any, i: number) => (
                                        <div key={i} className="flex justify-between text-xs text-slate-300">
                                            <span>{tax.name}</span>
                                            <span className="text-red-400">-${tax.amount.toLocaleString()}</span>
                                        </div>
                                    ))}
                                    {selectedOffer.details?.details?.benefits?.map((benefit: any, i: number) => (
                                        <div key={i} className="flex justify-between text-xs text-slate-300">
                                            <span>{benefit.name} (EE)</span>
                                            <span className="text-red-400">-${benefit.employeeAmount.toLocaleString()}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-slate-700 flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">Estimated Annual Net</span>
                                    <span className="text-xl font-bold text-emerald-400 font-mono">${selectedOffer.details?.netSalary.toLocaleString()}</span>
                                </div>

                                <div className="mt-8 space-y-3">
                                    <button
                                        onClick={async () => {
                                            try {
                                                await api.post(`/contracts/generate-from-offer/${selectedOffer.id}`);
                                                alert('Contract generated successfully! Check the Contracts page.');
                                            } catch (error) {
                                                alert('Failed to generate contract.');
                                            }
                                        }}
                                        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/20"
                                    >
                                        Generate Employment Contract
                                    </button>
                                    <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/20">
                                        Send Offer to Candidate
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-[#1e293b]/50 rounded-2xl border border-dashed border-slate-700 p-12 text-center text-slate-500">
                            <p>Select an offer to view salary breakdown and compliance details.</p>
                        </div>
                    )}
                </div>
            </div>

            {showCreateModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="bg-[#1e293b] w-full max-w-lg rounded-2xl border border-slate-700 shadow-2xl overflow-hidden animate-in zoom-in duration-200">
                        <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white">New Global Offer</h3>
                            <button onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <form onSubmit={handleCreateOffer} className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Candidate Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.candidateName}
                                        onChange={(e) => setFormData({ ...formData, candidateName: e.target.value })}
                                        className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.candidateEmail}
                                        onChange={(e) => setFormData({ ...formData, candidateEmail: e.target.value })}
                                        className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Job Title</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.jobTitle}
                                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                                    className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    placeholder="e.g. Senior Software Engineer"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Country of Hire</label>
                                    <select
                                        value={formData.country}
                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                        className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    >
                                        <option value="IN">India (INR)</option>
                                        <option value="US">United States (USD)</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Annual Gross Salary</label>
                                    <input
                                        type="number"
                                        required
                                        value={formData.salary}
                                        onChange={(e) => setFormData({ ...formData, salary: Number(e.target.value) })}
                                        className="w-full bg-[#0f172a] border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-mono"
                                    />
                                </div>
                            </div>
                            <div className="pt-6">
                                <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all">
                                    Generate Offer Preview
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
