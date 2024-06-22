FROM ubuntu:latest
LABEL authors="bodor.gyula"

ENTRYPOINT ["top", "-b"]