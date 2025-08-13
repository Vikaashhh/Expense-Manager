import React, { useContext, useState } from 'react'
import { mainContext } from '../conext/MainContextAPI'

const AddExpense = () => {
    const [isHide, setIsHide] = useState(true)
    const {allExpense, setAllExpense} = useContext(mainContext)

    const onSubmitHandler=(event)=>{
        try {
            event.preventDefault()

            const formData = new FormData(event.target)
            const amount = formData.get('amount') || 0
            const description = formData.get('description') || ''
            const inOut = formData.get('in/out') || ''

            if(!description || !inOut || amount<=0) {
                alert('Please fill all the details properly')
                return
            }

            const exp = {
                amount,
                description,
                inOut,
                created_at:new Date(),
                id:Date.now( )
            }
            const new_expense = [...allExpense, exp]

        setAllExpense(new_expense)
        localStorage.setItem("expense", JSON.stringify(new_expense))

            Swal.fire({
                title: 'Success!',
                text: 'Expense Added Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
                event.target.reset()
                setIsHide(true)




        } catch (error) {
            console.error(error.message)
        }
    }

  return (
    <>
        <div className="flex justify-end py-3">
            <button onClick={()=>setIsHide(!isHide) } className="btn px-4 py-2 bg-[#8B5FBF] text-white rounded cursor-pointer">
                {
                    isHide? 'Add +' : 'Close '
                }
            </button>
        </div>

        {!isHide &&  <div className="py-5">
            <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="amount">Amount (in rupees)</label>
                    <input id='amount' type="number" name='amount' required className="w-full py-2 border border-gray-400 rounded outline-none px-3" placeholder='Enter Amount' />
                </div>

                <div className="mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea id='description' type="text" name='description' required className="w-full py-2 border border-gray-400 rounded outline-none px-3" placeholder='Enter Description' />

                </div>

                <div className="mb-3">
                    <label htmlFor="in/out">Income/Expense</label>
                    <select id='in/out' name='in/out' required className="w-full py-2 border border-gray-400 rounded outline-none px-3">
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </div>

                <div className="mb-3">
                    <button className="btn w-full py-2 bg-[#8B5FBF] text-white rounded-md" type="submit">Add Expense</button>
                </div>
                
            </form>
        </div>}
    </>
  )
}

export default AddExpense