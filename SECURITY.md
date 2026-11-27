# Security Policy

## Supported Versions

This project follows semantic versioning. Security updates are applied to the latest minor version.

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of the SaaS Web Application seriously.

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, report vulnerabilities privately using one of the following methods:

1. **GitHub Private Vulnerability Reporting** (preferred)
   - Go to the repository → **Security** tab → **Report a vulnerability**
   - This creates a private security advisory visible only to maintainers

2. **Email**
   - Send details to: `security@yourdomain.com` (replace with your actual security contact)

### What to Include

When reporting, please provide:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Any suggested mitigations (optional)

### Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 7 days
- **Resolution Target**: Critical issues within 14 days; high within 30 days

We will keep you informed of progress and notify you when the issue is resolved.

## Security Features

This application was built with security in mind:

- bcrypt password hashing
- JWT authentication with httpOnly cookies
- Rate limiting on auth and API endpoints
- Input validation and sanitization
- Security headers via middleware
- API key-based access with usage quotas
- Docker image scanning in CI
- SAST (Semgrep) and dependency scanning (OWASP Dependency-Check)

## Dependency Management

- Dependabot is enabled (`.github/dependabot.yml`)
- All dependencies are regularly scanned in CI

Thank you for helping keep this project secure.
