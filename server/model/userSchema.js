const bcrypt=require('bcryptjs')
const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
	name:{
		type:String,
		required:[true,'a user  must have a name']

	},

	email:{
		type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
     
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

	password:{
		type:String,
		minlength:8,
		required:[true,'please enter your password']
	}
})

userSchema.pre('save',async function(next){
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(this.password, salt);
	this.password=hash
})
userSchema.methods.comparePassword=async function(userPassword){
		const isMatch= bcrypt.compare(userPassword,this.password)
		return isMatch
}

module.exports=mongoose.model('User',userSchema)