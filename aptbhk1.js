const mongoose=require('mongoose')
const Bhk1Schema=new mongoose.Schema({
	
	bhk:{type:String,required:true,unique:true},
	count:{type:String,required:true},
	east:{type:String,required:true},
	north:{type:String,required:true}
},
{collection:'bhk_avail'}
)


const model=mongoose.model('Bhk1Schema',Bhk1Schema)
module.exports=model