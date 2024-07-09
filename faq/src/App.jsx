import { useState } from 'react'
import { faqData } from './data/faqData'

function App() {
  
  const [drop,setDrop] = useState(false)

  const handleSubmit = ()=>{
    setDrop(prev=>!prev)
  }

  return (
   <>
   <div>
    <div>
      <div></div>
      <div>
        {faqData?.map((faq)=>(
          <div onClick={handleSubmit}>
            {faq.title}
            
          </div>
          {drop && (
                <div>{faq.description}</div>
            )}
        ))}
      </div>
    </div>
   </div>
   </>
  )
}

export default App
