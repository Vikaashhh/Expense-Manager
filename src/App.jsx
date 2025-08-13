import Navbar from './components/Navbar'
import AddExpense from './components/AddExpense'
import AllExpense from './components/AllExpense'
import ListExpense from './components/ListExpense'

function App() {
  return (
    <>
      <Navbar />
      <main className='w-[80%] mx-auto'>
        <AddExpense />
        <AllExpense />
        <ListExpense />
      </main>
    </>
  )
}

export default App
