import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomHook from '../CustomHooks/CustomHook';
import Reviewr from '../Reviewr/Reviewr';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = CustomHook()
    return (
        <div className='home'>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className='home-text'>
                                <h1 className='home-text-headline'>Best Canon Camera of 2022</h1>
                                <h1 className='home-text-headline'>Popular Photography</h1>
                                <p>Canon has been one of the most dominant and prolific camera makers for more than half a century. The company released its first digital camera, the EOS D30, back in 2000, when most photographers were still loyal to their film bodies and digital was a novel concept. In 2020, however, Canon held nearly half of the global digital camera market. The company’s current lineup has options aimed at every level of photographer, from budding beginners to seasoned pros. While options are good, the wide selection of Canon cameras can be difficult to navigate, so here are some things to consider before jumping full-force into the Canon ecosystem.</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='home-img'>
                                <img src="https://shop.sg.canon/media/wysiwyg/category/cameras/camera-dslr.jpg?v=2" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='home-review-section'>
                <h2 className='home-review-section-headline'> Customer Reviews </h2>

                <div className='home-review-section-card'>
                    {
                        reviews.slice(0,3).map(review => <Reviewr
                            key={review.id}
                            review={review}
                        ></Reviewr>)

                    }

                </div>

                <Link className='home-review-section-btn' to="/REVIEWS">See All Reviews</Link>
            </div>
            <div></div>
        </div>
    );
};

export default Home;