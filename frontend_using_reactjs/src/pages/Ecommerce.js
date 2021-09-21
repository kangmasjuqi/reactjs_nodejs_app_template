import React, { useState } from 'react';
import '../App.css';

import { 
    FaHeart, FaCartPlus, FaCircle, FaUser, FaStar, FaRegStar, 
    FaFacebookSquare, FaTwitterSquare, FaRssSquare, FaEnvelopeSquare, 
} from 'react-icons/fa';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import { useFormik } from 'formik';

const Ecommerce = () => {

  const addToCart = (values) => {
    console.log("hey addToCart")
    console.log(values)
    alert("Thank you. we are processing your request : \n" + JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues: {
      color_option: '',
      size_option: '',
    },
    onSubmit: values => addToCart(values),
  });

  const defaultColorOptionClass = {
    green : 'btn btn-default text-center',
    blue : 'btn btn-default text-center',
    purple : 'btn btn-default text-center',
    red : 'btn btn-default text-center',
    orange : 'btn btn-default text-center',
  };
  
  const defaultSizeOptionClass = {
    small : 'btn btn-default text-center',
    medium : 'btn btn-default text-center',
    large : 'btn btn-default text-center',
    extralarge : 'btn btn-default text-center',
  };

  const handleColorOptionChanges = (clickedOption) => {

    const newStyles = {};
    for (const [key] of Object.entries(defaultColorOptionClass)) {
      if(clickedOption === key){
        newStyles[key] = 'btn btn-default text-center clicked-option'
      } else {
        newStyles[key] = 'btn btn-default text-center'
      }
    }
    setColorOptionLabelClass(newStyles)
  };

  const handleSizeOptionChanges = (clickedOption) => {

    const newStyles = {};
    for (const [key] of Object.entries(defaultSizeOptionClass)) {
      if(clickedOption === key){
        newStyles[key] = 'btn btn-default text-center clicked-option'
      } else {
        newStyles[key] = 'btn btn-default text-center'
      }
    }
    setSizeOptionLabelClass(newStyles)
  };

  const [colorOptionLabelClass, setColorOptionLabelClass] = useState(defaultColorOptionClass);
  const [sizeOptionLabelClass, setSizeOptionLabelClass] = useState(defaultSizeOptionClass);

    return (

      <section className="content">

        <div className="card card-solid">
          <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <h3 className="d-inline-block d-sm-none">LOWA Men’s Renegade GTX Mid Hiking Boots Review</h3>
                  <div className="col-12">
                    <img src="https://adminlte.io/themes/v3/dist/img/prod-1.jpg" className="product-image" alt="Product A" />
                  </div>
                  <div className="col-12 product-image-thumbs">
                    <div className="product-image-thumb active"><img src="https://adminlte.io/themes/v3/dist/img/prod-1.jpg" alt="Product 1" /></div>
                    <div className="product-image-thumb" ><img src="https://adminlte.io/themes/v3/dist/img/prod-2.jpg" alt="Product 2" /></div>
                    <div className="product-image-thumb" ><img src="https://adminlte.io/themes/v3/dist/img/prod-3.jpg" alt="Product 3" /></div>
                    <div className="product-image-thumb" ><img src="https://adminlte.io/themes/v3/dist/img/prod-4.jpg" alt="Product 4" /></div>
                    <div className="product-image-thumb" ><img src="https://adminlte.io/themes/v3/dist/img/prod-5.jpg" alt="Product 5" /></div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <h3 className="my-3">LOWA Men’s Renegade GTX Mid Hiking Boots Review</h3>
                  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</p>
    
                  <hr />

                  <h4>Available Colors</h4>
                  <div className="btn-group btn-group-toggle row" data-toggle="buttons">
                    <div className="col-xs-12 col-md-12">
                      <label className={colorOptionLabelClass.green}>
                        <input 
                          name="color_option" autoComplete="off" type="radio"
                          onChange={() => {
                            handleColorOptionChanges('green')
                            formik.setFieldValue('color_option', 'green')
                          }}
                          id="color_option_green" 
                          value="green" 
                        />
                        Green <br /> <FaCircle className="fa-2x text-green"/>
                      </label>
                      <label className={colorOptionLabelClass.blue}>
                        <input 
                          name="color_option" autoComplete="off" type="radio"
                          onChange={() => {
                            handleColorOptionChanges('blue')
                            formik.setFieldValue('color_option', 'blue')
                          }}
                          id="color_option_blue" 
                          value="blue" 
                        />
                        Blue <br /> <FaCircle className="fa-2x text-blue"/>
                      </label>
                      <label className={colorOptionLabelClass.purple}>
                        <input 
                          name="color_option" autoComplete="off" type="radio"
                          onChange={() => {
                            handleColorOptionChanges('purple')
                            formik.setFieldValue('color_option', 'purple')
                          }}
                          id="color_option_purple" 
                          value="purple" 
                        />
                        Purple <br /> <FaCircle className="fa-2x text-purple"/>
                      </label>
                      <label className={colorOptionLabelClass.red}>
                        <input 
                          name="color_option" autoComplete="off" type="radio"
                          onChange={() => {
                            handleColorOptionChanges('red')
                            formik.setFieldValue('color_option', 'red')
                          }}
                          id="color_option_red" 
                          value="red" 
                        />
                        Red <br /> <FaCircle className="fa-2x text-red"/>
                      </label>
                      <label className={colorOptionLabelClass.orange}>
                        <input 
                          name="color_option" autoComplete="off" type="radio"
                          onChange={() => {
                            handleColorOptionChanges('orange')
                            formik.setFieldValue('color_option', 'orange')
                          }}
                          id="color_option_orange" 
                          value="orange" 
                        />
                        Orange <br /> <FaCircle className="fa-2x text-orange"/>
                      </label>
                    </div>
                  </div>

                  <h4 className="mt-3">Size <small>Please select one</small></h4>
                  <div className="btn-group btn-group-toggle row" data-toggle="buttons">
                    <div className="col-xs-12 col-md-12">
                      <label className={sizeOptionLabelClass.small}>
                        <input name="size_option" autoComplete="off" type="radio"
                          onChange={() => {
                            handleSizeOptionChanges('small')
                            formik.setFieldValue('size_option', 'small')
                          }}
                          id="size_option_b1" 
                          value="small"
                          />
                        <span className="text-xl">S</span> <br /> Small
                      </label>
                      <label className={sizeOptionLabelClass.medium}>
                        <input name="size_option" autoComplete="off" type="radio"
                          onChange={() => {
                            handleSizeOptionChanges('medium')
                            formik.setFieldValue('size_option', 'medium')
                          }}
                          id="size_option_b2" 
                          value="medium"
                          />
                        <span className="text-xl">M</span> <br /> Medium
                      </label>
                      <label className={sizeOptionLabelClass.large}>
                        <input name="size_option" autoComplete="off" type="radio"
                          onChange={() => {
                            handleSizeOptionChanges('large')
                            formik.setFieldValue('size_option', 'large')
                          }}
                          id="size_option_b3" 
                          value="large"
                          />
                        <span className="text-xl">L</span> <br /> Large
                      </label>
                      <label className={sizeOptionLabelClass.extralarge}>
                        <input name="size_option" autoComplete="off" type="radio"
                          onChange={() => {
                            handleSizeOptionChanges('extralarge')
                            formik.setFieldValue('size_option', 'extralarge')
                          }}
                          id="size_option_b4" 
                          value="extralarge"
                          />
                        <span className="text-xl">XL</span> <br /> Xtra-Large
                      </label>
                    </div>
                  </div>

                  <div className="bg-gray py-2 px-3 mt-4">
                    <h2 className="mb-0">
                      $80.00
                    </h2>
                    <h4 className="mt-0">
                      <small>Ex Tax: $80.00 </small>
                    </h4>
                  </div>
    
                  <div className="mt-4">
                    <button type="submit" className="btn btn-primary btn-lg btn-flat" style={{margin: '3px'}}>
                      <FaCartPlus /> Add to Cart
                    </button>
    
                    <button type="submit" className="btn btn-default btn-lg btn-flat">
                      <FaHeart /> Add to Wishlist
                    </button>
                  </div>

                  <div className="mt-4 product-share">
                    <a href="/#" className="text-gray socmed-button">
                      <FaFacebookSquare />
                    </a>
                    <a href="/#" className="text-gray socmed-button">
                      <FaTwitterSquare />
                    </a>
                    <a href="/#" className="text-gray socmed-button">
                      <FaEnvelopeSquare />
                    </a>
                    <a href="/#" className="text-gray socmed-button">
                      <FaRssSquare />
                    </a>
                  </div>
    
                </div>
              </div>
            </form>
            <div className="row mt-4">
              <div className="tab-content p-3" id="nav-tabContent">
                <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
                    <Tab eventKey="description" title="Description">
                        <div>
                            description dolor sit amet description dolor sit amet
                            description dolor sit amet description dolor sit amet 
                            description dolor sit amet description dolor sit amet
                            description dolor sit amet description dolor sit amet
                            description dolor sit amet description dolor sit amet 
                            description dolor sit amet description dolor sit amet
                            description dolor sit amet description dolor sit amet
                            description dolor sit amet description dolor sit amet 
                            description dolor sit amet description dolor sit amet
                            description dolor sit amet description dolor sit amet
                            description dolor sit amet description dolor sit amet 
                            description dolor sit amet description dolor sit amet
                        </div>
                    </Tab>
                    <Tab eventKey="review" title="Review">
                        <div>
                            review dolor sit amet review dolor sit amet
                            review dolor sit amet review dolor sit amet review dolor sit amet
                            review dolor sit amet
                            review dolor sit amet review dolor sit amet
                            review dolor sit amet review dolor sit amet review dolor sit amet
                            review dolor sit amet
                            review dolor sit amet review dolor sit amet
                            review dolor sit amet review dolor sit amet review dolor sit amet
                            review dolor sit amet
                            review dolor sit amet review dolor sit amet
                            review dolor sit amet review dolor sit amet review dolor sit amet
                            review dolor sit amet
                        </div>
                    </Tab>
                    <Tab eventKey="rating" title="Rating">
                      <div className="row">
                          <div className="col-xs-12 col-md-12">
                            rating dolor sit amet rating dolor sit amet<br/>
                            rating dolor sit amet rating dolor sit amet<br/>
                          </div>
                          <div className="col-xs-12 col-md-6 text-center">
                              <h1 className="rating-num">
                                  4.0</h1>
                              <div className="rating">
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                  <FaStar />
                                  <FaRegStar />
                              </div>
                              <div>
                                <FaUser /> 1,050,008 total
                              </div>
                          </div>
                          <div className="col-xs-12 col-md-6">
                              <div className="row rating-desc">
                                  <div className="col-xs-3 col-md-3 text-right">
                                      <FaStar />5
                                  </div>
                                  <div className="col-xs-8 col-md-9">
                                      <div className="progress progress-striped">
                                          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                                              aria-valuemin="0" aria-valuemax="100" style={{ width : '80%' }}>
                                              <span className="sr-only">80%</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-xs-3 col-md-3 text-right">
                                      <FaStar />4
                                  </div>
                                  <div className="col-xs-8 col-md-9">
                                      <div className="progress">
                                          <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20"
                                              aria-valuemin="0" aria-valuemax="100" style={{ width : '60%' }}>
                                              <span className="sr-only">60%</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-xs-3 col-md-3 text-right">
                                      <FaStar />3
                                  </div>
                                  <div className="col-xs-8 col-md-9">
                                      <div className="progress">
                                          <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20"
                                              aria-valuemin="0" aria-valuemax="100" style={{ width : '40%' }}>
                                              <span className="sr-only">40%</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-xs-3 col-md-3 text-right">
                                      <FaStar />2
                                  </div>
                                  <div className="col-xs-8 col-md-9">
                                      <div className="progress">
                                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="20"
                                              aria-valuemin="0" aria-valuemax="100" style={{ width : '20%' }}>
                                              <span className="sr-only">20%</span>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-xs-3 col-md-3 text-right">
                                      <FaStar />1
                                  </div>
                                  <div className="col-xs-8 col-md-9">
                                      <div className="progress">
                                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80"
                                              aria-valuemin="0" aria-valuemax="100" style={{ width : '15%' }}>
                                              <span className="sr-only">15%</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
  
      </section>        
    );
    
}

export default Ecommerce;
