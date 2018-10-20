FROM golang:1.8

ENV FUNCTION_URL=https://us-central1-intrepid-vista-219719.cloudfunctions.net/fizz_buzz
ENV MAX_RANGE=100
ENV CLIENT_HTTP=http://localhost:5000

RUN mkdir -p /go
RUN mkdir -p /go/src/
RUN mkdir -p /go/src/slfitzge
RUN mkdir -p /go/src/slfitzge/FizzBuzz
RUN mkdir -p /go/src/slfitzge/FizzBuzz/server

RUN export GOPATH=$HOME/go
RUn export GOPATH=$HOME/go

ADD . /go/src/github.com/slfitzge/FizzBuzz/server

WORKDIR /go/src/github.com/slfitzge/FizzBuzz/server
COPY . /go/src/github.com/slfitzge/FizzBuzz/server

RUN go get -d -v ./
RUN go install -v ./

ENTRYPOINT /go/bin/server

EXPOSE 8000
