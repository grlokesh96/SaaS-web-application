# Contributing to SaaS Web Application

Thank you for your interest in contributing! This document outlines the process for contributing to the project.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How to Contribute

### Reporting Bugs

Before creating a bug report, please search existing issues to avoid duplicates.

When creating a bug report, include:

- Clear and descriptive title
- Steps to reproduce the behavior
- Expected behavior
- Screenshots if applicable
- Environment details (Node.js version, OS, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement issue, include:

- Use a clear and descriptive title
- Provide a detailed description of the proposed functionality
- Explain why this enhancement would be useful

### Pull Requests

1. Fork the repository
2. Create a feature branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Ensure tests pass:
   ```bash
   npm test
   npm run lint
   npm run format:check
   ```
5. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add new subscription plan"
   ```
6. Push to your fork and create a Pull Request

## Development Setup

```bash
git clone https://github.com/grlokesh96/SaaS-web-application.git
cd SaaS-web-application
npm install
cp .env.example .env
npm start
```

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

## Style Guide

- Follow the existing code style
- Run `npm run format` before committing
- Ensure ESLint passes (`npm run lint`)
- Write meaningful commit messages

## Questions?

Feel free to open an issue with the `question` label if you have any questions about contributing.
