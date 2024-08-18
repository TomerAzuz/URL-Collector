# URL-Collector

A web application with a React frontend and Express.js backend.

## Setup

### Prerequisites
- Node.js 18.x

### Installation
1. Clone the repository
2. Run `npm install`

### Running
Start the server: `npm start` (default port: 3000)

### Testing
- All tests: `npm test`
- Client tests: `npm run test:client`
- Server tests: `npm run test:server`

## Architecture

- Express.js backend
- React frontend with Vite
- Monorepo structure

### Security Features
- CORS, Helmet, CSRF Protection, Rate Limiting, Content Security Policy

### Development
- dotenv for environment management
- Centralized error handling
- ESLint and Prettier for code quality and formatting

## Trade-offs

### Security vs. Performance
- **Pro**: Comprehensive security measures (CORS, Helmet, CSRF, Rate Limiting)  enhance application safety.
- **Con**: These measures may introduce minimal latency, potentially impacting response times.

### Flexibility (Express.js) vs. Convention
- **Pro**: Express.js offers greater customization and control over the application structure.
- **Con**: Requires more manual configuration compared to opinionated frameworks, potentially increasing initial setup time and complexity.

### JavaScript vs. TypeScript
- **Pro**: JavaScript allows for faster initial development with less boilerplate.
- **Con**: Sacrifices static typing, which can lead to runtime errors that TypeScript might catch during development.

## Deployment
Configured for Heroku.