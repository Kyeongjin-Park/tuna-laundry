
class LaundryRepository{
    constructor(laundriesModel){
        this.laundriesModel = laundriesModel
    }
    findAllLaundry = async (id) => {
        const laundries  = await this.laundriesModel.findAll({where:{id:id}});
        return laundries
    }

    findLaundryById = async (id) => {
        const laundry = await this.laundriesModel.findByPk(id)
        return laundry
    }

    createLaundry = async (category,content,userId,status,imageUrl) => {
        const createLaundryData = await this.laundriesModel.create({category,content,userId,status,imageUrl})
        return createLaundryData;
    }

    updateLaundry = async (id,category,content,imageUrl) => {
        const updateLaundryData = await this.laundriesModel.update({category,content,imageUrl},{ where: { id } });
        return updateLaundryData
    }

    deleteLaundry = async (id) => {
        const updateLaundryData = await this.laundriesModel.destroy({where:{id}})
        return updateLaundryData
    }
}

module.exports = LaundryRepository;