#  nodejs 를 Docker 이미지 로 공유 가이드 (Vite 프로젝트)

## 1. package.json 의존성 이미지 공유

프로젝트 폴더에 **2개 파일** 추가: `Dockerfile`, `.dockerignore`

### 1) `Dockerfile` (최소 버전)
  - FROM : `node:22`node 22버젼의 `-alpine`(최소단위의 리눅스버젼), `AS builder` 빌드 스테이지 이름 지정 Docker의 멀티스테이지 빌드에서 사용됨
  - WORKDIR : 명령이 실행될위치
  - RUN : 이미지 생성 명령 
    설치 `npm ci` or `yarn install --immutable`
  - COPY : 현디렉토리에서 실행될 디렉토리로 복사될 파일  
    `COPY package.json yarn.lock ./` 두개의 파일을 `./`현재 디렉토리 `WORKIDR` 정의된 경로로 복사됨.
    `COPY . .` .dockerignore` 파일에 명시된것을 제외하고 이미지 만듬
  - 실행 명령 
    + ENTRYPOINT : 고정실행 후 옵션인자값 적용
      `ENTRYPOINT ["yarn", "dev"]`
      ``` bash
      docker run my-vite-app                    # → yarn dev 실행
      docker run my-vite-app **--port 3000**    # → yarn dev 실행 후 --port 3000는 인자로 전달되어 `yarn dev --port 3000` 실행됨
      ``` 
      - 실행1 : `docker run [이미지 이름]`로 `yarn dev`실행
      - 실행2 : `docker run [이미지 이름] [다른명령]`은 `yarn dev`후 옵션으로 실행

    + CMD : 기본명령 실행 or 다른 명령어실행
      `CMD ["yarn", "dev"]`
      ``` bash
      docker run my-vite-app              # → yarn dev 실행
      docker run my-vite-app yarn build   # → CMD 무시, yarn build 실행
      ```
      - 실행1 : `docker run [이미지 이름]`로 `yarn dev`실행
      - 실행2 : `docker run [이미지 이름] [다른명령]`은 `yarn dev`무시 다른명령어 실행
<details>
  <summary>dockerfile [보기/닫기]</summary>

  ```dockerfile
  # ===== 빌드 단계 =====
  # Node.js 이미지를 사용하여 Vite 앱을 빌드합니다
  FROM node:22-alpine AS builder

  # 작업 디렉토리 설정
  WORKDIR /app

  # 컨테이너에 xdg-open 사용을위한  xdg-utils 패키지설치
  # RUN apk update && apk add xdg-utils

  # 의존성이 변경되지 않으면 이 레이어는 캐시되어 빌드 속도가 빨라집니다
  # npm 설치시 : package.json과 package-lock.json을 먼저 복사 => `COPY package*.json ./`
  # yarn 설치시 : package.json과 yarn.lock를 보사 => `COPY package.json yarn.lock ./`
  # 모든 소스 코드 : .dockerignore 파일에 명시되지 안흔 몬든 소스크도 `COPY . .`  
  COPY package.json yarn.lock ./

  # 의존성 설치 
  # npm 사용시 : `RUN npm ci`
  # yarn 사용시 : `RUN yarn install --immutable`
  RUN yarn install --immutable

  # 소스 코드 복사
  # COPY . .

  # 개발용 (yarn dev)
  CMD ["yarn", "dev"]


  # 빌드용 (yarn build 후 실행하고 싶다면)
  # RUN yarn build
  # CMD ["yarn", "preview"]
  ```
</details>

### 2) `.dockerignore`
-  `COPY . .` 있을때 예외 파일 등록
```
node_modules
dist
.git
```
or
- 반대로 포함할 파일만 선택 방법.
  + `*` 현재 디렉터리(. 또는 소스 경로)의 모든 파일과 폴더를 무시합니다.
  + `!Dockerfile` Dockerfile 파일은 포함합니다.
  + `!!package.json	package.json` package.json	package.json 파일은 포함합니다.
```
*	
!Dockerfile	
!package.json	package.json 파일은 포함합니다.
```

## 2. 실행 단계

**이미지 만드는 사람:**
```bash
# 1. 이미지 빌드 (. 현제 프로젝트의 `package.json yarn.lock ./` 내용을 이미지로 만듬)
# 	`-f` 어떤 도커파일 명시 (생약가능)
#		`-t` 도커이미지 이름   
docker build -f Dockerfile -t my-vite-app .
docker build -t my-vite-app .

