FROM node:12

# Create App Directory
WORKDIR /usr/src/app

# Install App dependencies
# We use a wildcard to ensure that both the package.json && the package-lock.json are copied
COPY package*.json ./

RUN npm install
# *
# * If you're going to build your code for production
# * RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

cmd ["node", "index.js"]