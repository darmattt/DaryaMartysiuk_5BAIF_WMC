const products = [{id: 1, name: "Boots", price: 54, description: "Best boots ever", isLegal: true},
    {id: 2, name: "Lindt", price: 7, description: "Tasty Swiss chocolate", isLegal: true},
    {id:3, name: "Matcha", price:15, description: "Delicious high-quality matcha", isLegal: true},
    {id:4, name: "LSD", price:99, description: "High-quality reality escape", isLegal: false}
]

//imperativ
const priceFilterI = []
for (let product of products){
    if(product.price>=10&&product.price<=20) priceFilterI.push(product)
}
//deklarativ
const priceFilterD = products.filter(product => product.price >= 10 && product.price<= 20);
console.log(priceFilterI);
console.log(priceFilterD);

//imperativ
const verdoppeltI = []
for(let product of products){
    if(product.price<=10) {
        verdoppeltI.push({...product, price: product.price*2})
    }
}
//deklarativ
const verdoppeltD = products.filter(product => product.price<=10)
    .map(product => {return {...product, price: product.price*2}})
console.log(verdoppeltI)
console.log(verdoppeltD)


const arr = [1,2,3,4,5]
const obj = {id:1, name: "matcha", price:15, description: "Delicious high-quality matcha", isLegal: true}
console.log(arr)
console.log(obj)
//SPREAD
const arrCopy = [...arr]
const objCopy = {...obj}
console.log(arrCopy)
console.log(objCopy)
//REST
const [first, second, ...restArr] = arr
const {name, ...restObj} = obj
console.log(first)
console.log(second)
console.log(restArr)
console.log(name)
console.log(restObj)
//DESTRUCTURING
const [a,b] = arr
const {id, description} = obj
console.log(a)
console.log(b)
console.log(id)
console.log(description)


function sum(prods){
    let sum = 0
    if(prods.length===0){
        throw new Error("There should be more than one element!")
    }
    for(let prod of prods){
        if(typeof prod.price !== "number"){
            throw new Error("Price should be given as a number!")
        }
        sum+=prod.price
    }
    return sum
}
console.log(sum(products))