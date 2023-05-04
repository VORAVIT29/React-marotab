# Use the official lightweight Node.js image.
# https://hub.docker.com/_/node
FROM node:14

# Allow statements and log messages to immediately appear in the Knative logs
ENV NODE_ENV production

# Copy local code to the container image.
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . ./

# Install production dependencies.
RUN npm install --only=production

# Build the React app
RUN npm run build

# Run the web service on container startup.
CMD ["npm", "start"]
