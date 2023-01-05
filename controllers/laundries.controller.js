const LaundryService = require("../services/laundries.services");

class LaundriesController {
  LaundryService = new LaundryService();
  //손님
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
  createLaundry = async(req, res, next) => {
    const {userId} = res.local.user
    // 로그인 방식에 따라 달라질 수 있음
    const {category,content,status,imageUrl} = req.body
    try {
      const createLaundryData = await this.LaundryService.createLaundries(category,content,status,imageUrl,userId)
      res.json({data : createLaundryData})
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
    const {userId} = res.local.user
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
    // let status = ""
    const {status} = req.body
    try{
      // const laundryStatus = await this.LaundryService.findLaundryById(laundryId)
      // if(laundryStatus==="대기 중"){
      //   status = "수거 중"
      // }
      // if(laundryStatus==="수거 중"){
      //   status = "수거 완료"
      // }
      // if(laundryStatus==="수거 완료"){
      //   status = "배송 중"
      // }
      // if(laundryStatus==="배송 중"){
      //   status = "배송 완료"
      // }
      const laundry = await this.LaundryService.updateLaundryStatus(laundryId,status)
      res.json({data:laundry})
    }catch(error){
      res.status(401).send({errorMessage:error})
    }
  }
}

module.exports = LaundriesController;