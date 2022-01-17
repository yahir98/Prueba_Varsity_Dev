FROM node:14.15.1-alpine as clon-twitter

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install 

COPY . /app/

RUN npm run build --prod

FROM nginx:1.21.4-alpine

COPY --from=clon-twitter /app/dist/Twitter-Frontend /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'