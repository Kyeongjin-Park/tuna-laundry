const UserService = require('../services/users.service');
const jwt = require("jsonwebtoken");
const { User } = require('../models');



// Post의 컨트롤러(Controller)역할을 하는 클래스
class UsersController {
  UserService = new UserService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  createUser = async (req, res, next) => {
    const { nickname, password, confirmPassword, phone, address, status, point } = req.body;

    if (password !== confirmPassword) {
        res.status(400).send({
          errorMessage: "패스워드가 패스워드 확인란과 동일하지 않습니다.",
        });
        return;
      }
    
      const allUser = await this.UserService.findAllUser(nickname);
      if (allUser.length) {
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
    const { nickname, password } = req.body;
    const oneUser = await this.UserService.findOneUser(nickname, password);

    if (password !== oneUser.password ) {
      res.status(400).send({
        errorMessage: "닉네임 또는 패스워드가 잘못됐습니다.",
      });
      return;
    }

    res.status(200).json({ data: oneUser })

    const token = jwt.sign({ userId: oneUser.id }, "customized-secret-key");
    console.log(token);
    res.send({
        token,
    });

  }
  myInfo = async(req,res,next)=>{
    const { userId } = res.locals.body
    try{
      const userInfo = await this.UserService.findMyInfo(userId)
      res.json({data:userInfo})
    }catch(error){
      res.status(401).send({errorMessage:error})
    }
  }
  myNickName = async(req,res,next) => {
    const { userId } = req.body
    try{
      const mynickname = await this.UserService.myNickName(userId)
      res.json({data:mynickname})
    }catch(error){
      res.status(401).send({errorMessage:error})
    }
  }
  
  updatePoint = async (req, res, next) => {
    const { userId } = res.locals.body
    const { point } = req.body
    try{
      await this.UserService.updatePoint(userId, point)
      res.json({message:"포인트가 변경되었습니다."})
    }catch(error){
      res.status(401).send({errorMessage:error})
    }
    
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
