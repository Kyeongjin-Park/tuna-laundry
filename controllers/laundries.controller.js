const LaundryService = require("../services/laundries.services");


// Laundry의 컨트롤러 역할을 하는 클래스
class LaundriesController {
  LaundryService = new LaundryService(); // Laundry 서비스 클래스를 컨트롤러 클래스의 멤버 변수로 할당.
  getUser = async(req,res,next) => {
    const {userId} = res.local.user
    try{
      const user = await this.LaundryService.findUser(userId)
      res.json({data:user})
    }catch(error){
      res.status(401).send({errorMessage:error})
    }
  }
  getLaundries = async(req, res, next) => {
    const {userId} = res.local.user
    try {
      const laundries = await this.LaundryService.findAllLaundry(userId)
      res.json({data:laundries})
    } catch (error) {
      res.status(401).send({errorMessage:error})
    }
  }
  getLaundryById = async(req, res, next) => {
    const { laundryId } = req.params
    //프론트에서 getLaundries한 것들을 clickable하게 해놓은 후 onclick = "somekindsoffunction(laundryId)" 라고하고 보내주면 params로 받을 수 있겠다.
    try {
      const laundry = await this.LaundryService.findLaundryById(laundryId)
      res.json({data:laundry})
    } catch (error) {
      res.status(401).send({errorMessage:error})
    }
  }
  getadminLaundryById
  postLaundry = async(req, res, next) => {
    const {userId} = res.local.user
    //로그인 방식에 따라 달라질 수 있음
    const {category,content,status,imageUrl} = req.body
    try {
      const postLaundryData = await this.LaundryService.postLaundries(category,content,status,imageUrl,userId)
      res.json({data : postLaundryData})
    } catch (error) {
      res.status(401).send({errorMessage:error})
    }
  }

  updateLaundry = async(req, res, next) => {
    const {laundryId} = req.params
    const {category,content,imageUrl} = req.body
    try {
      const updateLaundryData = await this.LaundryService.updateLaundry(laundryId,category,content,imageUrl)
      res.json({data : updateLaundryData})
    } catch (error) {
      res.status(401).send({errorMessage:error})
    }
  }

  deleteLaundries = async(req, res, next) => {
    const {laundryId} = req.params
    try {
      const deleteLaundryData = await this.LaundryService.deleteLaundries(laundryId)
      res.json({data : deleteLaundryData})
    } catch (error) {
      res.status(401).send({errorMessage:error})
    }
  }
}

module.exports = LaundriesController;