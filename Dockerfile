# ============================================================
# Stage 1: Dependencies
# ============================================================
FROM node:25-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci \
    --omit=dev \
    --ignore-scripts \
    --no-audit \
    --no-fund \
    && npm cache clean --force


# ============================================================
# Stage 2: Production Runtime
# ============================================================
FROM node:25-alpine AS runtime

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

WORKDIR /app

# Copy only production dependencies first
COPY --from=deps /app/node_modules ./node_modules

# Copy application source
COPY --chown=node:node package.json package-lock.json ./
COPY --chown=node:node src ./src

# Create application data directory
RUN mkdir -p /app/data \
    && chown -R node:node /app

# Run as non-root user
USER node

EXPOSE 3000

# Container health check
HEALTHCHECK \
    --interval=60s \
    --timeout=3s \
    --start-period=10s \
    --retries=3 \
    CMD node -e "fetch('http://127.0.0.1:3000/healthz') \
      .then(r => process.exit(r.ok ? 0 : 1)) \
      .catch(() => process.exit(1))"

CMD ["node", "src/server.js"]
