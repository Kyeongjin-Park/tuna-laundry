const UserService = require('../services/users.service');
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middlewares/auth-middleware");

// Post의 컨트롤러(Controller)역할을 하는 클래스
class UsersController {
  UserService = new UserService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  createUsers = async (req, res, next) => {
    const { nickname, password, confirmPassword, phone, address } = req.body;

    if (password !== confirmPassword) {
        res.status(400).send({
          errorMessage: "패스워드가 패스워드 확인란과 동일하지 않습니다.",
        });
        return;
      }
    
      const existUsers = await User.findAll({
        where: {
          nickname
        },
      });
      if (existUsers.length) {
        res.status(400).send({
          errorMessage: "이미 가입된 닉네임이 있습니다.",
        });
        return;
      }

    // 서비스 계층에 구현된 createPost 로직을 실행합니다.
    const createUserData = await this.userService.createUser(nickname, password, confirmPassword, phone, address);

    res.status(201).json({ data: createUserData });
  }

  authUsers = async (req, res, next) => {
    const { nickname, password } = req.body;

    const user = await user.findOne({ where: { nickname, password } });

  if (!user || password !== user.password) {
    res.status(400).send({
      errorMessage: "닉네임 또는 패스워드가 잘못됐습니다.",
    });
    return;
  }

  const token = jwt.sign({ userId: user.userId }, "customized-secret-key");
  res.send({
    token,
  });

    res.status(200).json({ data: user })
  }

  postUsers = async (req, res, next) => {
    
  }

  updateUsers = async (req, res, next) => {
    
    
  }
}

module.exports = UsersController;
