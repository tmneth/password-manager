import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    url: String,
    username: String,
    password: String,
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;