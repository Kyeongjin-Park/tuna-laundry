const LaundryRepository = require("../../repositories/jest.laundries.repository.js");

let mockLaundriesModel = {
  findAll: jest.fn(),
  findByPk: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}

let laundryRepository = new LaundryRepository(mockLaundriesModel);

describe('Layered Architecture Pattern Laundries Repository Unit Test', () => {
  // 각 test가 실행되기 전에 실행됩니다.
  beforeEach(() => {
    jest.resetAllMocks(); // 모든 Mock을 초기화합니다.
  })
  test('Repository findAll Method', async () => {
    mockLaundriesModel.findAll = jest.fn(() => {
      return "findAll String"
    });
    const laundries = await laundryRepository.findAllLaundry(1);
    expect(laundryRepository.laundriesModel.findAll).toHaveBeenCalledTimes(1);
    expect(laundries).toBe("findAll String");
  })
  test('Repository findByPk Method', async()=>{
    const findLaundryByPkReturnValue = {
      id: 1,
      category: "Category_1",
      content: "Content_1",
      status: "대기중",
      imageUrl: "ImageUrl_1",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    mockLaundriesModel.findByPk = jest.fn(() => {
      return findLaundryByPkReturnValue
    });
    const laundriesByPk = await laundryRepository.findLaundryById(1)
    expect(laundryRepository.laundriesModel.findByPk).toHaveBeenCalledTimes(1)
    expect(laundryRepository.laundriesModel.findByPk).toHaveBeenCalledWith(findLaundryByPkReturnValue.id)
    expect(laundriesByPk).toEqual({
      id: findLaundryByPkReturnValue.id,
      category: findLaundryByPkReturnValue.category,
      content: findLaundryByPkReturnValue.content,
      status: findLaundryByPkReturnValue.status,
      imageUrl:findLaundryByPkReturnValue.imageUrl,
      createdAt: findLaundryByPkReturnValue.createdAt,
      updatedAt: findLaundryByPkReturnValue.updatedAt,
    });
  })
  test('Repository create Method', async()=>{
    mockLaundriesModel.create = jest.fn(() => {
      return "create Return String"
    });
    const createLaundryParams = {
      category:"createLaundryCategory",
      content:"createLaundryContent",
      userId:"createLaundryUserId",
      status:"createLaundryStatus",
      imageUrl:"createLaundryImageUrl"
    }
    const createLaundryData = await laundryRepository.createLaundry(
      createLaundryParams.category,
      createLaundryParams.content,
      createLaundryParams.userId,
      createLaundryParams.status,
      createLaundryParams.imageUrl
    )
    expect(createLaundryData).toBe("create Return String")
    expect(mockLaundriesModel.create).toHaveBeenCalledTimes(1)
    expect(mockLaundriesModel.create).toHaveBeenCalledWith({
      category:createLaundryParams.category,
      content:createLaundryParams.content,
      userId:createLaundryParams.userId,
      status:createLaundryParams.status,
      imageUrl:createLaundryParams.imageUrl
    })
  })
  test('Repository update Method', async()=>{
    mockLaundriesModel.update = jest.fn(() => {
      return "update Return String"
    });
    const updateLaundryData = await laundryRepository.updateLaundry(1,"Category_2","Content_2","ImageUrl_2")
    expect(mockLaundriesModel.update).toHaveBeenCalledTimes(1)
    expect(updateLaundryData).toBe("update Return String")

  })
  test('Repository delete Method', async()=>{
    mockLaundriesModel.destroy = jest.fn(() => {
      return "delete Return String"
    });
    const deleteLaundryData = await laundryRepository.deleteLaundry(1)
    expect(mockLaundriesModel.destroy).toHaveBeenCalledTimes(1)
    expect(deleteLaundryData).toBe("delete Return String")
  })
});