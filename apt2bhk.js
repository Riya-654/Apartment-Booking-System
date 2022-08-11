const mongoose=require('mongoose')
const Apt2Schema=new mongoose.Schema({
	
	bhk:{type:String,required:true,unique:true},
	count:{type:String,required:true},
	east:{type:String,required:true},
	north:{type:String,required:true}
},
{collection:'bhk_avail2'}
)


const model=mongoose.model('Apt2Schema',Apt2Schema)
module.exports=model