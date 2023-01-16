const express = require("express");
const app = express();

// routing
app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/login", (req, res) => {
  res.send(`<form action="/loginOk" method="get">
  아이디 : <input type="text" name="userId" /> <br />
  비밀번호 : <input type="password" name="userPwd" />
  <input type="submit" value="login" />
</form>`);
});

app.get("/loginok", (req, res) => {
  const id = req.query.userId;
  const pw = req.query.userPwd;
  if (id === "yoneeki" && pw === "1234") {
    res.send("<h1>yonee 님</h1> <h3>반갑습니다!</h3>");
  } else {
    res.send("<h3>아이디 및 패스워드 확인 요망</h3>");
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
