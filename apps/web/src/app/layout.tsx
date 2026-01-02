import { AuthProvider } from '../context/AuthContext';
import './global.css';

export const metadata = {
  title: 'AtlasEOR - Global Hiring & Payroll',
  description: 'Compliant global hiring and management in India and the US.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
