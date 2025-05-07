
import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { GlobeDemo } from '../components/Globe'
import { EventsCard } from '../components/Events'


const Event = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
    <GlobeDemo></GlobeDemo>
    <EventsCard onAddToCart={addToCart}></EventsCard>
    
    </>
  )
}

export default Event