const { Laundries } = require("../models");
class LaundryRepository{
    findAllLaundry = async () => {
        const laundries  = await Laundries.findAll();
        return laundries
    }
    findLaundryById = async (id) => {
        const laundry = await Laundries.findByPk(id)
        return laundry
    }
    createLaundry = async (category,content,userId,status,imageUrl,phone) => {
        const createLaundryData = await Laundries.create({category,content,userId,status,imageUrl,phone})
        return createLaundryData;
    }
    forUpdateLaundry = async(id) => {
        const laundry = await Laundries.findByPk(id)
        return laundry
    }
    updateLaundry = async (category,content,imageUrl) => {
        const updateLaundryData = await Laundries.update({category,content,imageUrl,phone},{ where: { category,content,imageUrl,phone } });
        return updateLaundryData
    }
    deleteLaundry = async (id) => {
        const updateLaundryData = await Laundries.destroy({where:{id}})
        return updateLaundryData
    }
}
​
module.exports = LaundryRepository;