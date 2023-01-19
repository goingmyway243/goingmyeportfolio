 #Stage 1: build
FROM node:alpine AS builder

WORKDIR /app

COPY . .
RUN npm install -g @angular/cli
RUN npm install
RUN ng build

#Stage 2: deploy
FROM nginx

COPY --from=builder /app/dist/goingmyeportfolio /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf

RUN ls -la /usr/share/nginx/html
RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


 