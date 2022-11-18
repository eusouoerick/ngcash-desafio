FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.* ./

RUN npm install

COPY . .

EXPOSE 5000

RUN npx prisma migrate

RUN npm run build
CMD [  "npm", "run", "start:migrate:prod" ]