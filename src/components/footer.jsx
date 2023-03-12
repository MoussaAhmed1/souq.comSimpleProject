import React, { Component } from "react";
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
class Footer extends Component {
  state = {
    fItems: [
      {
        header: "zay shop",
        lists: ["123 suez mohamed hafez", "01008813576", "mousa@mail.com"]
      },
      {
        header: "product",
        lists: [
          "luxury",
          "sport wear",
          " men shos",
          "women shos",
          "dress",
          "GYM accssoris"
        ]
      },
      {
        header: "further info",
        lists: ["home", "About us", "shop location", "FSQ", "contact"]
      }
    ]
  };
  render() {
    return (
      <>
        <div className="container-fluid bg-dark text-light p-3">
          <div className="row">
            {this.state.fItems.map((item,key) => (
              <div className="col-md-4" key={key}>
                <h3 key={key} style={{"text-transform": "uppercase"}} className="text-primary py-3 my-2 border-bottom text-center">{item.header}</h3>
                <ul>
                  {
                    
                  this.state.fItems[key].lists.map(litem => 
                    {
                      
                     return (
                    <li>{litem}</li>
                  )})}
                </ul>
              </div>
            ))}
          </div>
          <hr/>
          <div className="text-center m-4">
                <FaFacebookF className="mx-2 text-primary" />
                <FaTwitter className="mx-2 text-primary" />
                <FaInstagram className="mx-2 text-primary" />
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
