const LaundryBasketService = require("../services/laundrybaskets.services");

class LaundryBasketsController {
  LaundryBasketService = new LaundryBasketService();

  getLaundryBasket = async(req,res,next) => {
    const {userId} = res.locals.user
    try{
      const laundry = await this.LaundryBasketService.findMyLaundryBasket(userId)
      res.json({data:laundry})
    }catch(error){
      res.status(401).send({errorMessage:error})
    }
  }
  getMyLaundryBasket = async(req,res,next) =>{
    const {userId} = res.locals.user
    try{
        const user = await this.LaundryBasketService.findMylaundryBasket(userId)
        res.json({data:user})
    }catch(error){
        res.status(401).send({errorMessage:error})
    }
  }

  createLaundryBasket = async(req,res,next)=>{
    const {userId} = res.locals.user
    const {laundryId} = req.body
    try{
        const createLaundryBasketData = await this.LaundryBasketService.createLaundryBakset(userId,laundryId)
        res.json({data:createLaundryBasketData})
    }catch(error){
        res.status(401).send({errorMessage:error})
    }
  }

  deleteLaundryBasket = async(req,res,next)=>{
    const {laundryId} = req.params
    try {
        const deleteLaundryBasketData = await this.LaundryBasketService.deleteLaundryBasket(laundryId)
        res.json({data : deleteLaundryBasketData})
    } catch (error) {
        res.status(401).send({errorMessage:error})
    }
  }
}

module.exports = LaundryBasketsController;