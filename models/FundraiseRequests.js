const mongoose = require('mongoose');
const { Schema } = mongoose;
const FundraiseRequestsSchema = new Schema({
    title:{type: String,required:true},
    img:{type:String},
    includeTaxBenefit:{type: Boolean,required:true},
    amountRequired:{type: Number,required:true},
    amountRaised:{type: Number,default: 0},
    createdBy:{type: String,required:true},
    benefiter:{type: String,required:true},
    story:{type: String},
},{timestamps:true});
export default mongoose.models.FundraiseRequests || mongoose.model('FundraiseRequests', FundraiseRequestsSchema);