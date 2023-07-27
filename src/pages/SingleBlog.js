import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from "react-icons/hi"
import Container from '../components/Container'
import blog from "../images/blog-1.jpg"

function SingleBlog() {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to="/blogs" className='d-flex align-items-center gap-10'>
                                <HiOutlineArrowLeft className='fs-4' />Go back to Blogs</Link>
                            <h3 className="title">
                                A Beatiful Sunday Marning Renaissance
                            </h3>
                            <img src={blog}
                                className='img-fluid w-100 my-4'
                                alt="blog" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Qui dolore ad aperiam? Perspiciatis id soluta culpa
                                laboriosam et ipsam officia fugiat molestias?
                                Nulla beatae vero corporis enim dolore adipisci perferendis.
                                Deserunt saepe, iste quis commodi repudiandae eligendi
                                aut perspiciatis officiis eos adipisci vero a nesciunt
                                recusandae corporis totam earum doloribus fugiat eaque
                                sed culpa ipsam neque consequatur! Provident, odio. Quasi?</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleBlog