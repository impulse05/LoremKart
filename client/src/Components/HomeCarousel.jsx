import React from 'react'
import { Carousel } from 'react-bootstrap';



export default function HomeCarousel({ caruselItems = [
    { link: "https://via.placeholder.com/1200x400", text: "first" },
    { link: "https://via.placeholder.com/1200x400", text: "second" },
    { link: "https://via.placeholder.com/1200x400", text: "third" },
] }) {

    return (
        <section className="carousel-section mt-5 text-center">
            <h2 className='m-4'>Discover More</h2>
            <Carousel>
                {
                    caruselItems.map((item) => {
                        return <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item.link}
                                alt={item.text} />
                        </Carousel.Item>
                    })
                }
            </Carousel>
        </section>

    )


}
