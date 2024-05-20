import { useState } from 'react';
import './ProductForm'

function ProductForm(props) {

    // const [fullProductInputs, setFullProductInput] = useState({
    //     title: '',
    //     date: ''
    // })


    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');

    function titleChangeHandler(event,prevState) {
        setTitle(event.target.value);
    }
    
    function dateChangeHandler(event) {
        setDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        const productData = {
            title: newTitle,
            date: newDate
        }

        // console.log(productData)
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }

    return (<form onSubmit={submitHandler}>
        <div className='new-product__controls'>
            <div className='new-product__control'>
                <label>Title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-product__control'>
                <label>Date</label>
                <input type='date' value={newDate} min='2023-01-01' max='2023-12-12' onChange={dateChangeHandler}></input>
            </div>
            <div className='new-product_button'>
                <button type='submit'>Add Product</button>
            </div>
        </div>

    </form>)
}

export default ProductForm;