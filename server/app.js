const express=require('express')
const app=express()
const cors=require('cors')
require('dotenv').config()
const mongoose=require('mongoose')
const userRouter=require('./routes/user')
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cors())

app.get('/',(req,res)=>{
	res.send('welcome')
})
app.use('/register',userRouter)
app.all('**',(req,res)=>{
	res.send(`<h1>page not found</h1>`)
})

const start=async()=>{
	try{
	
		await mongoose.connect(process.env.DB_URL)
		console.log('connected to db')
		app.listen(4200,()=>{
			console.log("listening to port 4200")
		
		})
	}catch(err){
	console.log('error')
	}
	
}
start()
