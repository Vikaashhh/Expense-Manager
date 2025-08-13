import React, { useContext } from 'react'
import { mainContext } from '../conext/MainContextAPI'
import Swal from 'sweetalert2'
import UpdateExpense from './UpdateExpense'

const ExpenseCard = ({data, no}) => {

    const {allExpense,setAllExpense} = useContext(mainContext)

    const deleteExpense = ()=>{
        const new_expense = allExpense.filter((cur,i)=>cur.id!=data.id)
        setAllExpense(new_expense)

        Swal.fire({
        title: 'Success!',
        text: 'Expense Deleted',
        icon: 'success',
        confirmButtonText: 'Ok'
        })

localStorage.setItem("expense", JSON.stringify(new_expense))

    }


  return (
    <tr>
        <td className='border border-gray-400 py-3 px-3'>{no}</td>
        <td className='border border-gray-400 py-3 px-3 font-semibold'>&#8377;{data.amount}</td>
        <td className='border border-gray-400 py-3 px-3'>{data.description}</td>
        <td className={'border border-gray-400 py-3 px-3 text-center font-bold'}>

            {data.inOut=='income' &&<span className='px-4 py-1 bg-green-100 text-green-700'>{'Income'}</span>}
            {data.inOut=='expense' &&<span className='px-4 py-1 bg-red-100 text-red-700'>{'Expense'}</span>}
        </td>
        <td className='border border-gray-400 py-3 px-3'>
            <button onClick={deleteExpense} className='px-1 bg-red-500 text-white rounded space-between m-3'>Delete</button>
            <UpdateExpense data = {data} />
        </td>

    </tr>
  )
}

export default ExpenseCard