# Database Setup Guide

## Prerequisites

### Install Docker Desktop (Required)

Docker is not currently installed on your system. You need to install Docker Desktop to run the PostgreSQL database locally.

**Download Docker Desktop for Mac:**
https://www.docker.com/products/docker-desktop/

After installation:
1. Open Docker Desktop
2. Wait for it to start (you'll see the Docker icon in your menu bar)
3. Verify installation: `docker --version`

---

## Quick Start

Once Docker is installed, run these commands:

```bash
# 1. Start PostgreSQL databases (dev + test)
docker compose up -d

# 2. Verify databases are running
docker compose ps

# 3. Run Prisma migration to create tables
npx prisma migrate dev --name init --schema=apps/api/src/prisma/schema.prisma

# 4. (Optional) Open Prisma Studio to view data
npx prisma studio --schema=apps/api/src/prisma/schema.prisma
```

---

## Database Access

### Development Database
- **Host:** localhost
- **Port:** 5432
- **Database:** atlas_eor
- **Username:** postgres
- **Password:** postgres
- **Connection String:** `postgresql://postgres:postgres@localhost:5432/atlas_eor`

### Test Database
- **Host:** localhost
- **Port:** 5433
- **Database:** atlas_eor_test
- **Username:** postgres
- **Password:** postgres
- **Connection String:** `postgresql://postgres:postgres@localhost:5433/atlas_eor_test`

---

## Useful Commands

```bash
# Start databases
docker compose up -d

# Stop databases
docker compose down

# Stop and remove all data (fresh start)
docker compose down -v

# View logs
docker compose logs -f postgres

# Access PostgreSQL CLI
docker exec -it atlaseor-postgres psql -U postgres -d atlas_eor

# Check database status
docker compose ps
```

---

## Prisma Commands

```bash
# Create a new migration
npx prisma migrate dev --name <migration-name> --schema=apps/api/src/prisma/schema.prisma

# Apply migrations (production)
npx prisma migrate deploy --schema=apps/api/src/prisma/schema.prisma

# Reset database (WARNING: deletes all data)
npx prisma migrate reset --schema=apps/api/src/prisma/schema.prisma

# Generate Prisma Client
npx prisma generate --schema=apps/api/src/prisma/schema.prisma

# Open Prisma Studio (database GUI)
npx prisma studio --schema=apps/api/src/prisma/schema.prisma

# Check migration status
npx prisma migrate status --schema=apps/api/src/prisma/schema.prisma
```

---

## Troubleshooting

### "Port 5432 already in use"
Another PostgreSQL instance is running. Either:
- Stop the other instance
- Change the port in `docker-compose.yml` (e.g., `5434:5432`)

### "Cannot connect to database"
1. Check Docker is running: `docker ps`
2. Check database logs: `docker compose logs postgres`
3. Verify connection string in `.env` matches `docker-compose.yml`

### "Migration failed"
1. Check database is running: `docker compose ps`
2. Reset and try again: `npx prisma migrate reset`
3. Check schema syntax: `npx prisma validate --schema=apps/api/src/prisma/schema.prisma`

---

## Next Steps After Docker Installation

1. **Install Docker Desktop** (see link above)
2. **Start databases:** `docker compose up -d`
3. **Run migration:** `npx prisma migrate dev --name init --schema=apps/api/src/prisma/schema.prisma`
4. **Start API:** `npx nx serve api`
5. **Test endpoints** using Postman or curl

---

## Alternative: Use Existing PostgreSQL

If you have PostgreSQL installed locally (not via Docker):

1. Create database: `createdb atlas_eor`
2. Update `.env` with your connection string
3. Run migrations: `npx prisma migrate dev --name init --schema=apps/api/src/prisma/schema.prisma`
