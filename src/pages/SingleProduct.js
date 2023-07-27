import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component"

import ReactImageZoom from 'react-image-zoom';

import Color from '../components/Color';

import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

import { Link } from 'react-router-dom'

import watch from "../images/watch.jpg"

import Container from '../components/Container'
function SingleProduct() {
    const props = {
        width: 400,
        height: 600,
        zoomWidth: 500,
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP6V3ref_VW_34FR+watch-40-alum-silver-nc-se_VW_34FR_WF_CO_GEO_TR?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683237043713"
    };
    const [orderedProduct, setOrderedProduct] = useState(true);

    const copyToClipboard = (text) => {
        console.log("text", text);
        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    }

    return (
        <>
            <Meta title={"Product"} />
            <BreadCrumb title="Product" />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-15">
                            <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP6V3ref_VW_34FR+watch-40-alum-silver-nc-se_VW_34FR_WF_CO_GEO_TR?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683237043713" alt=""
                                className="img-fluid" />
                            </div>
                            <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP6V3ref_VW_34FR+watch-40-alum-silver-nc-se_VW_34FR_WF_CO_GEO_TR?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683237043713" alt=""
                                className="img-fluid" />
                            </div>
                            <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP6V3ref_VW_34FR+watch-40-alum-silver-nc-se_VW_34FR_WF_CO_GEO_TR?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683237043713" alt=""
                                className="img-fluid" />
                            </div>
                            <div><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP6V3ref_VW_34FR+watch-40-alum-silver-nc-se_VW_34FR_WF_CO_GEO_TR?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683237043713" alt=""
                                className="img-fluid" />
                            </div>

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className='title'>
                                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                                </h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">$ 100</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 t-review'>(2 Reviews)</p>
                                </div>
                                <a className='review-btn' href="#review">Write a Review</a>
                            </div>
                            <div className=" py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Type:</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Brand:</h3>
                                    <p className="product-data">Havells</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Categories:</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Tags</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Availablity:</h3>
                                    <p className="product-data">In Stock</p>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h3 className="product-heading">Size:</h3>
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column  mt-2 mb-3">
                                    <h3 className="product-heading">Color:</h3>
                                    <Color />
                                </div>
                                <div className="d-flex align-items-center gap-15 flex-row  mt-2 mb-3">
                                    <h3 className="product-heading">Quantity:</h3>
                                    <div className=''>
                                        <input type="number"
                                            name=''
                                            min={1}
                                            max={10}
                                            className='form-control'
                                            style={{ width: "70px" }}
                                            id=''
                                        />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className="button border-0">
                                            Add to Cart
                                        </button>
                                        <button className="button signup">
                                            Buy It Now
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <a href="">
                                            <TbGitCompare className='fs-5 me-2' />Add to Compare
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <AiOutlineHeart className='fs-5 me-2' />Add to Wishlist
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column my-3">
                                    <h3 className="product-heading">Shipping & Returns</h3>
                                    <p className="product-data">
                                        Free shipping and returns available on all orders!<br />
                                        We ship all US domestic orders within <b>5-10 Businesss days!</b>
                                    </p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-3">
                                    <h3 className="product-heading">Product Link</h3>
                                    <a href="javascript:void(0);"
                                        onClick={() => { copyToClipboard("https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP6V3ref_VW_34FR+watch-40-alum-silver-nc-se_VW_34FR_WF_CO_GEO_TR?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683237043713") }}>
                                        Copy Product Lİnk
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Nemo tenetur quasi ab, unde consectetur similique repellat, soluta tempore,
                                    illo rem ea itaque? Consequuntur incidunt nostrum neque.
                                    Nobis voluptatem rerum quasi.
                                </p>
                            </div>

                        </div>
                    </div>
            </Container>
            
            <Container class1="reviews-wrapper home-wrapper-2">
                <div className="row">
                        <div className="col-12">
                            <h3 id='review'>Reviews</h3>
                            <div className="review-inner-wrapper">

                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">Customer Reviews</h4>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>

                                    </div>
                                    {orderedProduct &&
                                        (<div>
                                            <a href="" className='text-dark text-decoration-underline'>Write a Review</a>
                                        </div>)}
                                </div>

                                <div className="review-form py-4">
                                    <h4>Write a Review</h4>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value="3"
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                name=""
                                                id=""
                                                className='w-100 form-control'
                                                cols="30" rows="4"
                                                placeholder='Comments'></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className="button border-0">Submit</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className='mb-0'>Ayhan</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value="3"
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p mt-3>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Perspiciatis, obcaecati voluptate excepturi qui, vero
                                            aliquid amet nisi iusto id quod ab sunt quasi
                                            ipsam pariatur iste quibusdam reprehenderit. Dolor, commodi!
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            </Container>
           
           <Container class1="popular-wrapper home-wrapper-2 py-5">
            <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Our Popular Products</h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
           </Container>
        </>
    )
}

export default SingleProduct