import { useAuth } from '../context/AuthContext';
import { Role } from '../types/auth';

export const useHasRole = () => {
    const { user } = useAuth();

    const hasRole = (roles: Role | Role[]) => {
        if (!user) return false;
        if (user.role === Role.SUPER_ADMIN) return true; // Super admin has all roles

        if (Array.isArray(roles)) {
            return roles.includes(user.role);
        }
        return user.role === roles;
    };

    return { hasRole, currentRole: user?.role };
};
