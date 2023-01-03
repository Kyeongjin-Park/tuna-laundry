const LaundryRepository = require("../repositories/laundries.repository");

class LaundryService {
  laundryRepository = new LaundryRepository();

  // 세탁물 전체 보기
  findAllLaundry = async() => {
    const allLaundry = await this.laundryRepository.findAllLaundry();

    allLaundry.sort((a,b) => {
      return b.createdAt - a.createdAt
    });

    return allLaundry.map((laundry) => {
      return {
        laundryId: laundry.laundryId,
      };
    });
  };

  // 특정 세탁물 보기
  findLaundryById = async(laundryId) => {
    const findLaundry = await this.laundryRepository.findLaundryById(laundryId);

    return {
      laundryId: findLaundry.laundryId,
    };
  };

  // 세탁물 등록
  createLaundry = async( inputDB ) => {
    const createLaundryData = await this.laundryRepository.createLaundry(
      "DB 입력",
    );

    return {
      laundryId: createLaundryData.null,
    };
  };

  // 세탁물 내용 변경
  updateLaundry = async( inputDB ) => {
    const findLaundry = await this.laundryRepository.findLaundryById(laundryId);
    if (!findLaundry) throw new Error("세탁물이 존재하지 않습니다.");

    await this.laundryRepository.updateLaundry(
      "DB 입력"
    );

    const updateLaundry = await this.laundryRepository.findLaundryById(laundryId);

    return {
      laundryId: updateLaundry.laundryId,
    };
  };

  // 세탁물 삭제
  deleteLaundry = async( inputDB ) => {
    const findLaundry = await this.laundryRepository.findLaundryById(laundryId);
    if (!findLaundry) throw new Error("세탁물이 존재하지 않습니다.");

    await this.laundryRepository.deleteLaundry(
      "DB 입력"
    );

    const deleteLaundry = await this.laundryRepository.deleteLaundry(
      laundryId,
      password
    );

    return {
      laundryId: findLaundry.laundryId,
    };
  };

}


module.exports = LaundryService;