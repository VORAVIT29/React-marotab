# Use the official lightweight Node.js image.
# https://hub.docker.com/_/node
FROM node:14

# Copy local code to the container image.
WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .

RUN npm run build

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --form=build /app/build /user/share/nginx/html