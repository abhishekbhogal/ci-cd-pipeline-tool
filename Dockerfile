# Please write a Dockerfile that can be used to build an image for our NodeJS application. 
# The resulting image should be able to run once it has been built.

# Use the latest version of Node.js as the base image
FROM node:alpine

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the Node.js application
CMD ["node", "app.js"]


#USED BELOW COMMAND TO CREATE THE DOCKER FILE
# docker build -t node-docker-veryable .

#USE TO RUN THE DOCKER CONTAINER
#docker run -it -p 9000:3000 node-docker-veryable