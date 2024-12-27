function ProductRow(props) {
    console.log(props);
  return (
      <>
         
          <div className="item shopping-item">
              <div className="product-row">
              
                  {props.products && props.products.length > 0 &&
                      <div className="col-sm-3">
                          <div className="thumb-wrapper">

                              <div className="img-box">
                                  <img src="img/featured/feature-3.jpg" className="img-fluid" alt="" />
                              </div>
                              <div className="thumb-content">
                                  <p>Apple iPad</p>
                                  <p className="item-price"><strike>$400.00</strike> <b>$369.00</b></p>
                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                              </div>
                          </div>
                      </div>
                  }
                  
                  {props.products && props.products.length > 1 &&
                      <div className="col-sm-3">
                          <div className="thumb-wrapper">

                              <div className="img-box">
                                  <img src="img/featured/feature-4.jpg" className="img-fluid" alt="Headphone" />
                              </div>
                              <div className="thumb-content">
                                  <p>Sony Headphone</p>
                                  <p className="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                              </div>
                          </div>
                      </div>
                  }
                  
                  {props.products && props.products.length > 2 &&
                      <div className="col-sm-3">
                          <div className="thumb-wrapper">

                              <div className="img-box">
                                  <img src="img/featured/feature-3.jpg" className="img-fluid" alt="Macbook" />
                              </div>
                              <div className="thumb-content">
                                  <p>Macbook Air</p>

                                  <p className="item-price"><strike>$899.00</strike> <b>$649.00</b></p>
                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                              </div>
                          </div>
                      </div>
                  }
                   
                  {props.products && props.products.length > 3 &&
                      <div className="col-sm-3">
                          <div className="thumb-wrapper">

                              <div className="img-box">
                                  <img src="img/featured/feature-2.jpg" className="img-fluid" alt="Nikon" />
                              </div>
                              <div className="thumb-content">
                                  <p>Nikon DSLR</p>

                                  <p className="item-price"><strike>$315.00</strike> <b>$250.00</b></p>
                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                              </div>
                          </div>
                      </div>
                  }
              </div>
          </div>
      </>
  );
}

export default ProductRow;