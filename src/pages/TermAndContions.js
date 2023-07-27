import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
function TermAndContions() {
  return (
    <>
    <Meta title={"Term And Contions"}/>
    <BreadCrumb title="Term And Contions"/>
    <Container class1="policy-wrapper py-5 home-wrapper-2">
         <div className="row">
                <div className="col-12">
                    <div className="policy">
                        
                    </div>
                </div>
            </div>
    </Container>
    
</>
  )
}

export default TermAndContions