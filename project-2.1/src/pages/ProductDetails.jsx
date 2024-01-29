import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { toast } from "react-toastify"

import { useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slice/CartSlice';


import CommonSection from '../components/ui/CommonSection'
import Helmet from "../components/helmet/Helmet"
import products from '../assets/data/products';
import ProductsList from "../components/ui/ProductList"

import "../styles/ProductDetails.css"
import { motion } from 'framer-motion';



import { db } from '../firebase.config';
import { doc, getDoc } from 'firebase/firestore';

import useGetData from '../customs-hooks/useGetData';











const ProductDetails = () => {

  const { id } = useParams()



  const [product, setProduct] = useState({})

  const docRef = doc(db, "products", id)

  useEffect(() => {

    const getProduct = async () => {
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setProduct(docSnap.data())
      }

      else {
        console.log("No Product..!!")
      }

    }

    getProduct()

  }, [])





  const { data: products } = useGetData("products")








  // const product = products.find((item) => item.id === id)

  const { imgUrl, productName, price, description, shortDesc, category } = product


  const [tab, setTab] = useState("desc")
  const [rating, setRating] = useState(null)

  const reviewUser = useRef("")
  const reviewMsg = useRef("")

  const dispatch = useDispatch()


  const relatedProducts = products.filter(item => item.category === category)



  const submitHandler = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value


    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    }



    console.log(reviewObj)
    toast.success("Review Submitted Succesfully..!!")
  }



  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })

    )
    toast.success("Product added Successfully..!!")

  }


  useEffect(() => {
    window.scrollTo(0, 0)

  }, [product])




  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />



      <section className='pt-3'>
        <Container>
          <Row>



            <Col lg="6">
              <img
                style={{ width: "70%", display: "block", margin: "auto" }}
                src={imgUrl}
                alt=""
              />
            </Col>





            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>

                <div className="product__rating d-dlex align-items-center gap-5 mb-3">
                  <div>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-fill"></i></span>
                    <span><i class="ri-star-half-s-line"></i></span>
                  </div>


                  {/* <p>(<span>{avgRating}</span> ratings)</p> */}
                </div>

                <div className='d-flex align-items-center gap-5'>
                  <span className='product__price'>${price}</span>
                  <span> Category: {category ? category.toUpperCase() : 'N/A'}</span>

                </div>

                <p className='mt-3'>{shortDesc}</p>

                <motion.button whileTap={{ scale: 1.2 }} onClick={addToCart} className="buy__btn">Add to Cart</motion.button>

              </div>
            </Col>

          </Row>
        </Container>

      </section>







      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab === "desc" ? 'active__tab' : ""}`} onClick={() => setTab("desc")}>Description</h6>
                <h6 className={`${tab === "rev" ? 'active__tab' : ""}`} onClick={() => setTab("rev")}>
                  Reviews
                </h6>
              </div>

              {
                tab === "desc" ? (
                  <div className="tab__content mt-5">
                    <p>{description}</p>
                  </div>
                )

                  : (<div className='product__review mt-5'>

                    <div className="review__wrapper">
                      {/* <ul>
                        {
                          reviews?.map((item, index) => (
                            <li key={index} className='mb-4'>
                              <h6>Jonh Doe</h6>
                              <span>{item.rating} ( rating)</span>
                              <p>{item.text}</p>

                            </li>
                          ))
                        }
                      </ul> */}



                      <div className="review__form">
                        <h4>Share your valuable experience. </h4>
                        <form action="" onSubmit={submitHandler}>

                          <div className="form__group">
                            <input type="text" placeholder='Enter name' ref={reviewUser} required />
                          </div>

                          <div className="form__group d-flex align-items-center gap-5 rating__group" >
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>1<i class="ri-star-fill"></i></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>2<i class="ri-star-fill"></i></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>3<i class="ri-star-fill"></i></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>4<i class="ri-star-fill"></i></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>5<i class="ri-star-fill"></i></motion.span>
                          </div>


                          <div className="form__group">
                            <textarea rows={4} type="text" placeholder='Review Message...' ref={reviewMsg} required />
                          </div>


                          <motion.button whileTap={{ scale: 1.2 }} type='submit' className="buy__btn">Submit</motion.button>




                        </form>
                      </div>

                    </div>

                  </div>)

              }
            </Col>






            <Col lg="12" className='mt-5 mb-3'>
              <h2 className="related__title">You might also like</h2>
            </Col>

            <ProductsList data={relatedProducts} />












          </Row>
        </Container>



      </section>







    </Helmet>
  )
}

export default ProductDetails