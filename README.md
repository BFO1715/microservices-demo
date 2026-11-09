# microservices-demo

Starting the app:
cd /workspaces/microservices-demo
docker compose up -d
docker compose ps

Rebuild after changing app:
docker compose up --build -d

Check running containers:
docker compose ps

Commit and push changes:
git add .
git commit -m "Changes"
git push origin main

Stopping the app:
docker compose down