#!/bin/bash
set -e

echo "🚀 AtlasEOR - Database Setup Script"
echo "===================================="
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed!"
    echo ""
    echo "Please install Docker Desktop from:"
    echo "https://www.docker.com/products/docker-desktop/"
    echo ""
    exit 1
fi

# Check if Docker is running
if ! docker info &> /dev/null; then
    echo "❌ Docker is not running!"
    echo ""
    echo "Please start Docker Desktop and try again."
    echo ""
    exit 1
fi

echo "✅ Docker is installed and running"
echo ""

# Start databases
echo "📦 Starting PostgreSQL databases..."
docker compose up -d

# Wait for databases to be ready
echo "⏳ Waiting for databases to be ready..."
sleep 5

# Check if databases are running
if docker compose ps | grep -q "Up"; then
    echo "✅ Databases are running"
else
    echo "❌ Failed to start databases"
    docker compose logs
    exit 1
fi

echo ""
echo "🔄 Running Prisma migrations..."
npx prisma migrate dev --name init --schema=apps/api/src/prisma/schema.prisma

echo ""
echo "✅ Database setup complete!"
echo ""
echo "📊 Database Information:"
echo "  - Dev DB:  postgresql://postgres:postgres@localhost:5432/atlas_eor"
echo "  - Test DB: postgresql://postgres:postgres@localhost:5433/atlas_eor_test"
echo ""
echo "🎯 Next steps:"
echo "  1. Start the API: npx nx serve api"
echo "  2. Open Prisma Studio: npx prisma studio --schema=apps/api/src/prisma/schema.prisma"
echo "  3. Test endpoints with Postman or curl"
echo ""
