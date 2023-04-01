const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true},
},{timestamps:true});
export default mongoose.models.User || mongoose.model('User', UserSchema);