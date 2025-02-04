import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import { useState } from 'react';




const RegisterForm = (props:Record <string ,string |number>) => {

       
    const [step, setstep] = useState(1)


  return (
    <>

{
  step === 1 ? <StepOne setstep={setstep} />

: step === 2 ? <StepTwo setstep={setstep} />

: step=== 3 ? <StepThree />

:null

}

    
    </>
  )
}

export  {RegisterForm}
