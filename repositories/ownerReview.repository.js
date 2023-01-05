const { Review } = require('../models');

class ownerReviewRepository {
  findOwner = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const owner = await owner.findAll();
    return owner;
  }

  findOneOwner = async () => {
    // ORM인 Sequelize에서 Posts 모델의 findAll 메소드를 사용해 데이터를 요청합니다.
    const owner = await owner.findOne();
    return owner;
  }
  createOwner = async (userId,laundryId ) => {
    // ORM인 Sequelize에서 Posts 모델의 create 메소드를 사용해 데이터를 요청합니다.
    const createOwnerReviewData = await owner.create({ userId, laundryId });

    return createOwnerReviewData;
  }
}

module.exports = ownerReviewRepository;