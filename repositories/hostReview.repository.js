const { review } = require('../models');

class HostReviewRepository {
  findHost = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const host = await host.findAll();
    return host;
  }

  findOneHost = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const host = await host.findOne();
    return host;
  }
  createHost = async (userId,laundryId ) => {
    // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createHostReviewData = await Host.create({ userId, laundryId });

    return createHostReviewData;
  }
}

module.exports = HostReviewRepository;