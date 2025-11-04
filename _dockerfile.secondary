FROM node:24-alpine AS builder
WORKDIR /usr/src/space_game_scores

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM golang:1.25 as runtime
WORKDIR /app

COPY --from=builder /usr/src/space_game_scores/dist/space_game_scores/browser /app/dist/space_game_scores/browser
COPY server /app/server

RUN cd server && go build -o server .

EXPOSE 4200

ENTRYPOINT ["/app/server/server"]

