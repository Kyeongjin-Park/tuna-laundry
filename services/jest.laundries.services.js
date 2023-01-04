const LaundryRepository = require("../repositories/jest.laundries.repository");
const { Laundries } = require("../models")
class LaundryService {
    laundryRepository = new LaundryRepository(Laundries)

    findAllLaundry = async (id) => {
        const allLaundry = await this.laundryRepository.findAllLaundry(id)
        allLaundry.sort((a, b) => {
            return b.updatedAt - a.updatedAt
        })
        return allLaundry.map((laundry) => {
            return {
                id: laundry.id,
                category: laundry.category,
                status: laundry.status,
                imageUrl: laundry.imageUrl,
                createdAt:laundry.createdAt,
                updatedAt: laundry.updatedAt,
                userId:laundry.userId,
                address:laundry.address,
                phone:laundry.phone
            }
        });
    };

    findLaundryById = async (id) => {
        const findLaundry = await this.laundryRepository.findLaundryById(id);
        return {
            id: findLaundry.id,
            category: findLaundry.category,
            content: findLaundry.content,
            status: findLaundry.status,
            imageUrl: findLaundry.imageUrl,
            createdAt: findLaundry.createdAt,
            updatedAt: findLaundry.updatedAt,
            phone: findLaundry.phone,
            address: findLaundry.address,
        };
    };

    findUser = async(id) => {
        const findUser = await this.laundryRepository.findUser(id)
        return {
            nickname: findUser.nickname,
            point: findUser.point,

        }
    }
    postLaundries = async (category,content,userId,status,imageUrl) => {
        const createLaundryData = await this.laundryRepository.createLaundry(category,content,userId,status,imageUrl);
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

    updateLaundry = async (id,category,content,imageUrl) => {
        await this.laundryRepository.updateLaundry(id,category,content,imageUrl);
        const updateLaundry = await this.laundryRepository.findPostById(id);
        // return {
        //     id: updateLaundry.null,
        //     content: updateLaundry.content,
        //     imageUrl: updateLaundry.imageUrl,
        //     category: updateLaundry.category,
        // };
        return
    };
    deleteLaundry = async (id) => {
        await this.laundryRepository.updateLaundry(id);
        // const updateLaundry = await this.laundryRepository.findPostById(id);
        // return {
        //     id: updateLaundry.null,
        //     nickname: updateLaundry.nickname,
        //     phone: updateLaundry.phone,
        //     address: updateLaundry.address,
        //     imageUrl: updateLaundry.imageUrl,
        //     category: updateLaundry.category,
        //     createdAt: updateLaundry.createdAt,
        //     updatedAt: updateLaundry.updatedAt,
        //     userId: updateLaundry.userId
        // };
        return
    }
}

module.exports = LaundryService;