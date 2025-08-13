import React, { useContext } from 'react'
import { mainContext } from '../conext/MainContextAPI'

const AllExpense = () => {

  const {allExpense} = useContext(mainContext)
  
  const totalMoney = allExpense.length > 0 ? (
    allExpense.reduce((pre,cur) => {
      return pre+parseInt(cur.amount)

    },0) 
  ): allExpense.length == 1? allExpense[0].amount : 0


    
  const calculateMoney = (inOut) => {
    if(allExpense.length <= 0){
      return 0
    }


    const expenses = allExpense.filter((cur,i)=> cur.inOut == inOut).map((cur)=>parseInt(cur.amount))
    if (expenses.length <= 1){
      return expenses[0]
    }

    const price = expenses.reduce((pre,cur)=>pre+cur)
    return price
  }
  return (
    <>
        <div className='grid grid-cols-1 gap-y-5 lg:grid-cols-2'>
            <div className="w-[96%] lg:w-[80%] mx-auto py-5 px-3 rounded border border-gray-300">
              <p className='font-bold text-2xl text-green-500'>Income</p>
              <p className="text-3xl font-bold text-end text-green-600">&#8377; {calculateMoney('income') || 0 }</p>


            </div>
            <div className="w-[96%] lg:w-[80%] mx-auto py-5 px-3 rounded border border-gray-300">
              <p className='font-bold text-2xl text-red-500'>Expense</p>
              <p className="text-3xl font-bold text-end text-red-600">&#8377; {calculateMoney('expense') || 0}</p>

            </div>
            <div className="col-span-2 py-5 px-3 rounded border border-gray-300">
              <p className='font-bold text-2xl text-red-500'>Total <span className='text-green-500'>Balance</span></p>
              <p className="text-end font-bold text-2xl text-red-600">&#8377; {totalMoney}</p>

            </div>
        </div>
    </>
  )
}

export default AllExpense