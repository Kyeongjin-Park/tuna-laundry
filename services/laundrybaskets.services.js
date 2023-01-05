const LaundryBasketRepository = require("../repositories/laundrybaskets.repository");

class LaundryBasketService {
    laundryBasketRepository = new LaundryBasketRepository()
    findMyLaundryBasket = async(userId) => {
        const findLaundryBasketData = await this.laundryBasketRepository.findLaundryBasket(userId)
        return {
            id: findLaundryBasketData.id,
            userId : findLaundryBasketData.userId,
            laundryId : findLaundryBasketData.laundryId
        }
    }
    findMyLaundryBasket = async(userId) => {
        const findLaundryBasket = await this.laundryBasketRepository.findMyLaundryBasket(userId)
        return {
            id: findLaundryBasket.id,
            userId: findLaundryBasket.userId,
            laundryId: findLaundryBasket.laundryId,
        }
    }
    createLaundryBasket = async (userId,laundryId) => {
        const createLaundryBasketData = await this.laundryBasketRepository.createLaundryBasket(userId,laundryId);
        return {
            id: createLaundryBasketData.null,
            userId: createLaundryBasketData.userId,
            laundryId: createLaundryBasketData.laundryId,
        };
    };
    deleteLaundryBasket = async (laundryId) => {
        await this.laundryBasketRepository.deleteLaundry(laundryId);
        const findLaundryBasket = await this.laundryBasketRepository.findLaundryBasket(laundryId)
        return {
            id: findLaundryBasket.id,
            userId: findLaundryBasket.userId,
            laundryId: findLaundryBasket.laundryId,
        }
    }
}
module.exports = LaundryBasketService;