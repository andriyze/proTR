
FROM node:10.15.2-stretch

COPY . /tst

WORKDIR /tst

RUN npm install

RUN npm run tsc

#RUN chmod +x wait-for-it.sh

#CMD [ "npm", "-v" ]

#CMD "export ENV=dockercompose"