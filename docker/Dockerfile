FROM node:22-alpine AS builder
WORKDIR /app
RUN apk update && apk add xdg-utils
COPY package.json yarn.lock ./
RUN yarn install --immutable

COPY index.html nodeTask.js nodeTask_zip.js nodeTask_sftp.js nodeTask_edm.js viteTask_spritesPNG.js viteTask_spritesSVG_guide.js tailwind.config.js ./
EXPOSE 5173

CMD ["yarn", "dev", "--host", "0.0.0.0"]

