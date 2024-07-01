import { useState } from "react"

const AddProductFrom = (probs) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();

        probs.onAddProduct({
            name, 
            price: parseFloat(price)
        
        });

    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="Add-product-form">
            <input 
                className="input"
                type="text" 
                placeholder="ชื่อสินค้า" 
                value={name}
                onChange={(e)=> setName(e.target.value) }
                required
            />

            <input
                className="input" 
                type="number"    
                placeholder="ราคา"
                value={price}
                onChange={(e)=> setPrice(e.target.value) }
                required
            />

            <button type="submit">เพิ่มสินค้า</button>
        </form>
    </div>
  )
}

export default AddProductFrom