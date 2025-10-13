# Docker 이미지 실행

## 준비물
- Docker Desktop 설치 필요
- 다운로드: https://www.docker.com/products/docker-desktop
- 도커 버젼확인 : `docker version`

## 도커만들기
- 도커 이미지생성 :   
	``` bash
		docker build -t tr_vitesetting-node22_vite5 .
	```
- 도커 압축 :   
	``` bash
		docker save -o tr_vitesetting-node22_vite5.tar tr_vitesetting-node22_vite5
	```

## 도커실행하기
- 도커파일 로드 :    
	``` bash
		docker load -i tr_vitesetting-node22_vite5.tar
	```
- 도커파일 데브모드 : (로컬주소 : 컨테이너 주소)   
	``` bash
		docker run -it -p 5173:5173 -v ./vite.config.js:/app/vite.config.js -v ./project.config.json:/app/project.config.json -v ./src:/app/src -v ./html:/app/html -v ./guide:/app/guide -v ./public:/app/public tr_vitesetting-node22_vite5
	```
- 도커파일 빌드 : 선택적빌드, 전체빌드
	``` bash
		docker run -it -v ./vite.config.js:/app/vite.config.js -v ./project.config.json:/app/project.config.json -v ./src:/app/src -v ./html:/app/html -v ./guide:/app/guide -v ./public:/app/public -v ./dist:/app/dist tr_vitesetting-node22_vite5 yarn build
	```
	``` bash
	# 현재 모든 파일
		docker run -it -v .:/app tr_vitesetting-node22_vite5 yarn build
	```

## 도커커 상태보기
	+ 토커 이미지 확인 : `docker images`   
	+ 실행준인 도커 컨테인 리스트 : `docker ps`
	+ 종료된 도커 컨테이너 리스트 : `docker ps -a`
	+ 중지된 도커 컨테이너 삭제 : `docker container prune`
	

## 도커 삭제하기 
- 사용중지 
	``` bash
		docker stop tr_vitesetting-node22_vite5
	```
- 도커 컨테이너, 이미지 삭제 
	`-f` 삭제 강제 옵션 (이미지 이름 앞에 넣어도 컨테이너는 삭제되지 않음) 
	컨테이너 삭제, 이미지 삭제
	+ `rm` 도커 컨테이너 삭제
	``` bash
		docker rm  [컨테이너아이디]
	```
	+ `rmi` 도커 이미지 삭제
	``` bash
		docker rmi  tr_vitesetting-node22_vite5
	```
	+ 중지된 도커 컨테이너 모두삭제  
	``` bash
		docker container prune
	```
