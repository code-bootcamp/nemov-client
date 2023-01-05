FROM node:14-alpine

COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install --network-timeout 1000000

COPY . /myfolder/
RUN yarn build

CMD yarn start