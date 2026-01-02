'use client';

import React from 'react';
import { useHasRole } from '../hooks/useHasRole';
import { Role } from '../types/auth';

interface HasRoleProps {
    roles: Role | Role[];
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

export const HasRole: React.FC<HasRoleProps> = ({ roles, children, fallback = null }) => {
    const { hasRole } = useHasRole();

    if (hasRole(roles)) {
        return <>{children}</>;
    }

    return <>{fallback}</>;
};
