import { useEffect } from "react";
import "./App.css";
import {useForm} from 'react-hook-form'

 

function App() {

  const {register,handleSubmit,watch,formState:{errors}} = useForm();
  
  const onSubmit = (data)=>(console.log(data));

  

  const watchedName = watch('name');
  const watchedEmail = watch('email');

  useEffect(()=>{
    console.log('Name '+watchedName);
  },[watchedName]);

  useEffect(()=>{
    console.log('Email '+watchedEmail);
  },[watchedEmail]);

  return (
    <div>
      <h1>Forms in react</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
        Name:
       <input {...register('name',{required : 'Name is required buddy'})}/>
      </label><br/>
       {errors.name && <p>{errors.name.message}</p>}
     

       <label>
        Email:
        <input {...register('email')}/>
      </label>

      <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
