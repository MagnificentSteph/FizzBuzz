FROM node:latest

ENV HTTP_PROXY=http://localhost:8000

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Create app directory


RUN mkdir -p /go
RUN mkdir -p /go/src/
RUN mkdir -p /go/src/slfitzge
RUN mkdir -p /go/src/slfitzge/FizzBuzz/
RUN mkdir -p /go/src/slfitzge/FizzBuzz/client

WORKDIR /go/src/slfitzge/FizzBuzz/client

COPY . /go/src/slfitzge/FizzBuzz/client

RUN npm install
RUN npm run build --production
RUN npm install -g serve
CMD serve -s build

EXPOSE 5000
