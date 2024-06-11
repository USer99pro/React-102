

const Productitem = (probs) => {
  return (
    <div className="product-item">
            <h3>{probs.name}</h3>
            <p>price : ${probs.price}</p>
            <button onClick={probs.onAddToCart} > Add to Card</button>

    </div>
  )
}

export default Productitem