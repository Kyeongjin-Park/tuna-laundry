const LaundryRepository = require("../repositories/laundries.repository");

class LaundryService {
    laundryRepository = new LaundryRepository()

    findAllLaundry = async (id) => {
        const allLaundry = await this.laundryRepository.findAllLaundry(id)
        allLaundry.sort((a, b) => {
            return b.updatedAt - a.updatedAt
        })
        return allLaundry.map((laundry) => {
            return {
                id: laundry.id,
                category: laundry.category,
                content: laundry.content,
                userId: laundry.userId,
                createdAt: laundry.createdAt,
                updatedAt: laundry.updatedAt,
                status: laundry.status,
                imageUrl: laundry.imageUrl
            }
        });
    };

    findLaundryById = async (id) => {
        const findLaundry = await this.laundryRepository.findLaundryById(id);
        return {
            id: findLaundry.id,
            category: findLaundry.category,
            content: findLaundry.content,
            userId: findLaundry.userId,
            createdAt: findLaundry.createdAt,
            updatedAt: findLaundry.updatedAt,
            status: findLaundry.status,
            imageUrl: findLaundry.imageUrl
        };
    };

    createLaundries = async (category,content,userId,status,imageUrl) => {
        const createLaundryData = await this.laundryRepository.createLaundry(category,content,userId,status,imageUrl);
        return {
            id: createLaundryData.null,
            category: createLaundryData.category,
            content: createLaundryData.content,
            userId: createLaundryData.userId,
            createdAt: createLaundryData.createdAt,
            updatedAt: createLaundryData.updatedAt,
            status: createLaundryData.status,
            imageUrl: createLaundryData.imageUrl
        };
    };

    updateLaundry = async (id,category,content,imageUrl) => {
        await this.laundryRepository.updateLaundry(id,category,content,imageUrl);
        const updateLaundry = await this.laundryRepository.findPostById(id);
        return {
            id: updateLaundry.id,
            category: updateLaundry.category,
            content: updateLaundry.content,
            userId: updateLaundry.userId,
            createdAt: updateLaundry.createdAt,
            updatedAt: updateLaundry.updatedAt,
            status: updateLaundry.status,
            imageUrl: updateLaundry.imageUrl
        };
    };
    deleteLaundry = async (id) => {
        await this.laundryRepository.updateLaundry(id);
        const updateLaundry = await this.laundryRepository.findPostById(id);
        return {
            id: updateLaundry.id,
            category: updateLaundry.category,
            content: updateLaundry.content,
            userId: updateLaundry.userId,
            createdAt: updateLaundry.createdAt,
            updatedAt: updateLaundry.updatedAt,
            status: updateLaundry.status,
            imageUrl: updateLaundry.imageUrl
        };
    }
    getAbleReivew = async (id,status) => {
        const laundry = await this.laundryRepository.findAbleReview(id,status)
        return {
            id: laundry.id,
            category: laundry.category,
            content: laundry.content,
            userId: laundry.userId,
            createdAt: laundry.createdAt,
            updatedAt: laundry.updatedAt,
            status: laundry.status,
            imageUrl: laundry.imageUrl
        }
    }
    getWaitingLaundries = async (status) => {
        const laundries = await this.laundryRepository.findWaitingLaundries(status)
        return {
            id: laundries.id,
            category: laundries.category,
            content: laundries.content,
            userId: laundries.userId,
            createdAt: laundries.createdAt,
            updatedAt: laundries.updatedAt,
            status: laundries.status,
            imageUrl: laundries.imageUrl
        }
    }
    updateLaundryStatus = async (laundryId,status) => {
        const updateLaundry = await this.laundryRepository.findPostById(laundryId);
        await this.laundryRepository.updateLaundryStatus(laundryId,status);
        return {
            id: updateLaundry.id,
            category: updateLaundry.category,
            content: updateLaundry.content,
            userId: updateLaundry.userId,
            createdAt: updateLaundry.createdAt,
            updatedAt: updateLaundry.updatedAt,
            status: updateLaundry.status,
            imageUrl: updateLaundry.imageUrl
        }
    }
}

module.exports = LaundryService;