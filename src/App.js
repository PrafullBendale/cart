
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const products=[
    {
      price:10000,
      name:"Iphone 13pro",
      quantity:0
    },
    {
      price:5000,
      name:"Sont Xperia Z",
      quantity:0
    },
    {
      price:14000,
      name:"Redmi 20",
      quantity:0
    },
    {
      price:20000,
      name:"Redmi 20 ProMax",
      quantity:0
    }
  ]

  const [productList, setproductList] = useState(products)
  const [totalAmount, settotalAmount] = useState(0)

  const incrementQuantity=(index)=>{
        let newProductList=[...productList]
        let newtotalAmount=totalAmount
        newProductList[index].quantity++
        newtotalAmount+=newProductList[index].price
        setproductList(newProductList)
        settotalAmount(newtotalAmount)
  }

  const decrementQuantity=(index)=>{
        let newProductList=[...productList]
        let newtotalAmount=totalAmount
        if(newProductList[index].quantity>0){
          newProductList[index].quantity--
          newtotalAmount-=newProductList[index].price
          settotalAmount(newtotalAmount)
        }else{
          newProductList[index].quantity=0
        }
        setproductList(newProductList)
  }

  const resetQuantity=()=>{
    let newProductList=[...productList]
    newProductList.map((products)=>{
      products.quantity=0
    })
    setproductList(newProductList)
    settotalAmount(0)
  }


  return (
    <>
    <Navbar/>
    <main className="container mt-4">
    <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
    </main>
    
    <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;
