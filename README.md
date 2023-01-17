# node

- 브라우저 벗어나서 js 실행 가능

# node express 사용방법 1

1. npm init
2. npm install express
3. index.js 파일 생성 (entry point)
   // package.json에서 수정 가능
4. node index.js OR node index : 서버 구동
   // 127.0.0.0/~

# node express 사용방법 2

- 1,2,3 위와 동일
- 대신 4 : nodemon index

# ejs 사용방법

- 노드의 템플릿엔진 : ejs
- npm install ejs
- 보여줄 html 파일이 있는 폴더명을 views로 변경
- 내부의 html 파일들 확장자명 .ejs로 변경
- index.js 파일에 추가
  app.set("view engine", "ejs"); // 템플릿엔진으로 ejs를 쓰겠다
  app.set("views", path.join(\_\_dirname, "views")); // views 폴더에 다 있다
- 제이슨 형태로 자료를 보낼 수 있음 : <%= %> 이용해 html 내부에서 표현