# 2. tar 파일로 저장 (my-vite-app 도커이미지를 my-vite-app.tar로 저장)
# :latest (생약가능)내부적으로 :latest 로인식함
docker save -o my-vite-app.tar my-vite-app:latest 
docker save -o my-vite-app.tar my-vite-app

# 3. 파일 공유 (Google Drive, USB 등)
```

**팀원:**
```bash
# 1. 이미지 로드
docker load -i my-vite-app.tar

# 2. 실행 (둘중 하나 실행) -it 옵션 권장 (소스코드가 컨테니어 안에 있을때)  
# - `-d` : (stands for detached) 웹 서비스처럼 컨테이너를 백그라운드에서 실행하고, 
#   즉시 터미널 제어권을 돌려받고 싶을 때 사용합니다.
# - `-it` : (interactive tty)컨테이너 안에서 터미널을 직접 다룰 수 있게 됨. 
#   개발/디버깅을 위해 컨테이너를 포그라운드에서 실행하고, 컨테이너의 출력(로그)을 즉시 보고 싶을 때 사용합니다.
# - `-p` (is port publishing) 로컬 호스트 포트(8080)와 컨테이너 포트(8080)연결   
# - `-v` (volume) 컨테이너과 공유될 파일 or 홀더, 같은 이름의 파일일때 로컬우선 적용됨 [로컬주소:컨테이너주소]
docker run -d -p 8080:8088 my-vite-app
docker run -it -p 8080:8088 my-vite-app

# 3.  소스 코드 수정이 필요할 경우 → 호스트 폴더를 마운트 (둘중 하나 실행)
# - `./src` 로컬홀더 : `/app/src`도커 의 홀더를 의미함 [./ == $(pwd)]
# - 도커 이미지에는 없지만 로컬에 있는 홀더를 도커 컨테이너에 주입하여 실행하는 명령
docker run -d  -p 8080:8088 -v ./src:/app/src -v ./html:/app/html -v ./guide:/app/guide -v ./public:/app/public my-vite-app
docker run -it -p 8080:8088 -v ./src:/app/src -v ./html:/app/html -v ./guide:/app/guide -v ./public:/app/public my-vite-app

# 4. 빌드 실행 (둘중 하나 실행)
# - 컨테이너에서 빌드된 결과물이 로컬 ./dist 폴더에 그대로 저장됩니다.
docker run -d  -v ./dist:/app/dist my-vite-app yarn build
docker run -it -v ./dist:/app/dist my-vite-app yarn build
```

---


## 🎁 팀원에게 전달할 파일 패키지

### 패키지 구성
```
배포파일/
├── my-vite-app.tar           ← Docker 이미지
├── docker_run.md             ← 사용 설명서
└── run.sh (또는 run.bat)      ← 실행 스크립트 (선택)
```

### docker_run.md 내용 (팀원용)
```markdown
  # Docker 이미지 실행

  ## 준비물
  - Docker Desktop 설치 필요
  - 다운로드: https://www.docker.com/products/docker-desktop
  - 도커 버젼확인 : `docker version`

  ## 실행 방법
  - 도커파일 로드 : 
    `docker load -i my-vite-app.tar`
  - 도커파일 데브모드 : (로컬주소 : 컨테이너 주소)
    `docker run -it -p 5173:5173 -v ./src:/app/src -v ./public:/app/public -v ./guide:/app/guide -v ./html:/app/html  my-vite-app`
  - 도커파일 빌드 :  
    `docker run -it -v ./dist:/app/dist my-vite-app yarn build`

