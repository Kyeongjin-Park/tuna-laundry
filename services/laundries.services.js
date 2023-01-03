const LaundryRepository = require("../repositories/laundries.repository");
class LaundryService {
    laundryRepository = new LaundryRepository()
​
    findAllLaundry = async () => {
        const allLaundry = await this.laundryRepository.findAllLaundry()
​
        allLaundry.sort((a, b) => {
            return b.updatedAt - a.updatedAt
        })
​
        return allLaundry.map((laundry) => {
            return {id: laundry.id,category: laundry.category,status: laundry.status,imageUrl: laundry.imageUrl,updatedAt: laundry.updatedAt,}
        });
    };
​
    findLaundryById = async (id) => {
        const findLaundry = await this.laundryRepository.findLaundryById(id);
​
        return {id: findLaundry.id,category: findLaundry.category,content: findLaundry.content,status: findLaundry.status,imageUrl: findLaundry.imageUrl,updatedAt: findLaundry.updatedAt,};
    };
​
    postLaundries = async (category,content,userId,status,imageUrl,phone) => {
        const createLaundryData = await this.laundryRepository.createLaundry(category,content,userId,status,imageUrl,phone);
        return {
            id: createLaundryData.null,
            nickname: createLaundryData.nickname,
            phone: createLaundryData.phone,
            address: createLaundryData.address,
            imageUrl: createLaundryData.imageUrl,
            category: createLaundryData.category,
            createdAt: createLaundryData.createdAt,
            updatedAt: createLaundryData.updatedAt,
            userId: createLaundryData.userId
        };
    };
​
    updateLaundry = async (id,category,content,imageUrl,phone) => {
        await this.laundryRepository.updateLaundry(id,category,content,imageUrl,phone);
        const updateLaundry = await this.laundryRepository.findPostById(id);
        return {
            id: updateLaundry.id,
            category: updateLaundry.category,
            content: updateLaundry.content,
            imageUrl: updateLaundry.imageUrl,
            phone:updateLaundry.phone,
            createdAt: updateLaundry.createdAt,
            updatedAt: updateLaundry.updatedAt,
        };
    };
}
​
module.exports = LaundryService;