FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
# Install application dependencies, including dev-dependencies
RUN npm install
COPY . .
# Start the application with nodemon
CMD ["npm", "run", "dev"]
