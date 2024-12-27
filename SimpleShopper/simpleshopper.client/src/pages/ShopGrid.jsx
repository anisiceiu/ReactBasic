import 'react';
import Header from './Header';
import Footer from './Footer';
function ShopGrid() {

    const onFilterClick = (e) => {
        if (e.target) {
            let el = e.target;
            $('.featured__controls li').removeClass('active');
            $(el).addClass('active');
        }
    };

  return (
      <>
          <Header />
          <section>
              <div className="container-xl">
                  <div className="row">
                      <div className="col-md-12">
                          <div className="featured__controls">
                              <ul>
                                  <li onClick={(e)=>onFilterClick(e)} className="active" data-filter="*">All</li>
                                  <li onClick={(e) => onFilterClick(e)} data-filter=".oranges">Oranges</li>
                                  <li onClick={(e) => onFilterClick(e)} data-filter=".fresh-meat">Fresh Meat</li>
                                  <li onClick={(e) => onFilterClick(e)} data-filter=".vegetables">Vegetables</li>
                                  <li onClick={(e) => onFilterClick(e)} data-filter=".fastfood">Fastfood</li>
                              </ul>
                          </div>
                          <div className="shopping">
                              <div className="item shopping-item active">
                                  <div className="product-row">
                                      <div className="col-sm-3">
                                          <div className="thumb-wrapper">

                                              <div className="img-box">
                                                  <img src="img/product/product-1.jpg" className="img-fluid" alt="" />
                                              </div>
                                              <div className="thumb-content">
                                                  <p>Apple iPad</p>
                                                  <p className="item-price"><strike>$400.00</strike> <b>$369.00</b></p>
                                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-3">
                                          <div className="thumb-wrapper">

                                              <div className="img-box">
                                                  <img src="img/product/product-2.jpg" className="img-fluid" alt="Headphone" />
                                              </div>
                                              <div className="thumb-content">
                                                  <p>Sony Headphone</p>
                                                  <p className="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
                                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-3">
                                          <div className="thumb-wrapper">

                                              <div className="img-box">
                                                  <img src="img/product/product-3.jpg" className="img-fluid" alt="Macbook" />
                                              </div>
                                              <div className="thumb-content">
                                                  <p>Macbook Air</p>

                                                  <p className="item-price"><strike>$899.00</strike> <b>$649.00</b></p>
                                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-3">
                                          <div className="thumb-wrapper">

                                              <div className="img-box">
                                                  <img src="img/product/product-4.jpg" className="img-fluid" alt="Nikon" />
                                              </div>
                                              <div className="thumb-content">
                                                  <p>Nikon DSLR</p>

                                                  <p className="item-price"><strike>$315.00</strike> <b>$250.00</b></p>
                                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="item shopping-item">
                                  <div className="product-row">
                                      <div className="col-sm-3">
                                          <div className="thumb-wrapper">

                                              <div className="img-box">
                                                  <img src="img/product/product-5.jpg" className="img-fluid" alt="Play Station" />
                                              </div>
                                              <div className="thumb-content">
                                                  <p>Sony Play Station</p>
                                                  <p className="item-price"><strike>$289.00</strike> <span>$269.00</span></p>

                                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-3">
                                          <div className="thumb-wrapper">

                                              <div className="img-box">
                                                  <img src="img/product/product-6.jpg" className="img-fluid" alt="Macbook" />
                                              </div>
                                              <div className="thumb-content">
                                                  <p>Macbook Pro</p>
                                                  <p className="item-price"><strike>$1099.00</strike> <span>$869.00</span></p>

                                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-3">
                                          <div className="thumb-wrapper">

                                              <div className="img-box">
                                                  <img src="img/product/product-7.jpg" className="img-fluid" alt="Speaker" />
                                              </div>
                                              <div className="thumb-content">
                                                  <p>Bose Speaker</p>
                                                  <p className="item-price"><strike>$109.00</strike> <span>$99.00</span></p>

                                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-3">
                                          <div className="thumb-wrapper">

                                              <div className="img-box">
                                                  <img src="img/product/product-8.jpg" className="img-fluid" alt="Galaxy" />
                                              </div>
                                              <div className="thumb-content">
                                                  <p>Samsung Galaxy S8</p>
                                                  <p className="item-price"><strike>$599.00</strike> <span>$569.00</span></p>

                                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="item shopping-item">
                                  <div className="product-row">
                                      <div className="col-sm-3">
                                          <div className="thumb-wrapper">

                                              <div className="img-box">
                                                  <img src="img/product/product-9.jpg" className="img-fluid" alt="iPhone" />
                                              </div>
                                              <div className="thumb-content">
                                                  <p>Apple iPhone</p>
                                                  <p className="item-price"><strike>$369.00</strike> <span>$349.00</span></p>

                                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-3">
                                          <div className="thumb-wrapper">

                                              <div className="img-box">
                                                  <img src="img/product/product-10.jpg" className="img-fluid" alt="Canon" />
                                              </div>
                                              <div className="thumb-content">
                                                  <p>Canon DSLR</p>
                                                  <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>

                                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-3">
                                          <div className="thumb-wrapper">

                                              <div className="img-box">
                                                  <img src="img/product/product-11.jpg" className="img-fluid" alt="Pixel" />
                                              </div>
                                              <div className="thumb-content">
                                                  <p>Google Pixel</p>
                                                  <p className="item-price"><strike>$450.00</strike> <span>$418.00</span></p>

                                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-sm-3">
                                          <div className="thumb-wrapper">

                                              <div className="img-box">
                                                  <img src="img/product/product-12.jpg" className="img-fluid" alt="Watch" />
                                              </div>
                                              <div className="thumb-content">
                                                  <p>Apple Watch</p>
                                                  <p className="item-price"><strike>$350.00</strike> <span>$330.00</span></p>

                                                  <a href="#" className="btn btn-primary">Add to Cart</a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                          <nav aria-label="Page navigation example">
                              <ul className="pagination justify-content-center">
                                  <li className="page-item disabled">
                                      <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                  </li>
                                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                                  <li className="page-item">
                                      <a className="page-link" href="#">Next</a>
                                  </li>
                              </ul>
                          </nav>
                      </div>
                  </div>

              </div>
          </section>
          <Footer />
      </>
  );
}

export default ShopGrid;