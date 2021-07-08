import React,{useState} from 'react'

export default function ProductList(props) {

    const [product,setProduct]=useState('');

    let addPrudocts=(e)=>{
        setProduct(e.target.value)
    }


    return (
        <div>
            <select name="products" id="products" onChange={addPrudocts}>
                <option value="AC"></option>
                <option value="AC">AC</option>
                <option value="Lamp">Lamp</option>
                <option value="Stereo">Stereo</option>
                <option value="Boiler">Boiler</option>
            </select>
            <br/>
            <button onClick={()=>{props.addProduct(props.index,product)}}>Add Product</button>
        </div>
    )
}
