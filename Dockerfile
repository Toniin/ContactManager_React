### STAGE 1: ###
FROM node:alpine3.20 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm install -g tsc
RUN npm run build
#EXPOSE 4173
#CMD ["npm", "preview", "--host", "0.0.0.0", "--port", "4173"]

## STAGE 2: ###
 FROM nginx:1.27.1-alpine3.20-slim
 COPY --from=build /app/dist/ /usr/share/nginx/html
 EXPOSE 80
