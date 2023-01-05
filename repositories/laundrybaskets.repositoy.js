const { LaundryBasket } = require("../models");

class LaundryBasketRepository{
    // findAllLaundrybasket = async()=>{
    //     const laundrybasket = await LaundryBasket.findAll()
    //     return laundrybasket
    // }
    findLaundry = async(laundryId)=>{
        const laundry = await LaundryBasket.findAll({where:{laundryId}});
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