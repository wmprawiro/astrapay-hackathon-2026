FROM node:20-alpine

# Install Chromium for whatsapp-web.js (Puppeteer)
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      yarn

# Skip Puppeteer Chromium download and point to Alpine's Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose port for API and WebSocket
EXPOSE 3000

CMD ["node", "src/index.js"]
