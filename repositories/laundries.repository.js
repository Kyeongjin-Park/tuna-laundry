const { Laundry } = require("../models");

class LaundryRepository{

    findAllLaundry = async (userId) => {
        const laundries  = await Laundry.findAll({where:{userId}});
        return laundries
    }

    findLaundryById = async (id) => {
        const laundry = await Laundry.findByPk(id)
        return laundry
    }

    createLaundry = async (category,content,status,imageUrl,userId) => {
        const createLaundryData = await Laundry.create({category,content,status,imageUrl,userId})
        return createLaundryData;
    }

    updateLaundry = async (id,category,content,imageUrl) => {
        const updateLaundryData = await Laundry.update({category,content,imageUrl},{ where: { id } });
        return updateLaundryData
    }

    deleteLaundry = async (id) => {
        const updateLaundryData = await Laundry.destroy({where:{id}})
        return updateLaundryData
    }

    findAbleReview = async (id,status) => {
        const laundries = await Laundry.findAll({where:{id,status}})
        return laundries
    }
    findWaitingLaundries = async (status) => {
        const laundries = await Laundry.findAll({where:{status}})
        return laundries
    }
    updateLaundryStatus = async (laundryId,status) => {
        const updatingLaundryStatus = await Laundry.update({status},{where:{laundryId}})
        return updatingLaundryStatus
    }
}

module.exports = LaundryRepository;