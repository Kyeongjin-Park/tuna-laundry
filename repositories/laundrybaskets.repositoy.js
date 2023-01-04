const { LaundryBaskets } = require("../models");

class LaundryBasketRepository{

    findLaundry = async(laundryId)=>{
        const laundry = await LaundryBaskets.findAll({where:{laundryId}});
        return laundry
    }

    createLaundryBasket = async(userId,laundryId) =>{
        const createLaundryBasketData = await LaundryBaskets.create({userId,laundryId})
        return createLaundryBasketData
    }

    deleteLaundryBasket = async(laundryId)=>{
        const updateLaundryBasketData = await LaundryBaskets.destroy({where:{laundryId}})
        return updateLaundryBasketData
    }
}

module.exports = LaundryBasketRepository;