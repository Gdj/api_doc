# Docker 이미지 실행

## 준비물
- Docker Desktop 설치 필요
- 다운로드: https://www.docker.com/products/docker-desktop

## 실행 방법
- 도커파일 로드 :    
	`docker load -i my-vite-app.tar`
- 도커파일 데브모드 : (로컬주소 : 컨테이너 주소)   
	`docker run -it -p 8080:8088 -v ./src:/app/src -v ./html:/app/html -v ./guide:/app/guide -v ./public:/app/public my-vite-app`
- 도커파일 빌드 :  
	`docker run -it -v ./dist:/app/dist my-vite-app yarn build`