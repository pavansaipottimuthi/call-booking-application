FROM node:17.9.0-slim
WORKDIR /app 
ENV MONGO_URL="mongodb://mongoadmin:secret@35.226.232.31:27017/?retryWrites=true&w=majority"
COPY . .
RUN npm install
EXPOSE 1004
CMD ["npm","start"]
