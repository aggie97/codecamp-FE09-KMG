# FROM ubuntu:22.04

# RUN curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash
# RUN sudo apt install -y nodejs
# RUN sudo npm install -g yarn

FROM node:14

COPY ./package.json /class_build/
COPY ./yarn.lock /class_build/
WORKDIR /class_build/
RUN yarn install

# RUN mkdir class_build => 아래에서 COPY할 때 폴더가 없으면 자동으로 만들어주므로 굳이 안 써도 됨.
COPY . /class_build/

RUN yarn build
# RUN yarn start
# 위와 아래의 차이 : 아래는 보통 마지막에 한 번 쓴다.
CMD yarn start

# 이 파일이 실행될 때 도커는 다음 실행을 위해 매 라인을 캐시에 저장해놓는다.
# 다음 실행 때 캐시에 없는 라인을 만나면 그 라인부터 끝까지 전부 캐시를 가지 않고 재시작한다.
# 하지만 yarn install 같은 경우 시간이 오래 걸리는 작업이기 때문에 yarn install 라인을 위로 올려서 