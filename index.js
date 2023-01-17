const express = require("express");
const path = require("path");
const app = express();

// routing
app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.set("view engine", "ejs"); // 템플릿엔진으로 ejs를 쓰겠다
app.set("views", path.join(__dirname, "views")); // views 폴더에 다 있다

app.get("/login", (req, res) => {
  //res.sendFile(path.join(__dirname, "./html/login.html"));
  res.render("login", { title: "login" });
});

app.get("/board", (req, res) => {
  //res.sendFile(path.join(__dirname, "./html/board.html"));
});

app.get("/join", (req, res) => {
  res.render("join", { title: "join", mainTitle: "회원가입하세요" });
});

app.get("/loginok", (req, res) => {
  const id = req.query.userId;
  const pw = req.query.userPwd;
  const gender = req.query.gender;
  if (gender === "male") {
    _gender = "남자";
  } else {
    _gender = "여자";
  }
  if (id === "yoneeki" && pw === "1234") {
    res.send(` ${_gender} <h1>yonee 님</h1> <h3>반갑습니다!</h3>`);
  } else {
    res.send(`<h3>아이디 및 패스워드 확인 요망</h3>`);
  }
});
