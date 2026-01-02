# AtlasEOR - API Testing Guide

## Prerequisites

- Database running (see `docs/database-setup.md`)
- API server running: `npx nx serve api`

---

## Base URL

```
http://localhost:3333/api
```

---

## Endpoints

### 1. Create Company (with Admin User)

**POST** `/companies`

Creates a new company and an initial admin user in a single transaction.

**Request Body:**
```json
{
  "name": "Acme Corporation",
  "legalName": "Acme Corporation Inc.",
  "hqCountry": "US",
  "taxId": "12-3456789",
  "adminEmail": "admin@acme.com",
  "adminFirstName": "John",
  "adminLastName": "Doe"
}
```

**Success Response (201):**
```json
{
  "company": {
    "id": "uuid-here",
    "name": "Acme Corporation",
    "legalName": "Acme Corporation Inc.",
    "hqCountry": "US",
    "taxId": "12-3456789",
    "createdAt": "2026-01-02T10:30:00.000Z",
    "updatedAt": "2026-01-02T10:30:00.000Z"
  },
  "user": {
    "id": "uuid-here",
    "email": "admin@acme.com",
    "firstName": "John",
    "lastName": "Doe",
    "role": "COMPANY_OWNER",
    "companyId": "uuid-here",
    "createdAt": "2026-01-02T10:30:00.000Z",
    "updatedAt": "2026-01-02T10:30:00.000Z"
  }
}
```

**Validation Errors (400):**
```json
{
  "statusCode": 400,
  "timestamp": "2026-01-02T10:30:00.000Z",
  "path": "/api/companies",
  "method": "POST",
  "error": "Bad Request",
  "message": [
    "name should not be empty",
    "adminEmail must be an email"
  ]
}
```

**cURL Example:**
```bash
curl -X POST http://localhost:3333/api/companies \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Acme Corporation",
    "hqCountry": "US",
    "adminEmail": "admin@acme.com",
    "adminFirstName": "John",
    "adminLastName": "Doe"
  }'
```

---

### 2. Get All Companies

**GET** `/companies`

Returns a list of all companies.

**Success Response (200):**
```json
[
  {
    "id": "uuid-1",
    "name": "Acme Corporation",
    "legalName": "Acme Corporation Inc.",
    "hqCountry": "US",
    "taxId": "12-3456789",
    "createdAt": "2026-01-02T10:30:00.000Z",
    "updatedAt": "2026-01-02T10:30:00.000Z"
  },
  {
    "id": "uuid-2",
    "name": "TechStart India",
    "hqCountry": "IN",
    "createdAt": "2026-01-02T11:00:00.000Z",
    "updatedAt": "2026-01-02T11:00:00.000Z"
  }
]
```

**cURL Example:**
```bash
curl http://localhost:3333/api/companies
```

---

### 3. Get Company by ID

**GET** `/companies/:id`

Returns a single company by ID.

**Success Response (200):**
```json
{
  "id": "uuid-here",
  "name": "Acme Corporation",
  "legalName": "Acme Corporation Inc.",
  "hqCountry": "US",
  "taxId": "12-3456789",
  "createdAt": "2026-01-02T10:30:00.000Z",
  "updatedAt": "2026-01-02T10:30:00.000Z"
}
```

**Not Found (200 with null):**
```json
null
```

**cURL Example:**
```bash
curl http://localhost:3333/api/companies/uuid-here
```

---

### 4. Update Company

**PATCH** `/companies/:id`

Updates a company's information.

**Request Body:**
```json
{
  "name": "Acme Corp (Updated)",
  "legalName": "Acme Corporation Limited"
}
```

**Success Response (200):**
```json
{
  "id": "uuid-here",
  "name": "Acme Corp (Updated)",
  "legalName": "Acme Corporation Limited",
  "hqCountry": "US",
  "taxId": "12-3456789",
  "createdAt": "2026-01-02T10:30:00.000Z",
  "updatedAt": "2026-01-02T12:00:00.000Z"
}
```

**cURL Example:**
```bash
curl -X PATCH http://localhost:3333/api/companies/uuid-here \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Acme Corp (Updated)"
  }'
```

---

### 5. Delete Company

**DELETE** `/companies/:id`

Deletes a company.

**Success Response (200):**
```json
{
  "id": "uuid-here",
  "name": "Acme Corporation",
  "legalName": "Acme Corporation Inc.",
  "hqCountry": "US",
  "taxId": "12-3456789",
  "createdAt": "2026-01-02T10:30:00.000Z",
  "updatedAt": "2026-01-02T10:30:00.000Z"
}
```

**cURL Example:**
```bash
curl -X DELETE http://localhost:3333/api/companies/uuid-here
```

---

## Validation Rules

### CreateCompanyDto
- `name`: Required, string, max 200 characters
- `legalName`: Optional, string, max 200 characters
- `hqCountry`: Required, must be 'IN' or 'US'
- `taxId`: Optional, string, max 50 characters
- `adminEmail`: Required, must be valid email
- `adminFirstName`: Required, string, max 100 characters
- `adminLastName`: Required, string, max 100 characters

### UpdateCompanyDto
- All fields optional
- Same validation rules as CreateCompanyDto when provided

---

## Testing Workflow

### 1. Create a Company
```bash
curl -X POST http://localhost:3333/api/companies \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Company",
    "hqCountry": "IN",
    "adminEmail": "admin@test.com",
    "adminFirstName": "Test",
    "adminLastName": "Admin"
  }'
```

### 2. List All Companies
```bash
curl http://localhost:3333/api/companies
```

### 3. Get Specific Company
```bash
# Replace <company-id> with actual ID from step 1
curl http://localhost:3333/api/companies/<company-id>
```

### 4. Update Company
```bash
curl -X PATCH http://localhost:3333/api/companies/<company-id> \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Test Company"}'
```

### 5. Delete Company
```bash
curl -X DELETE http://localhost:3333/api/companies/<company-id>
```

---

## Using Postman

1. Import the following collection:

**Collection Name:** AtlasEOR API

**Variables:**
- `baseUrl`: `http://localhost:3333/api`

**Requests:**
- POST `{{baseUrl}}/companies` - Create Company
- GET `{{baseUrl}}/companies` - List Companies
- GET `{{baseUrl}}/companies/:id` - Get Company
- PATCH `{{baseUrl}}/companies/:id` - Update Company
- DELETE `{{baseUrl}}/companies/:id` - Delete Company

---

## Expected Errors

### Invalid Email
```json
{
  "statusCode": 400,
  "message": ["adminEmail must be an email"]
}
```

### Invalid Country Code
```json
{
  "statusCode": 400,
  "message": ["hqCountry must be one of the following values: IN, US"]
}
```

### Missing Required Fields
```json
{
  "statusCode": 400,
  "message": [
    "name should not be empty",
    "adminEmail should not be empty"
  ]
}
```

### Unknown Properties (Rejected)
```json
{
  "statusCode": 400,
  "message": ["property unknownField should not exist"]
}
```
