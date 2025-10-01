# Node.js v22 with docker 


## 사전 작업
- 도커 세팅 : https://www.youtube.com/watch?v=LXJhA3VWXFA
- 사전 세팅 : https://www.youtube.com/watch?v=rATNU0Fr8zs&t=676s
- 도커데스크탑설치, 터미널, ubuntu 설치
  1. docker 설치 : [docker download](https://docs.docker.com/desktop/setup/install/windows-install/)
  2. window : Ubuntu 설치 
  3. window : window terminal 설치  => Ubuntu를 윈도우 터미널에서 텝으로 추가할수 있다.
	4. docker.desktop : Settings => Resources => WSL integration => Ubuntu 활성화 후 리스타트
	  우분트에서 도커명령어를 사용할 수 있다.
	5. Ubuntu : `docker version`
  
## 프로 젝트 생성
- `npm install express` or `yarn add express`
	``` js
		// index.js
		const express = require('express')
		const app = express()
		app.use(express.json())
		const port = 3000

		app.get('/', (req, res) => {
			res.send('Hello World!')
		})

		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`)
		})
	```
	- 실행 : `node index`

## 도커 파일 생성
  - Dockerfile
	+ FROM : node 22버젼의 `-alpine`최소단위의 리눅스버젼, `AS builder`빌드 스테이지 이름 지정 
	+ WORKDIR : 실행될위치 	
	+ COPY : 현디렉토리에서 실행될 디렉토리로 복사될 파일 
	+ RUN : 설치 `npm ci` or `yarn install --immutable`
	+ COPY : `index.js .` 소스파일 카피해서
	+ 실행 명령 [ENTRYPOINT] : node 를 통해 index.js 실행해
	``` dockerfile
		FROM node:22-alpine AS builder
		WORKDIR /app
		COPY package.json yarn.lock ./
		RUN yarn install --immutable
		CMD ["node", "index"]
	```
	- 토커파일 이미지 생성
		`-f` 어떤 도커파일 명시   
		`-t` 도커이미지 이름   
		`docker build -f Dockerfile -t fun-docker .`
	- 토커 이미지 확인   
	 	`docker images`
	- 토커 이미지 실행    
	  `-d` (stands for detached) 백그라운드에서 실행하고 끝날때까지 기다리지 말고 다음일 처리   
		`-p` (is port publishing) 로컬 호스트 포트(8080)와 컨테이너 포트(8080)연결   
		`docker run -d -p 8080:8080 fun-docker`
	- 실행준인 도커 컨테인 리스트   
	  `docker ps`
	- 실행중인 컨테이터 확인   
	  `docker logs 도커아이디`

## 도커 백업 이미지 사용법
- 공유을 위한 도커 이미지 백업   
	`docker save fun-docker:latest -o fun-docker.tar`
- 백업 도커 파일 로드하여 시스템 이미지 저장소로 보내기    
	`docker load -i fun-docker.tar`



  
## nodejs with docker
- https://nodejs.org/ko/download
- 도커 설치 확인 : `docker --version`
- 도커 에 nodejs 설치(node:22)
``` bash
	# Docker는 각 운영 체제별로 설치 지침을 제공합니다.
	# 공식 문서는 https://docker.com/get-started/에서 확인하세요.
	# Node.js Docker 이미지를 풀(Pull)하세요:
	docker pull node:22-alpine
	# Node.js 컨테이너를 생성하고 쉘 세션을 시작하세요:
	docker run -it --rm --entrypoint sh node:22-alpine
	# Verify the Node.js version:
	node -v # Should print "v22.20.0".
	# Yarn 다운로드 및 설치:
	corepack enable yarn
	# Yarn 버전 확인:
	yarn -v
```
