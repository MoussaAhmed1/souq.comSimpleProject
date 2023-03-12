// import logo from './logo.svg';
//  import logo from './souqAmazon-logo-v2.png';
import './App.css';
import React, { Component } from 'react';
import NavbarApp from './components/Navbar';
import Product from './components/Product';
import products from './MOCK_DATA.json'
import Footer from './components/footer';
import {Route , Switch} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Shoppingcart from './components/ShoppingCart';
class App extends Component {
  state = { 
    //data from server as a request
    "products":products,
    "cartCount":0,
    "productsOnCart":[],
    "filteredProducts":products
   };
   
   AddToCart = (p)=>{
      let cartCount = this.state.cartCount;
      let cart = [...this.state.productsOnCart];
      if(!cart.includes(p)){
      cartCount++;
      cart.push(p);
      // console.log(cart,"success");
      this.setState({"cartCount":cartCount,"productsOnCart":cart});
    }
    else 
    console.log("already in your Cart!!");
    //should use delay
    // console.log(this.state);
  };
   filter = (category=0)=>{
    let filteredProducts =  category !==0 ? this.state.products.filter(p=>p.category=== category)  : this.state.products ;
    this.setState({filteredProducts})
    console.log(category) ;    
 };
 //Shopping Cart functions
    delete = (productId)=>{
      let productsOnCart = this.state.productsOnCart.filter(p=> p.id !== productId);
      let cartCount=this.state.cartCount;
      cartCount--;
      this.setState({productsOnCart,cartCount})
    }
    plus = product => {
      const productsOnCart = [...this.state.productsOnCart];
      const index = productsOnCart.indexOf(product);
      const stock = productsOnCart[index].stock;
      let count = productsOnCart[index].quantity ;
      if (count < stock) {
        productsOnCart[index].quantity +=1;
      }
     this.setState({productsOnCart})
    };
    minus = product => {
      const productsOnCart = [...this.state.productsOnCart];
      const index = productsOnCart.indexOf(product);
      const stock = productsOnCart[index].stock;
      let count = productsOnCart[index].quantity ;
      if (count > 0) {
        productsOnCart[index].quantity -=1;
      }
     this.setState({productsOnCart})
    };


  render() { 
    return ( 
        <>
        <NavbarApp cartCount={this.state.cartCount}/>
       <main class="">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact render={()=> <Product filteredProducts={this.state.filteredProducts} oncountHandler={this.AddToCart} onfilter={this.filter} />}/>
          <Route path="/ShoppingCart"  render={()=> <Shoppingcart productsOnCart={this.state.productsOnCart}  deletehandler={this.delete} plus={this.plus} minus={this.minus}/>}/>
        </Switch>
        </main>
        <Footer />
      </>
     );
  }
}
 



export default App;
