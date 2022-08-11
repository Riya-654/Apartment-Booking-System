const mongoose=require('mongoose')
const BhkSchema=new mongoose.Schema({
	
	bhk:{type:String,required:true,unique:true},
	count:{type:String,required:true}
},
{collection:'bhk_avail'}
)


const model=mongoose.model('BhkSchema',BhkSchema)
module.exports=model