### STAGE 1: ###
FROM node:20.15.1-slim AS build
WORKDIR /
COPY package.json ./
RUN npm install
# RUN npm install -g tsc
RUN npm install -g vite
COPY . .
RUN vite build
#EXPOSE 4173
#CMD ["npm", "preview", "--host", "0.0.0.0", "--port", "4173"]

## STAGE 2: ###
FROM nginx:1.27.1-alpine3.20-slim
COPY --from=build /dist/ /usr/share/nginx/html
EXPOSE 80
