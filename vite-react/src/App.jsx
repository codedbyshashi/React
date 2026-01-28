
import "./App.css";
import {useForm} from 'react-hook-form'

 

function App() {

  const {register,handleSubmit,reset,watch,formState:{errors}} = useForm({mode:'onchange'});
  
  const onSubmit = (data)=>{
    console.log(data);
    reset();
  };

  const existingUsernames = ['admin','user123','john'];
  const checkIfUsernameExist = async(username)=>{
    await new Promise(resolve => setTimeout(resolve,1000));
    return existingUsernames.includes(username);
  }

  

  // const watchedName = watch('name');
  // const watchedEmail = watch('email');

  // const validateName = (value) =>{
  //   if(value !='admin'){
  //     return 'admin can only enter';
  //   }
  //   return true;
  // }

  // useEffect(()=>{
  //   console.log('Name '+watchedName);
  // },[watchedName]);

  // useEffect(()=>{
  //   console.log('Email '+watchedEmail);
  // },[watchedEmail]);

  return (
    <div>
      <h1>Forms in react</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
        Name:
       <input {...register('name',{
        required : true,
        validate:{
          notAdmin : (value) => value!=="admin"||"Admin is not allowed",
          isNotNumber : (value) => isNaN(value)||"Name cannot be number",
          check : async (value) => {
            const exist = await checkIfUsernameExist(value);
            return !exist || 'Username already taken';
          }
        }
        })}/>
      </label><br/>
       {errors.name && <p>{errors.name.message}</p>}
     

       <label>
        Email:
        <input {...register('email')}/>
      </label>

      <label>
       Password:
        <input {...register('password',{required:true,minLength:2})}/>
      </label>
      {errors.password && <p>{errors.password.message}</p>}

      <label>
       ConfirmPassword:
        <input {...register('ConfirmPassword',{required:true,
          validate:value =>value ===watch('password')|| 'password do not match'
        })}/>
      </label>
      {errors.ConfirmPassword && <p>{errors.ConfirmPassword.message}</p>}

      <button>Submit</button>
      <button type="button" onClick={()=>reset()}>reset</button>
      </form>
    </div>
  );
}

export default App;
