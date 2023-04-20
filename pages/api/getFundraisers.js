import FundraiseRequests from "../../models/FundraiseRequests";
import connectDb from "../../middleware/db";

const handler = async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).end(); //! Method Not Allowed
    }
    try{
        let data = await FundraiseRequests.find({verified:true});
        // let finaldata = {};
        // for (let item of data) {
        //     if (item.verified) {
        //         finaldata.push(item);
        //     }
        // }
        res.status(200).json( {success:"true",data} )
    }catch(e){
        console.log(e)
    }
}
export default connectDb(handler);