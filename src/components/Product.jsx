import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {FaCookieBite ,FaLaptop,FaSortAmountDownAlt,FaMobile , FaCartPlus } from 'react-icons/fa';
// import { IoFastFoodOutline } from "react-icons/io";
// import { IoFastFoodOutline } from "react-icons/fc";
// import Img1 from '../images/products/food/Sherry.jpg'
import Slider from './Slider';
export default function Product(props) {
    let {filteredProducts} = props;
    
    return (
        <div className="products">
        <Slider />
            <div className="container">
                <div className="row">
            <h1 className="text-center my-2">Products</h1>
            <div class="btn-group btn-group-lg d-flex justify-content-center" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-warning" onClick={()=>props.onfilter(0)}>All <FaSortAmountDownAlt style={{"font-size":"1.3em","margin-top":"-15px"}} /> </button>
                <button type="button" class="btn btn-warning" onClick={()=>props.onfilter("food")}>Food <FaCookieBite style={{"font-size":"1.3em","margin-top":"-15px"}}  /> </button>
                <button type="button" class="btn btn-warning" onClick={()=>props.onfilter("Phones")}>Phones <FaMobile style={{"font-size":"1.3em","margin-top":"-15px"}} /></button>
                <button type="button" class="btn btn-warning" onClick={()=>props.onfilter("Laptops")}>Laptops <FaLaptop style={{"font-size":"1.3em","margin-top":"-15px"}}  /></button>
            </div>
            {filteredProducts.map(product=>
               <div className="col-md-6 col-lg-4 d-flex my-3 justify-content-center">
                    <Card style={{ width: '18rem' }} key={product.id} className="shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFB830" fill-opacity="1" d="M0,288L48,256C96,224,192,160,288,138.7C384,117,480,139,576,165.3C672,192,768,224,864,245.3C960,267,1056,277,1152,250.7C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>                        <Card.Img className="img-fluid" variant="top"   src={product.img} />
                        <Card.Body>
                            <Card.Title className="text-primary">{product.productName}</Card.Title>
                            <Card.Text>
                            {product.description}
                            </Card.Text>
                            <div className="text-center my-2">
                                <h6 className="text-primary">{product.price}</h6>
                                <Button variant="warning" className="" onClick={() => props.oncountHandler(product)}>Add to Cart <FaCartPlus /></Button>
                            </div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFB830" fill-opacity="1" d="M0,256L1440,256L1440,0L0,0Z"></path></svg> */}
                        </Card.Body>
                        </Card>
               </div>
                )}
                </div>
            </div>
        </div>
    )
}
