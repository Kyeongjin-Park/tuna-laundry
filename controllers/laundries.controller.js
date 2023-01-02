const LaundryService = require("../services/laundries.services");


// Laundry의 컨트롤러 역할을 하는 클래스
class LaundriesController {
  LaundryService = new LaundryService(); // Laundry 서비스 클래스를 컨트롤러 클래스의 멤버 변수로 할당.

  getLaundries = async(req, res, next) => {
    try {
      
    } catch (error) {
      res.status(401).send({errorMessage:error})
    }
  }

  postLaundries = async(req, res, next) => {
    try {
      
    } catch (error) {
      res.status(401).send({errorMessage:error})
    }
  }

  updateLaundries = async(req, res, next) => {
    try {
      
    } catch (error) {
      res.status(401).send({errorMessage:error})
    }
  }

  deleteLaundries = async(req, res, next) => {
    try {
      
    } catch (error) {
      res.status(401).send({errorMessage:error})
    }
  }
}


module.exports = LaundriesController;