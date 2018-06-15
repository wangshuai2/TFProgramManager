const qiniu = require('qn')
const imgUpload = qiniu.create({
  accessKey: 'R2LQXaqMRTiDirDgVAFm3fSopute7ti_xQdFBRCq',
  secretKey: 'J3XDTDoe2flOCIA107c8f1TnjcOv8NwM6olQXENi',
  origin: 'http://p9s9erx46.bkt.clouddn.com',
  bucket: 'tf-weapp-bucket'
})

// const imgBucket = qiniu.bucket('weappbucket')

// url p9s88rswn.bkt.clouddn.com

module.exports = async ctx => {
  const imgCallback = () => {
    return new Promise((resolve, reject) => {
      const imgarray = ctx.req.files.upload.path.split('/')
      const imgname = imgarray.pop()
      imgUpload.uploadFile(ctx.req.files.upload.path, { key: imgname }, (err, result) => {
        if (err) {
          reject(err)
          throw new Error(err)
        }
        resolve(result)
      })
    })
  }

  const result = await imgCallback()
  ctx.state.code = 1
  ctx.state.data = result
}
