import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
    const products = [{id: 1, name: "boots", price: 54, description: "Best boots ever!", isLegal: true},
        {id: 2, name: "lindt", price: 12, description: "Best chocolate ever!", isLegal: true},
        {id:3, name: "matcha", price:23, description: "Delicious high-quality matcha", isLegal: true},
        {id:4, name: "LSD", price:99, description: "High-quality reality escape", isLegal: false}
    ];
    function handleButtonClick(){
        console.log("Someone clicked the button!")
    }
    return (
        <div>
            <h1>Demo-React</h1>
            <ProductListComponent products = {products} click = {handleButtonClick()}/>
        </div>
    )
}
function ProductListComponent(props){
    const products = props.products;
    if (products.length === 0) {
        return <p>The List is empty. There must be at least one element.</p>
    }
    return (
        <ul>
            {products.map(product => (
                <li key = {product.id}>{product.name}</li>
            ))}
        </ul>
    )
}
export default App;


















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
//
// export default App
