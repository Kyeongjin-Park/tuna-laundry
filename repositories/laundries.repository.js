const { Laundries } = require("../models");

class LaundryRepository{

    findAllLaundry = async (id) => {
        const laundries  = await Laundries.findAll({where:{id}});
        return laundries
    }

    findLaundryById = async (id) => {
        const laundry = await Laundries.findByPk(id)
        return laundry
    }

    createLaundry = async (category,content,userId,status,imageUrl) => {
        const createLaundryData = await Laundries.create({category,content,userId,status,imageUrl})
        return createLaundryData;
    }

    updateLaundry = async (id,category,content,imageUrl) => {
        const updateLaundryData = await Laundries.update({category,content,imageUrl},{ where: { id } });
        return updateLaundryData
    }

    deleteLaundry = async (id) => {
        const updateLaundryData = await Laundries.destroy({where:{id}})
        return updateLaundryData
    }

    findAbleReview = async (id,status) => {
        const laundries = await Laundries.findAll({where:{id,status}})
        return laundries
    }
    findWaitingLaundries = async (status) => {
        const laundries = await Laundries.findAll({where:{status}})
        return laundries
    }
    updateLaundryStatus = async (laundryId,status) => {
        const updatingLaundryStatus = await Laundries.update({status},{where:{laundryId}})
        return updatingLaundryStatus
    }
}

module.exports = LaundryRepository;