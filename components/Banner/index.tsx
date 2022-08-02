import React from 'react'
import { Carousel } from 'react-bootstrap'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className=''><Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 border rounded-br-[100px] rounded-tl-[130px]"
        src="https://pubcdn.ivymoda.com/files/news/2022/07/14/e90731ea41dd1cbd39914c9c3f8c1b7b.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 border rounded-br-[100px] rounded-tl-[130px]"
        src="https://pubcdn.ivymoda.com/files/news/2022/07/14/0a32587dce3ca47dd6de7533c67fe53b.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 border rounded-br-[100px] rounded-tl-[130px]"
        src="https://pubcdn.ivymoda.com/files/news/2022/06/29/96fa223f2d38ce178e563d0889af5937.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  )
}

export default Banner