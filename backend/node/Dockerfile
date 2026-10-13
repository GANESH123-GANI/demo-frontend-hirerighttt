FROM node:22-alpine AS runtime
WORKDIR /app
RUN addgroup -S app && adduser -S app -G app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev 2>/dev/null || npm install --omit=dev

COPY index.mjs interviewAgent.mjs loadEnv.mjs config.mjs supabaseAuth.mjs ./
COPY db ./db
COPY data ./data

USER app
ENV NODE_ENV=production
ENV ENVIRONMENT=production
EXPOSE 8787
HEALTHCHECK --interval=30s --timeout=10s --retries=3 --start-period=15s \
  CMD node -e "fetch('http://127.0.0.1:8787/api/health').then((r)=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "index.mjs"]
