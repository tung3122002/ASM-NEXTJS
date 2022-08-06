import React from 'react'
import { Carousel } from 'react-bootstrap'
import useBanner from '../../hooks/use-banner';
import useTittle from '../../hooks/use-tittle';

type Props = {}

const Banner = (props: Props) => {
  const { data, error, createbanner, mutate, removeBanner } = useBanner();
 


  if (!data) return <div>Loading...</div>

  
  if (error) return <div>Failed to load</div>
  return (
    <div className=''><Carousel>
      {data.map((banner) => (
        <Carousel.Item key={banner.id}>
          <img
            className="d-block w-100 border rounded-br-[100px] rounded-tl-[130px]"
            src={banner.img}
            alt="First slide"
          />

        </Carousel.Item>

      ))}
      
      



    </Carousel></div>
  )
}

export default Banner