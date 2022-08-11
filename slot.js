const mongoose=require('mongoose')
const SlotSchema=new mongoose.Schema({
	
	email:{type:String,required:true,unique:true}
},
{collection:'booked_slots'}
)


const model=mongoose.model('SlotSchema',SlotSchema)
module.exports=model