FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

# Expose port for API and WebSocket
EXPOSE 3000

CMD ["node", "src/index.js"]
