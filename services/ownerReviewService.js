const ownerReviewRepository = require('../repositories/ownerReview.repository');

class ownerService {
  ownerRepository = new OwnerRepository();

  findOwner = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const allOwner = await this.owenrRepository.findHost();

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return allOwner.map(post => {
      return {
        userId: post.userId,
        laundryId: post.laundryId,
        
      }
    });
  }

  createOwner= async (userId, laundryIdpassword) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createOwnerReviewData = await this.ownerRepository.createHost(userId, laundryIdpassword);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      userId: createOwnerReviewData.null,
      laundryId: createOwnerReviewData.laundryId,
      
    };
  }
}

module.exports = ownerService;