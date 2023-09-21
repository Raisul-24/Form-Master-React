

import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import HookForm from './HookForm/HookForm'
// import ReuseableForm from './ReuseableForm/ReuseableForm'
// import RefForm from './RefForm/RefForm'
// import StatefullForm from './Components/StatefullForm/StatefullForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

//   const handleSignUpSubmit = data =>{
//     console.log('Sign Up',data);
//   }
//   const handleUpdateProfile = data =>{
//     console.log("Update data",data);
//   }

  return (
    <>
     
      <h1 className='text-4xl font-extrabold text-amber-200'>Form Master</h1>
      <Grandpa></Grandpa>
      
      {/* <SimpleForm></SimpleForm>
       */}

      {/* <StatefullForm></StatefullForm>
       */}
       {/* <RefForm></RefForm> */}
       {/* <HookForm></HookForm> */}
       {/* <ReuseableForm 
       fromTitle={"Sign Up"} 
       handleSignUpSubmit={handleSignUpSubmit}
       submitBtnText='Sign Up'></ReuseableForm>
       <ReuseableForm 
       fromTitle={"Profile Update"} 
       handleUpdateProfile={handleUpdateProfile}></ReuseableForm> */}

    </>
  )
}

export default App
