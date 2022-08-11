const mongoose=require('mongoose')
const Slot2Schema=new mongoose.Schema({
	
	email:{type:String,required:true,unique:true}
},
{collection:'booked_slots2'}
)


const model=mongoose.model('Slot2Schema',Slot2Schema)
module.exports=model