```

## 접속
브라우저에서 http://localhost:5173 으로 접속

---

## 컨테이너 관리

### 중지
```bash
docker stop vite-app
```

### 재시작
```bash
docker start vite-app
```

### 완전 삭제
- 도커중지후 삭제 도커이름 or id   
- 이미지 기반으로 컨테이너가 돌아감
- `rm` 컨테이너 만삭제 삭제
- `rmi` 이미지 과 컨테이너 삭제
- `-f` 강제삭제
```bash
docker stop vite-app
docker rm vite-app
```
``` bash
docker stop vite-app
docker rmi vite-app
```

### 로그 확인
```bash
docker logs vite-app
```

### 이미지 & 컨테이너 확인
```bash
# 이미지 확인
docker images

# 실행중인 컨테이너 확인
docker ps

# 종료된 컨테이너 확인
docker ps -a

# 중지된 도커 컨테이너 모두삭제  
docker container prune
```


## 문제 해결

### 포트가 이미 사용 중인 경우
- 컨테이너 안에서 80번 포트로 열려 있는 앱을 호스트 PC 3000번 포트로 접속 가능하게 만들고, 
  my-vite-app도커 이미지를 vite-app이라는 이름으로 실행.
```bash
docker run -it -p 3000:80 --name vite-app my-vite-app
```
그리고 http://localhost:3000 으로 접속



---

## 💡 추가 팁

### 1. 이미지 크기 줄이기

압축하여 전송 시간 단축:

```bash
# gzip 압축
gzip my-vite-app.tar
# 결과: my-vite-app.tar.gz (30-50% 작아짐)

# 팀원이 사용할 때
gunzip my-vite-app.tar.gz
docker load -i my-vite-app.tar
```

### 2. 버전 관리

파일명에 버전과 날짜 포함:

```bash
docker build -t my-vite-app:1.0.0 .
docker save -o my-vite-app-v1.0.0-20250930.tar my-vite-app:1.0.0
```

### 3. 여러 포트로 실행

```bash
# 8080 포트
docker run -it -p 8080:80 --name vite-app-8080 my-vite-app

# 3000 포트
docker run -it -p 3000:80 --name vite-app-3000 my-vite-app

# 여러 인스턴스 동시 실행 가능!
```

### 4. 개발 모드로 실행하고 싶다면

개발 중에는 코드 변경이 즉시 반영되는 개발 모드가 필요할 수 있습니다.

**Dockerfile.dev 추가:**
```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
```

**실행:**
```bash
docker build -f Dockerfile.dev -t my-vite-app:dev .
docker save -o my-vite-app-dev.tar my-vite-app:dev

# 팀원이 개발 모드로 실행
docker load -i my-vite-app-dev.tar
docker run -d -p 5173:5173 -v $(pwd)/src:/app/src my-vite-app:dev
```

---

## 📝 체크리스트

### 개발자 체크리스트

- [ ] Dockerfile 작성 완료
- [ ] .dockerignore 작성 완료
- [ ] 이미지 빌드 성공
- [ ] 로컬에서 테스트 완료
- [ ] tar 파일 생성 완료
- [ ] run.sh/run.bat 스크립트 작성
- [ ] README.md 작성 완료
- [ ] 파일 패키지 전달 완료

### 팀원 체크리스트

- [ ] Docker Desktop 설치 완료
- [ ] tar 파일 다운로드 완료
- [ ] 이미지 로드 성공
- [ ] 컨테이너 실행 성공
- [ ] 브라우저에서 접속 확인
- [ ] 기능 테스트 완료

---

## 결론

이 가이드를 따라하면:

✅ **개발자는** 단 2개 파일(Dockerfile, .dockerignore)만 추가  
✅ **팀원은** 가드에 따라 실행
✅ **모두가** 동일한 환경에서 작업  
✅ **문제 없이** 프로젝트 공유 완료!

**핵심:** Docker Hub 없이도 tar 파일로 간편하게 공유할 수 있습니다! 🚀