import './App.css'
import { Card } from './component/Card.tsx'
import { ChaiCard } from './component/ChaiCard.tsx'
import { ChaiList } from './component/ChaiList.tsx'
import { Counter } from './component/Counter.tsx'
import { OrderForm } from './component/OrderForm.tsx'

import type { Chai } from './types.ts'

const menu: Chai[] = [
  {id: 1, name: "Masala", price: 25},
  {id: 2, name: "Lemon", price: 15},
  {id: 3, name: "Ginger", price: 30}
]

function App() {

  return (
    <>
      <div>
        <h1> Vite + React</h1>
        <ChaiCard name="Headphones" price={5000} />
        <ChaiCard name="MacBook" price={70000} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ChaiList items={menu} />
      </div>
      <div>
        <OrderForm 
        onSubmit={(order) => {
          console.log("Placed", order.name, order.cups);
        }}
        />
      </div>
      <div>
        <Card title="Godzilla King of The Monster" footer={<button>Order Now</button>} />
      </div>
    </>
  )
}

export default App
