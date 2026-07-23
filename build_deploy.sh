#!/bin/bash
set -e

HOST=165.232.56.100
SERVICE_NAME=ruhantech-home
PORT=8082
DT=$(date +%Y%m%d)
NAME=${SERVICE_NAME}-${DT}

cd "$(dirname "$0")"

# VITE_* are baked into the bundle at build time. Read them from .env unless
# already exported.
if [ -f .env ]; then
  set -a
  # shellcheck disable=SC1091
  . ./.env
  set +a
fi

DOCKER_HOST=ssh://root@$HOST docker build \
  --build-arg VITE_TASTIR_URL="$VITE_TASTIR_URL" \

  -t ${NAME} .

ssh root@$HOST << EOF
  docker stop ${SERVICE_NAME} 2>/dev/null || true
  docker rm ${SERVICE_NAME} 2>/dev/null || true
  docker run --name ${SERVICE_NAME} -d \
    --restart unless-stopped \
    -p ${PORT}:80 \
    ${NAME}

  docker image prune -af
EOF

echo "Deployed ${SERVICE_NAME} to http://${HOST}:${PORT}"
