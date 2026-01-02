'use client';

import React, { useEffect, useState } from 'react';
import api from '../../../lib/api';

interface Contract {
    id: string;
    offer?: {
        candidateName: string;
        jobTitle: string;
        country: string;
    };
    status: string;
    content: string;
    legalTerms: any;
    createdAt: string;
}

export default function ContractsPage() {
    const [contracts, setContracts] = useState<Contract[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedContract, setSelectedContract] = useState<Contract | null>(null);

    const fetchContracts = async () => {
        try {
            const response = await api.get<Contract[]>('/contracts');
            setContracts(response.data);
        } catch (error) {
            console.error('Failed to fetch contracts', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchContracts();
    }, []);

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-white tracking-tight">Employment Contracts</h2>
                <p className="text-slate-400 mt-1">Review and manage localized employment agreements.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#1e293b] rounded-2xl border border-slate-700 shadow-xl overflow-hidden self-start">
                    <div className="px-6 py-4 border-b border-slate-700 bg-slate-800/30">
                        <h3 className="font-semibold text-white">Active & Pending Contracts</h3>
                    </div>
                    <div className="divide-y divide-slate-800">
                        {isLoading ? (
                            <div className="p-12 text-center text-slate-500 animate-pulse">Loading contracts...</div>
                        ) : contracts.length === 0 ? (
                            <div className="p-12 text-center text-slate-500">No contracts generated yet.</div>
                        ) : (
                            contracts.map((contract) => (
                                <div
                                    key={contract.id}
                                    onClick={() => setSelectedContract(contract)}
                                    className={`p-6 cursor-pointer transition-all hover:bg-slate-800/40 ${selectedContract?.id === contract.id ? 'bg-blue-500/5' : ''}`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-bold text-white text-lg">{contract.offer?.candidateName || 'Unknown Employee'}</p>
                                            <p className="text-sm text-slate-400">{contract.offer?.jobTitle} • {contract.offer?.country}</p>
                                        </div>
                                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${contract.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-500' :
                                            'bg-amber-500/10 text-amber-500'
                                            }`}>
                                            {contract.status}
                                        </span>
                                    </div>
                                    <div className="mt-4 flex items-center space-x-4 text-xs text-slate-500">
                                        <span dangerouslySetInnerHTML={{ __html: `Generated: ${new Date(contract.createdAt).toLocaleDateString()}` }} suppressHydrationWarning />
                                        <span>•</span>
                                        <span>ID: {contract.id.slice(0, 8)}</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div>
                    {selectedContract ? (
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                            <div className="bg-slate-100 px-8 py-4 border-b border-slate-200 flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Digital Contract Preview</span>
                                <div className="flex items-center space-x-2">
                                    <button className="px-3 py-1.5 bg-white border border-slate-300 rounded text-xs font-semibold text-slate-700 hover:bg-slate-50">Download PDF</button>
                                    <button className="px-3 py-1.5 bg-blue-600 rounded text-xs font-semibold text-white hover:bg-blue-700">Send for Signature</button>
                                </div>
                            </div>
                            <div className="p-12 bg-white text-slate-900 font-serif max-h-[70vh] overflow-auto">
                                <div className="max-w-prose mx-auto">
                                    <pre className="whitespace-pre-wrap font-serif text-sm leading-relaxed">
                                        {selectedContract.content}
                                    </pre>

                                    <div className="mt-12 pt-8 border-t border-slate-200">
                                        <h4 className="font-bold mb-4 uppercase text-xs tracking-tighter text-slate-500">Legal Terms & Addendums</h4>
                                        <div className="grid grid-cols-2 gap-4 text-xs">
                                            <div className="p-3 bg-slate-50 rounded">
                                                <p className="font-bold text-slate-400 uppercase mb-1">Probation Period</p>
                                                <p>{selectedContract.legalTerms?.probationPeriod}</p>
                                            </div>
                                            <div className="p-3 bg-slate-50 rounded">
                                                <p className="font-bold text-slate-400 uppercase mb-1">Notice Period</p>
                                                <p>{selectedContract.legalTerms?.noticePeriod}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center p-12 bg-[#1e293b]/30 rounded-2xl border border-dashed border-slate-700 text-slate-500">
                            <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            <p>Select a contract from the list to preview the document and legal terms.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
