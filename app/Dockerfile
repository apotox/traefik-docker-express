FROM node:16 AS build
WORKDIR /appx
COPY package*.json ./
RUN npm install
COPY . .

ARG REACT_APP_PROXY_API
ENV REACT_APP_PROXY_API $REACT_APP_PROXY_API

RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /appx/build .
EXPOSE 8081

ENTRYPOINT ["nginx", "-g", "daemon off;"]