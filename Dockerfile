FROM node:12.16.3-alpine

# Add support for https on wget
RUN apk update && apk add --no-cache wget nginx && apk --no-cache add openssl wget && apk add ca-certificates && update-ca-certificates

RUN mkdir -p /run/nginx
COPY nginx.conf /etc/nginx/conf.d/wakanda.conf

COPY crontab.txt ./
RUN crontab crontab.txt

WORKDIR /usr/src/certificate-worker

COPY package.json ./
COPY package-lock.json ./

RUN npm install 
COPY . .
RUN npm run generate

ENTRYPOINT ["nginx", "-g", "daemon off;"]
