import React from 'react'
import './home.css'
import Cards from '../cards/Cards'
import data from '../../Data'


export default function Home() {
  return (
    <div className="container">
        <h3 className="text-center mt-5 text-uppercase">shop page</h3>
        <div className="container py-4">
            <div className="row">
            {data.products.map((item, index) => {
                return (
                    <Cards img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                )
            })}
            </div>
        </div>
    </div>
  )
}
