import React,{useState} from 'react'

export default function ProductList(props) {

    const [product,setProduct]=useState('');

    let addPrudocts=(e)=>{
        setProduct(e.target.value)
    }

    const buttonActiv =()=>{
        if (product !== '') {
            return false
        }
        else{
            return true
        }
        
    }


    return (
        <div>
            <select name="products" id="products" onChange={addPrudocts}>
                <option value="">Choose product</option>
                <option value="AC">AC</option>
                <option value="Lamp">Lamp</option>
                <option value="Stereo">Stereo</option>
                <option value="Water Heater">Water Heater</option>
            </select>
            <br/>
            <button disabled={buttonActiv()} onClick={()=>{props.addProduct(props.index,product)}}>Add Product</button>
        </div>
    )
}
