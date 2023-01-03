const { Laundries } = require("../models");
const { Users } = require("../models");
class LaundryRepository{
    findAllLaundry = async () => {
        const laundries  = await Laundries.findAll();
        const users = await Users.findByPk(id);
        return laundries,users
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
    updateLaundry = async (id,category,content,imageUrl,phone) => {
        const updateLaundryData = await Laundries.update({category,content,imageUrl,phone},{ where: { id:id} });
        return updateLaundryData
    }
    deleteLaundry = async (id) => {
        const updateLaundryData = await Laundries.destroy({where:{id}})
        return updateLaundryData
    }
}
​
module.exports = LaundryRepository;