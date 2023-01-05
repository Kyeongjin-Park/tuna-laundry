const LaundryRepository = require("../repositories/laundries.repository");

class LaundryService {
    laundryRepository = new LaundryRepository()

    findAllLaundry = async (userId) => {
        const allLaundry = await this.laundryRepository.findAllLaundry(userId)
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
            imageUrl: findLaundry.imageUrl,
        };
    };

    createLaundries = async (category,content,status,imageUrl,userId) => {
        const createLaundry = await this.laundryRepository.createLaundry(category,content,status,imageUrl,userId);
        return {
            id: createLaundry.null,
            category: createLaundry.category,
            content: createLaundry.content,
            userId: createLaundry.userId,
            createdAt: createLaundry.createdAt,
            updatedAt: createLaundry.updatedAt,
            status: createLaundry.status,
            imageUrl: createLaundry.imageUrl
        };
    };

    updateLaundry = async (id,category,content,imageUrl) => {
        await this.laundryRepository.updateLaundry(id,category,content,imageUrl);
        const findLaundry = await this.laundryRepository.findLaundryById(id);
        return {
            id: findLaundry.id,
            category: findLaundry.category,
            content: findLaundry.content,
            userId: findLaundry.userId,
            createdAt: findLaundry.createdAt,
            updatedAt: findLaundry.updatedAt,
            status: findLaundry.status,
            imageUrl: findLaundry.imageUrl,
        };
    };
    deleteLaundry = async (id) => {
        await this.laundryRepository.updateLaundry(id);
        const findLaundry = await this.laundryRepository.findLaundryById(id);
        return {
            id: findLaundry.id,
            category: findLaundry.category,
            content: findLaundry.content,
            userId: findLaundry.userId,
            createdAt: findLaundry.createdAt,
            updatedAt: findLaundry.updatedAt,
            status: findLaundry.status,
            imageUrl: findLaundry.imageUrl,
        };
        return
    }
    getAbleReivew = async (id,status) => {
        const findLaundry = await this.laundryRepository.findAbleReview(id,status)
        return {
            id: findLaundry.id,
            category: findLaundry.category,
            content: findLaundry.content,
            userId: findLaundry.userId,
            createdAt: findLaundry.createdAt,
            updatedAt: findLaundry.updatedAt,
            status: findLaundry.status,
            imageUrl: findLaundry.imageUrl,
        }
    }
    getWaitingLaundries = async (status) => {
        const findLaundry = await this.laundryRepository.findWaitingLaundries(status)
        return {
            id: findLaundry.id,
            category: findLaundry.category,
            content: findLaundry.content,
            userId: findLaundry.userId,
            createdAt: findLaundry.createdAt,
            updatedAt: findLaundry.updatedAt,
            status: findLaundry.status,
            imageUrl: findLaundry.imageUrl,
        }
    }
    updateLaundryStatus = async (laundryId,status) => {
        const findLaundry = await this.laundryRepository.findWaitingLaundries(status)
        await this.laundryRepository.updateLaundryStatus(laundryId,status);
        return {
            id: findLaundry.id,
            category: findLaundry.category,
            content: findLaundry.content,
            userId: findLaundry.userId,
            createdAt: findLaundry.createdAt,
            updatedAt: findLaundry.updatedAt,
            status: findLaundry.status,
            imageUrl: findLaundry.imageUrl,
        }
    }
}

module.exports = LaundryService;