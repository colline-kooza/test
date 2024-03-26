import React from 'react'
import { Badge } from './ui/badge'

export default function Income({income}:any) {
  const total = income.reduce((acc: number, exp: any) => acc + Number(exp.amount), 0);

  return (
    <div>
    <div className="flex flex-col items-center">
       <img src="/image.png" alt="" className="w-[400px] object-contain h-[400px]"/>
       <div className="text-center">
         <p className="text-2xl font-semibold text-gray-400 mt-2">income</p>
         <p className="text-lg font-bold">₹{total}</p>
       </div>
     </div>
     <div className="mt-6">
       <div className="flex items-center justify-between mb-2">
     <div className='text-lg font-bold'>
     <p>Name</p>
          <p>Amount</p>
          <p >Date</p>
     </div>
      {
       income.map((exp:any)=>{
         return(
          <div key={exp.id}>
           <p className="text-sm">{exp.name}</p>
           <p className="text-sm font-semibold mt-2">${exp.amount}</p>
           <p className="text-sm font-semibold mt-2">${exp.date}</p>
          </div>
         )
       })
      }
       </div>
      
     </div>
 </div>
  )
}
