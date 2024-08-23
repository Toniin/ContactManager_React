### STAGE 1: ###
FROM node:alpine3.20 as build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
#EXPOSE 4173
#CMD ["npm", "preview", "--host", "0.0.0.0", "--port", "4173"]

## STAGE 2: ###
 FROM nginx:1.27.1-alpine3.20-slim
 COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html
 EXPOSE 80
