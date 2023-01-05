const LaundryBasketService = require("../services/laundrybaskets.services");

class LaundryBasketsController {
  LaundryBasketService = new LaundryBasketService();
  // getAllLaundryBasket = async(req,res,next) => {
  //   const laundrybasket = await this.LaundryBasketService.findAllLaundryBasket()
  //   res.json({data:laundrybasket})
  // }
  getLaundryBasket = async(req,res,next) =>{
    const {userId} = res.local.user
    try{
        const user = await this.LaundryBasketService.findLaundryBasket(userId)
        res.json({data:user})
    }catch(error){
        res.status(401).send({errorMessage:error})
    }
  }

  createLaundryBasket = async(req,res,next)=>{
    const {userId} = res.local.user
    const {laundryId} = req.params
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