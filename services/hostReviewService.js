const HostRepository = require('../repositories/hostReview.repository');

class HostService {
  hostRepository = new HostRepository();

  findHost = async () => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const allHost = await this.hostRepository.findHost();

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return allHost.map(post => {
      return {
        userId: post.userId,
        laundryId: post.laundryId,
        
      }
    });
  }

  createHost = async (userId, laundryIdpassword) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createHosetReviewData = await this.hostRepository.createHost(userId, laundryIdpassword);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      userId: createHosetReviewData.null,
      laundryId: createHosetReviewData.laundryId,
      
    };
  }
}

module.exports = HostService;