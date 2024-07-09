import { useState } from 'react'
import { faqData } from './data/faqData'

function App() {
  
  const [drop,setDrop] = useState(false)

  const handleSubmit = (index)=>{
   return setDrop(drop===index?null:index)
  }

  return (
   <>
   <div className='h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
    <div className='w-[60%] min-h-[50%] py-10 shadow-3xl rounded-xl bg-slate-50 flex justify-around'>
      <div className='text-3xl'><h1>Question and answer</h1></div>
      <div className='flex flex-col break-normal gap-2'>
       {faqData?.map((faq,index)=>(
        <div className='shadow-xl border-2 rounded-md py-2 px-5 active:bg-red-300 '>
          <div onClick={()=>(handleSubmit(index))} key={index} className='text-2xl delay-75'>
            {faq.title} 
            
          </div>
            {drop===index &&
            (
              <div className=''>{faq.description}</div>
            )}
          </div>
        ))}
      </div>
          </div>
   </div>
   </>
  )
}

export default App
