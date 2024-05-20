import './NewProduct.css'
import ProductForm from './ProductForm';
import './ProductForm.css'

function NewProduct(props) {

    function saveProduct(product) {
        console.log("I am inside new Product");
        console.log(product)

        // calling parent function
        props.pradeep(product);
    }

    return (
        <div className='new-product'>
            <ProductForm onSaveProduct = {saveProduct}></ProductForm>
        </div>
    )
}

export default NewProduct;