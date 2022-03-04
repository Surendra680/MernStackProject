import "./Register.css";
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
	const navigate=useNavigate()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const submitForm= async(e)=>{
		try{
			
			e.preventDefault()

			let result=await fetch('http://localhost:4200/register',{
				method:'post',
				body:JSON.stringify({
					name,email,password
				}),

				headers:{
					'content-type':'application/json'
				}
			})

			result=await result.json()
			alert(result.message)
			if(result.message==="successfully registered") navigate('/login')
				
		}catch(err){
			console.log(err)
		}
		
	}
  return (
   <>
   <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
			<h1 style={{color:'blue'}}>Register</h1>
			<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="name" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="email" className="login__input" placeholder="Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
				</div>
				
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
				</div>
				<button className="button login__submit" onClick={submitForm}>
					<span className="button__text">register</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
				<button className="button login__submit" onClick={()=>navigate('/login')}>
					<span className="button__text">login</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
		
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
   
   </>
     
  );
}

export default Register;
