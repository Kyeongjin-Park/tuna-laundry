const { Laundries } = require("../models");
const { Laundrybasket } = require("../models");

class LaundryRepository{
    constructor(laundriesModel){
        this.laundriesModel = laundriesModel
    }
    findAllLaundry = async (id) => {
        const laundries  = await Laundries.findAll({where:{id:id}});
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
}

module.exports = LaundryRepository;