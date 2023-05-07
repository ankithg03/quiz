FROM node:alpine as builder
MAINTAINER Ankith G "https://github.com/ankithg03"
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . . 
RUN npm run build

FROM nginx:alpine
COPY ./deploy-config/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]