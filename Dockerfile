FROM node:12.16.3-alpine

# Add support for https on wget
RUN apk update && apk add --no-cache wget && apk --no-cache add openssl wget && apk add ca-certificates && update-ca-certificates

WORKDIR /usr/src/certificate-worker

COPY package.json ./
COPY package-lock.json ./

RUN npm install 
COPY . .
RUN npm run build

ENTRYPOINT ["npm", "run", "start"]
