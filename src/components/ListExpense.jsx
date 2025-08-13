import React, { useContext } from 'react'
import { mainContext } from '../conext/MainContextAPI'
import ExpenseCard from './ExpenseCard'

const ListExpense = () => {
  const{allExpense} = useContext(mainContext)
  return (
    <>

        <table className='w-full border table-auto my-10 py-3'>
            <thead>
                <tr>
                  <th className='border text-zinc-600 border-gray-400'>Name</th>
                  <th className='border text-zinc-600 border-gray-400'>Amount</th>
                  <th className='border text-zinc-600 border-gray-400'>Description</th>
                  <th className='border text-zinc-600 border-gray-400'>Expense/Income</th>
                  <th className='border text-zinc-600 border-gray-400'>Action</th>
                </tr>
            </thead>
            <tbody>
              {
                allExpense && allExpense.length>0 ? <>
                  {
                    allExpense.map((cur,i)=>{
                      return <ExpenseCard data={cur} no={i+1} key={i} />
                    })
                  }
                </>:<></>
              }
            </tbody>
        </table>

    </>
  )
}

export default ListExpense