const UserService = require('../services/hostReviewService');
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middlewares/auth-middleware");

// Post의 컨트롤러(Controller)역할을 하는 클래스
class HostReviewController {
  HostReviewService= new HostReviewService(); // Post 서비스를 클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  getHost = async (req, res, next) => {
    
    const {userId} = res.local.user
    try{
      const user = await this.HostReviewService.findUser(userId)
      res.json({data:user})
    }catch(error){
      res.status(401).send({errorMessage:error})
    }
  }

  getLaundryById = async (req, res, next) => {
    const { laundryId } = req.params
    //프론트에서 getLaundries한 것들을 clickable하게 해놓은 후 onclick = "somekindsoffunction(laundryId)" 라고하고 보내주면 params로 받을 수 있겠다.
    try {
      const laundry = await this.HostReviewService.findLaundryById(laundryId)
      res.json({data:laundry})
    } catch (error) {
      res.status(401).send({errorMessage:error})
    }

    res.status(200).json({ data: user })
  }
}

module.exports = HostReviewController;
