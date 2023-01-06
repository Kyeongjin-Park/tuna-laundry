const UserRepository = require('../repositories/users.repository');

class UserService {
  userRepository = new UserRepository();

  findAllUser = async (nickname) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const allUser = await this.userRepository.findAllUser( nickname );

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return allUser.map(user => {
      return {
        id: user.id,
        nickname: user.nickname,
        password: user.password,
        phone: user.phone,
        address: user.address,
        status: user.status,
        point: user.point
      }
  });
  }

  findOneUser = async (nickname, password) => {
    
    const oneUser = await this.userRepository.findOneUser(nickname, password);
    return {
      id: oneUser.id,
      nickname: oneUser.nickname,
      password: oneUser.password,
      phone: oneUser.phone,
      address: oneUser.address,
      status: oneUser.status,
      point: oneUser.point
    };
  }

  createUser = async (nickname, password, phone, address, status, point) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const createUserData = await this.userRepository.createUser(nickname, password, phone, address, status, point);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      id: createUserData.id,
      nickname: createUserData.nickname,
      password: createUserData.password,
      phone: createUserData.phone,
      address: createUserData.address,
      status: createUserData.status,
      point: createUserData.point
    };
  }
  updatePoint = async(userId,point)=>{
    const updatePointData = await this.userRepository.updatePoint(userId,point)
    return {
      id: updatePointData.id,
      point: updatePointData.point,
    }
  }
  findMyInfo = async (userId) => {
    const userInfo = await this.userRepository.findMyInfo(userId)
    return {
      id: userInfo.id,
      nickname: userInfo.nickname,
      phone: userInfo.phone,
      address: userInfo.address
    }
  }
  myNickName = async(userId) => {
    const mynickname = await this.userRepository.myNickName(userId)
    return {
      nickname : mynickname.nickname
    }
  }
  updateUser = async ( password, phone, address) => {
    // 저장소(Repository)에게 데이터를 요청합니다.
    const updateUserData = await this.userRepository.updateUser( password, phone, address);

    // 비즈니스 로직을 수행한 후 사용자에게 보여줄 데이터를 가공합니다.
    return {
      id: updateUserData.id,
      nickname: updateUserData.nickname,
      phone: updateUserData.phone,
      address: updateUserData.address,
      
    };
  }
}

module.exports = UserService;