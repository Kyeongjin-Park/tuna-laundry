const LaundryRepository = require("../repositories/laundries.repository");
class LaundryService {
    laundryRepository = new LaundryRepository()
​
    findAllLaundry = async () => {
        const allLaundry = await this.laundryRepository.findAllLaundry()
​
        allLaundry.sort((a, b) => {
            return b.updatedAt - a.updatedAt
        })
​
        return allLaundry.map((laundry) => {
            return {id: laundry.id,category: laundry.category,status: laundry.status,imageUrl: laundry.imageUrl,updatedAt: laundry.updatedAt,}
        });
    };
​
    findLaundryById = async (id) => {
        const findLaundry = await this.laundryRepository.findLaundryById(id);
​
        return {id: findLaundry.id,category: findLaundry.category,content: findLaundry.content,status: findLaundry.status,imageUrl: findLaundry.imageUrl,updatedAt: findLaundry.updatedAt,};
    };
​
    createLaundry = async (category,content,userId,status,imageUrl,phone) => {
    const createLaundryData = await this.laundryRepository.createLaundry(
    nickname,
    phone,
    address,
    imageUrl,
    content,
    category,
    );
​
    return {
    laundryId: createLaundryData.null,
    nickname: createLaundryData.nickname,
    phone: createLaundryData.phone,
    address: createLaundryData.address,
    imageUrl: createLaundryData.imageUrl,
    category: createLaundryData.category,
    createdAt: createLaundryData.createdAt,
    updatedAt: createLaundryData.updatedAt,
    };
    };
​
    updateLaundry = async (laundryId, password, title, content) => {
    const findPost = await this.postRepository.findPostById(postId);
    if (!findPost) throw new Error("Post doesn't exist");
​
    await this.postRepository.updatePost(postId, password, title, content);
​
    const updatePost = await this.postRepository.findPostById(postId);
​
    return {
    postId: updatePost.postId,
    nickname: updatePost.nickname,
    title: updatePost.title,
    content: updatePost.content,
    createdAt: updatePost.createdAt,
    updatedAt: updatePost.updatedAt,
    };
    };
​
    deletePost = async (postId, password) => {
    const findPost = await this.postRepository.findPostById(postId);
    if (!findPost) throw new Error("Post doesn't exist");
​
    await this.postRepository.deletePost(postId, password);
​
    return {
    postId: findPost.postId,
    nickname: findPost.nickname,
    title: findPost.title,
    content: findPost.content,
    createdAt: findPost.createdAt,
    updatedAt: findPost.updatedAt,
    };
    };
    }
​
​
module.exports = LaundryService;