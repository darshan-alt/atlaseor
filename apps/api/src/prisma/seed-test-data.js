const { PrismaClient } = require('../generated/client/index');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding test data...');

    // 1. Create a Company
    const company = await prisma.company.upsert({
        where: { id: 'test-company-id' },
        update: {},
        create: {
            id: 'test-company-id',
            name: 'Test Global Corp',
            legalName: 'Test Global Corporation Inc.',
            hqCountry: 'US',
            taxId: 'EIN-123456789',
        },
    });

    console.log(`✅ Company created: ${company.name}`);

    // 2. Create a Company Owner User
    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = await prisma.user.upsert({
        where: { email: 'admin@test.com' },
        update: { passwordHash: hashedPassword },
        create: {
            email: 'admin@test.com',
            passwordHash: hashedPassword,
            firstName: 'Test',
            lastName: 'Admin',
            role: 'COMPANY_OWNER',
            companyId: company.id,
        },
    });

    console.log(`✅ Admin User created: ${user.email} (Password: password123)`);

    // 3. Create some Test Employees
    const employeesData = [
        {
            firstName: 'Rahul',
            lastName: 'Sharma',
            email: 'rahul@test.com',
            country: 'IN',
            baseSalary: 1200000,
            status: 'ACTIVE',
        },
        {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@test.com',
            country: 'US',
            baseSalary: 100000,
            status: 'ACTIVE',
        }
    ];

    for (const emp of employeesData) {
        await prisma.employee.upsert({
            where: { email: emp.email },
            update: {},
            create: {
                ...emp,
                companyId: company.id,
            }
        });
    }

    console.log('✅ Test Employees created.');
    console.log('🚀 Seeding complete! You can now log in with admin@test.com / password123');
}

main()
    .catch((e) => {
        console.error('❌ Seeding failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
