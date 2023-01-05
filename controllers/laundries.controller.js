const LaundryService = require("../services/laundries.services");

class LaundriesController {
  LaundryService = new LaundryService();
  //손님
  getLaundries = async(req, res, next) => {
    // const {userId} = res.locals.user
    const {userId} = req.params
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
  createLaundry = async(req, res, next) => {
    const {userId} = res.locals.user
    // 로그인 방식에 따라 달라질 수 있음
    const {category,content,status,imageUrl} = req.body
    try {
      await this.LaundryService.createLaundries(category,content,status,imageUrl,userId)
      res.status(201).json({message:"세탁물 등록 성공"})
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

  getAbleReview = async(req,res,next)=>{
    const {userId} = res.locals.user
    const status = "배송 완료"
    try {
      const laundries = await this.LaundryService.findAllLaundry(userId,status)
      res.json({data:laundries})
    } catch (error) {
      res.status(401).send({errorMessage:error})
    }
  }

  //사장님
  getWaitingLaundries = async(req,res,next) => {
    const status = "대기 중"
    try{
      const laundry = await this.LaundryService.findWaitingLaundry(status)
      res.json({data:laundry})
    }catch(error){
      res.status(401).send({errorMessage:error})
    }
  }
  getWaitingLaundryById = async(req,res,next) => {
    const {laundryId} = req.params
    try{
      const laundry = await this.LaundryService.findLaundryById(laundryId)
      res.json({data:laundry})
    }catch(error){
      res.status(401).send({errorMessage:error})
    }
  }
  updateLaundryStatus = async(req,res,next)=>{
    const {laundryId} = req.params
    const {status} = req.body
    try{
      const laundry = await this.LaundryService.updateLaundryStatus(laundryId,status)
      res.json({data:laundry})
    }catch(error){
      res.status(401).send({errorMessage:error})
    }
  }
}

module.exports = LaundriesController;