import { useState } from "react"
import AddProductFrom from "./AddProductFrom"
import Productitem from "./Productitem";


const ProductList = () => {

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Product 1",
            price: 100
        },
        {
            id: 2,
            name: "Product 2",
            price: 200
        },
        {
            id: 3,
            name: "Product 3",
            price: 300
        },
        {
            id: 4,
            name: "Product 4",
            price: 400
        },
    ])
    
    const handleAddProduct = (newProduct) => {
        setProducts([...products,
            {id: products.length + 1, ...newProduct},

        ])
    };

    const [cartItems,setCartItems] = useState([])


    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product])
    };

  return (
    <div className="ProductList">
       <h2>Product</h2>
       <AddProductFrom onAddProduct={handleAddProduct} />
       <div className="Product-grid">
        {
            products.map((product) => (
                <Productitem
                    key = {product.id}
                    name = {product.name}
                    price = {product.price}
                    onAddToCart ={ () => handleAddToCart(product)}
                />
            ))
        }
       </div>

        
       <h2> Cart </h2>
       {cartItems.length === 0? (<p>ไม่มีสินค้าในตะกร้า</p>) :
        (
            <ul className="cart-items"> 
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} ราคา {item.price} บาท
                   
                    </li>
                    
                ))}
            </ul>
        )
       }
    </div>
  )

}

export default ProductList