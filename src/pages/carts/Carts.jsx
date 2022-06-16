import React from 'react'
import './carts.css'
import {useCart} from 'react-use-cart'


export default function Carts() {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } 
    = useCart();
    if(isEmpty) return <h5 className="text-center py-5">my cart is empty</h5>


  return (
<>
<div className="container-fluid py-3">
    <div className="row justify-content-center">
    <h4 className="text-center py-5 text-decoration-underline">My cart</h4>

        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-3  shadow ">

            <div className="d-flex gap-5 justify-content-center py-4">
            <h4 className="position-relative fw-bolder text-title">cart <span className="position-absolute translate-middle rounded-pill badge bg-danger mx-3">{totalUniqueItems}</span></h4>
            <p className="fw-bolder text-title"> total Items <span className="position-absolute translate-middle rounded-pill badge bg-success mx-3">{totalItems}</span>
        </p>
            </div>

            <div >
                <table className="table table-light table-hover m-0">
                <tbody>
                    {items.map((item, index) => {
                        return(
                            <tr key={index} className="align-middle">
                            <td><img src={item.img} className="img-cart" alt={item.title} /></td>
                            <td> {item.title}</td>
                            <td>$ {item.price}</td>
                            <td>quantity: {item.quantity}</td>
                            <td>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity -1 )} className="btn btn-outline-dark m-1">-</button>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity +1 )} className="btn btn-outline-dark m-1">+</button>
                                <button onClick={() => removeItem(item.id)} className="btn btn-outline-danger m-2">Remove</button>
                            </td>
                            </tr>
                        )
                    })

                    }
                </tbody>
                
                </table>
            </div>

            <div className="d-flex justify-content-between py-3">
            <button onClick={() => emptyCart()} className="btn btn-outline-danger">Clear All</button>
                <h3>Total Price: ${cartTotal}</h3>
            </div>
        </div>
    </div>
    </div>
</>
  )
}
