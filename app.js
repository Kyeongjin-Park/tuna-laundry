// 패키지 불러오기
const express = require("express");
const app = express();

// router불러오기
const laundryRouter = require("./routes/laundries.routes");

// .env 사용
// config() 설정이나 프로그램의 실행 일부 등을 저장해둔 파일.
require("dotenv").config();

// Express.js에서 JSON Request Body 파싱하기
// JSON으로 이루어진 Request Body를 받았을 경우, 요청값을 제대로 받기 위해 사용
app.use(express.json());


// 페이지 실행 확인
app.get("/", (req, res) => {
  res.send("Welcome to tuna-laundry!");
});

// laundry 페이지 이동
app.use("/", [laundryRouter]);



// 서버 실행
app.listen(process.env.PORT, () => {
  console.log(`http://127.0.0.1:${process.env.PORT}`);
});
