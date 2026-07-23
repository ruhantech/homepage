FROM node:20-alpine AS build
WORKDIR /app

# VITE_* values are inlined into the bundle at build time, so they must be
# present here rather than at container runtime.
ARG VITE_TASTIR_URL
ENV VITE_TASTIR_URL=$VITE_TASTIR_URL

RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
