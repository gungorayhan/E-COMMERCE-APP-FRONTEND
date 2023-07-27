import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome,AiOutlineMail} from 'react-icons/ai'
import {BiPhoneCall,BiInfoCircle} from 'react-icons/bi'
import Container from '../components/Container'
function Contact() {
  return (
    <>
        <Meta title={"Contact US"}/>
        <BreadCrumb title="Contact US"></BreadCrumb>
        <Container class1="contact-wrapper home-wrapper-2 py-5">
          <div className="row">
              <div className="col-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11977.187222744464!2d27.152453981707783!3d41.36763581503399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1683900085548!5m2!1str!2str"
                  width="600"
                  height="450" 
                  className='border-0 w-100'
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="col-12">
                <div className="contact-inner-wrapper d-flex justify-content-between">
                  <div>
                    <h3 className="contact-title mb-4">Contact</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                      <div>
                        <input type="text" className="form-control" placeholder='Name' />
                      </div>
                      <div>
                        <input type="emial" className="form-control" placeholder='Email' />
                      </div>
                      <div>
                        <input type="tel" className="form-control" placeholder='Mobile Number' />
                      </div>
                      <div>
                        <textarea name="" id="" className='w-100 form-control' placeholder='Comment' cols="30" rows="4"></textarea>
                      </div>
                      <div>
                        <button className="button border-0">Submit</button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h3 className="contact-title mb-4">Get in touch with us</h3>
                    <div>
                      <ul className="ps-0">
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <AiOutlineHome className='fs-5'/>
                          <address className='mb-0'>Kırklareli/Lüleburgaz</address>
                        </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <BiPhoneCall className='fs-5'/>
                          <a href="tel:+0288">0288</a>
                        </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <AiOutlineMail className='fs-5'/>
                          <a href="mail:gngr.ayhan@gmail.com">
                          gngr.ayhan@gmail.com
                          </a>
                        </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <BiInfoCircle className='fs-5'/>
                          <p className='mb-0'>Monday-Friday</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Container>
    </>
  )
}

export default Contact