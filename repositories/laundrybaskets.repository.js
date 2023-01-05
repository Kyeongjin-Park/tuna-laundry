const { LaundryBasket } = require("../models");

class LaundryBasketRepository{
    findLaundryBasket = async(userId)=>{
        const laundry = await LaundryBasket.findAll({where:{userId}})
        return laundry
    }
    findMyLaundry = async(userId)=>{
        const laundry = await LaundryBasket.findAll({where:{userId}});
        return laundry
    }

    createLaundryBasket = async(userId,laundryId) =>{
        const createLaundryBasketData = await LaundryBasket.create({userId,laundryId})
        return createLaundryBasketData
    }

    deleteLaundryBasket = async(laundryId)=>{
        const updateLaundryBasketData = await LaundryBasket.destroy({where:{laundryId}})
        return updateLaundryBasketData
    }
}

module.exports = LaundryBasketRepository;