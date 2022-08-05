FROM node:17.9.0-slim 
LABEL maintainer="DeekshithSN"
WORKDIR /app
RUN useradd user-ui \
    && chown user-ui /app
COPY . .
RUN npm install
EXPOSE 3000
USER user-ui
CMD ["npm","start"]
