const UserService = require('../services/users.service');
const jwt = require("jsonwebtoken");

// Post의 컨트롤러(Controller)역할을 하는 클래스
class UserController {
  userService = new UserService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.
  
  usersMe = async (req,res,next)=>{
    const { user } = res.locals.user
    res.send({user:user})
  }
  createUser = async (req, res, next) => {
    const { nickname, password, confirmPassword, phone, address, status, point } = req.body;

    if (password !== confirmPassword) {
        res.status(400).send({
          errorMessage: "패스워드가 패스워드 확인란과 동일하지 않습니다.",
        });
        return;
      }
    
      const allUser = await this.userService.findAllUser(nickname);
      if (allUser.length) {
        res.status(400).send({
          errorMessage: "이미 가입된 닉네임이 있습니다.",
        });
        return;
      }

    // 서비스 계층에 구현된 createPost 로직을 실행합니다.
    const createUserData = await this.userService.createUser(nickname, password, phone, address, status, point);

    res.status(201).json({ data: createUserData });
  }

  authUser = async (req, res, next) => {
    const { nickname, password } = req.body;
    try{
      const user = await this.userService.findOneUser(nickname,password);
      const token = jwt.sign({ id : user.id },"secretKey")
      res.send({token})
    }catch(error){
      res.status(400).send({
        errorMessage: "이메일 또는 패스워드가 틀렸습니다."
      });
    }
  }
  myInfo = async(req,res,next)=>{
    const { userId } = res.locals.user
    try{
      const userInfo = await this.userService.findMyInfo(userId)
      res.json({data:userInfo})
    }catch(error){
      res.status(401).send({errorMessage:error})
    }
  }
  myNickName = async(req,res,next) => {
    const { userId } = req.body
    try{
      const mynickname = await this.userService.myNickName(userId)
      res.json({data:mynickname})
    }catch(error){
      res.status(401).send({errorMessage:error})
    }
  }
  
  updatePoint = async (req, res, next) => {
    const { userId } = res.locals.body
    const { point } = req.body
    try{
      await this.userService.updatePoint(userId, point)
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

    const updateUserData = await this.userService.updateUser( phone, address );

    res.status(201).json({ data: updateUserData });
  }
}

module.exports = UserController;
