const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY
const uploadImage = file => {
    AWS.config.update({
        region,
        accessKeyId,
        secretAccessKey
    })
    const upload = new AWS.S3.ManagedUpload({
        params:{
            Bucket: bucketName,
            Key:"image/"+file.name,
            Body: file,
            ACL: "public-read"
        }
    })
    const promise = upload.promise()
    promise.then(
        function(data){
            console.log("Successfully uploaded photo.")
        },
        function(err){
            return console.log("There was an error uploading your photo ",err.message)
        }
    )
}