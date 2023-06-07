FROM golang:1.20-alpine AS builder
WORKDIR /app
COPY . .
RUN go mod download
RUN go build -o back-end cmd/main/main.go

FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/back-end .

EXPOSE 8888
ENV PORT=8888
ENV NODE_CONNECTOR_URL=172.17.0.2:8080

CMD ["./back-end"]