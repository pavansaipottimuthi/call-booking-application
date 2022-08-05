FROM node:17.9.0-slim 
LABEL maintainer="DeekshithSN"
WORKDIR /app
RUN useradd admin-ui \
    && chown admin-ui /app
COPY . .
RUN npm install
EXPOSE 3000
USER admin-ui
CMD ["npm","start"]
