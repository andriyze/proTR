# Dockerfile
# Base image
FROM node:alpine

# Copy test project files to the image folder
COPY ./protractor /appdir

# Make the folder as a working directory
WORKDIR /appdir

# Install the test project libraries
RUN npm install

EXPOSE 8081

#start our demo web app
CMD [ "npm", "start" ]