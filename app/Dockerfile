# Dockerfile
# Base image
FROM node:10-stretch

# Make the folder as a working directory
WORKDIR /appdir

# Copy test project files to the workind directory
COPY ./ ./

# Download protractor from github
RUN ./download-demo-app.sh

# Change working directory
WORKDIR /appdir/protractor

# Install the test project libraries
RUN npm install && npm audit fix

EXPOSE 8081

#start our demo web app
CMD [ "npm", "start" ]