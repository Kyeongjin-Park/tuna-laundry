const LaundryService = require("../services/laundries.services");


// Laundry의 컨트롤러 역할을 하는 클래스
class LaundriesController {
  LaundryService = new LaundryService(); // Laundry 서비스 클래스를 컨트롤러 클래스의 멤버 변수로 할당.
  
  // 세탁물 전체 조회
  getLaundries = async(req, res) => {
    try {
      const laundries = async(req, res) => {
        const laundries = await this.laundry.service.findAllLaundry();

        res.status(200).send({ "DB 입력" });
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({errorMessage:error});
    }
  }

  // 특정 세탁물 조회
  getLaundryById = async(req, res) => {
    const { laundryId } = req.params;
    const laundry = await this.LaundryService.findLaundryById(laundryId);

    res.status(200).send({ "DB 입력" });
  }

  // 세탁물 등록
  createLaundry = async(req, res) => {
    try {
      const { } = req.body;
      const createLaundryData = await this.LaundryService.createLaundry(

      );

      res.status(200).send({ "DB 입력" });

    } catch (error) {
      console.log(error);
      res.status(401).send({errorMessage:error});
    }
  }

  // 세탁물 내용 수정
  updateLaundry = async(req, res) => {
    try {
      const { laundryId } = req.params;
      const { } = req.body;

      const updateLaundry = await this.LaundryService.updateLaundry(

      );

      res.status(200).send({ "DB 입력" });

    } catch (error) {
      console.log(error);
      res.status(401).send({errorMessage:error});
    }
  }

  // 세탁물 취소
  deleteLaundry = async(req, res) => {
    try {
      const { laundryId } = req.params;
      const { } = req.body;

      const deleteLaundry = await this.LaundryService.deleteLaundry(

      );

      res.status(200).send({ "DB 입력" });
      
    } catch (error) {
      console.log(error);
      res.status(401).send({errorMessage:error});
    }
  }
}


module.exports = LaundriesController;