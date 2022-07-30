FROM node:17.9.0-slim
WORKDIR /app 
COPY . .
RUN npm install
EXPOSE 1004
ENV MONGO_URL="mongodb://localhost:27017/?retryWrites=true&w=majority"
ENV ADMIN_EMAIL="admin@xyz.com"
CMD ["npm","start"]
