FROM node:17.9.0-slim
WORKDIR /app 
ENV ADMIN_UI_USER=adminui \
    ADMIN_UI_GROUP=adminui

ARG uid=8888
ARG gid=8888
RUN groupadd -g ${gid} ${ADMIN_UI_GROUP} \
    && useradd -u ${uid} -g {gid} -m -s /bin/bash ${ADMIN_UI_USER}
COPY . .
RUN npm install
EXPOSE 3000
USER $ADMIN_UI_USER
CMD ["npm","start"]