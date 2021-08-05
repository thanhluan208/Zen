import mongoose from 'mongoose'

const postSchema = mongoose.Schema(
    {
        customer: String,
        numberOfCustomer:Number,
        date: Date,
        time: String,  //mongoose schema không lưu trữ được dữ liệu time. Chỉ có thể lưu trữ DATE (MM/DD/YYYY) hoặc timestamp (MM/DD/YYYY/HH/MM/SS)
        message: String,
    }
)

const PostMessage = mongoose.model('PostMessage',postSchema)

export default PostMessage