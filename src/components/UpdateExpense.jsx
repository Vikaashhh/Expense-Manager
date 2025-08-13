import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import { mainContext } from '../conext/MainContextAPI'

export default function UpdateExpense({data}) {


  let [isOpen, setIsOpen] = useState(false)

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
            }
            const new_expense = allExpense.map((cur,i)=>{
                    if(cur.id == data.id){
                        return {
                            ...cur,
                            ...exp
                        }
                    }
            
                return cur
            })

        setAllExpense(new_expense)
        localStorage.setItem("expense", JSON.stringify(new_expense))

            Swal.fire({
                title: 'Success!',
                text: 'Expense Updated Successfully',

                icon: 'success',
                confirmButtonText: 'Ok'
            })
            close()


        } catch (error) {
            console.error(error.message)
        }
    }


  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={open} className='px-1  bg-orange-500 text-white rounded'>Update</button>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl border bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="div" className="text-base/7 font-medium text-black flex item-center justify-between">
                <h3>Update Expense</h3>
                <button onClick={close}>X</button>
              </DialogTitle>

                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                        <label htmlFor="amount">Amount (in rupees)</label>
                        <input id='amount' type="number" name='amount' required className="w-full py-2 border border-gray-400 rounded outline-none px-3" defaultValue ={data.amount} placeholder='Enter Amount' />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description">Description</label>
                        <textarea id='description' type="text" name='description' required className="w-full py-2 border border-gray-400 rounded outline-none px-3" value={data.description} placeholder='Enter Description' />


                    </div>

                    <div className="mb-3">
                        <label htmlFor="in/out">Income/Expense</label>
                        <select defaultValue={data.inOut} id='in/out' name='in/out' required className="w-full py-2 border border-gray-400 rounded outline-none px-3">
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <button className="btn w-full py-2 bg-[#8B5FBF] text-white rounded-md" type="submit">Update Expense
                        </button>
                    </div>
                
                </form>

            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
