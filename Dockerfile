FROM node:13-alpine
WORKDIR /usr/src/app
COPY build build/
RUN npm install -g serve
EXPOSE 3009
CMD ["serve", "-s", "-p", "3009", "build"]