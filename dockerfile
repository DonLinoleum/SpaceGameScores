FROM golang:1.25 as runtime
WORKDIR /app

COPY dist/space_game_scores/browser /app/dist/space_game_scores/browser
COPY server /app/server

RUN cd server && go build -o server .

EXPOSE 4200

ENTRYPOINT ["/app/server/server"]

