import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Shoppingcart extends Component {

  render() {
    return (
      <section class="cart">
        <div className="container">
          <div class="row">
            <div className="col-lg-5 col-md-12 my-2">
              <img
                src="../images/shopingCart.jpg"
                alt=""
                className="img-fluid d-flex align-middle"
              />
            </div>
            <div className="col-lg-7 col-md-12 my-2">
              <Table striped bordered hover className="p-2 text-center table-warning overflow-hidden " style={{}}>
                <thead>
                  <tr>
                    <th>Product id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.productsOnCart.map(p => {
                    return (
                      <tr>
                        <td>{p.id}</td>
                        <td>{p.productName}</td>
                        <td>{p.price}</td>
                        <td>{p.stock}</td>
                        <td>
                        <button
                            className="btn btn-info m-1"
                            onClick={() => this.props.minus(p)}
                          >
                            -
                          </button>
                          <span className="mx-1">{p.quantity}</span>
                          <button
                            className="btn btn-warning m-1"
                            onClick={() => this.props.plus(p)}
                          >
                            +
                          </button>
                        
                        
                        </td>
                        <td className="d-flex justify-content-center">
                          <button
                            className="btn btn-danger"
                            onClick={() => this.props.deletehandler(p.id)}
                          >
                            delete
                          </button>
                         
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Shoppingcart;
