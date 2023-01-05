const UserService = require('../services/users.service');
const jwt = require("jsonwebtoken");
const { User } = require('../models');


// Post의 컨트롤러(Controller)역할을 하는 클래스
class UsersController {
  UserService = new UserService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  createUser = async (req, res, next) => {
    const { nickname, password, confirmPassword, phone, address, status, point } = req.body;
    console.log(nickname,password, confirmPassword, phone, address, status, point)
    if (password !== confirmPassword) {
        res.status(400).send({
          errorMessage: "패스워드가 패스워드 확인란과 동일하지 않습니다.",
        });
        return;
      }
    
      const existUsers = await this.UserService.findAllUser();
      
      if (existUsers) {
        res.status(400).send({
          errorMessage: "이미 가입된 닉네임이 있습니다.",
        });
        return;
      }
    
    // 서비스 계층에 구현된 createPost 로직을 실행합니다.
    const createUserData = await this.UserService.createUser(nickname, password, phone, address, status, point);

    res.status(201).json({ data: createUserData });
  }

  authUser = async (req, res, next) => {
    const { nickname, password, status } = req.body;

    const user = await this.UserService.findOneUser();

  if (!user || password !== user.password || status !== 0) {
    res.status(400).send({
      errorMessage: "닉네임 또는 패스워드가 잘못됐습니다.",
    });
    return;
  }

    const token = jwt.sign({ userId: user.userId }, "customized-secret-key");
    console.log(token);
    res.send({
        token,
    });

    res.status(200).json({ data: user })
  }

  postUser = async (req, res, next) => {
    
  }

  updateUser = async (req, res, next) => {
    const { user } = res.locals;
    res.send({
        user,
    });

    const { phone, address } = req.body;

    const updateUserData = await this.UserService.updateUser( phone, address );

    res.status(201).json({ data: updateUserData });
  }
}

module.exports = UsersController;
