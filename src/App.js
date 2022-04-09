import React from 'react';
import PropTypes from 'prop-types';


const foodILike = [
  { id: 1, name: 'Salad', rating: 4.3, picture: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F012F232F082F532F372F634819c1-ce43-458a-8682-0ecabb2bfd0f2FSalad.png' },
  { id: 2, name: 'Sandwich', rating: 1.4, picture: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F012F232F082F532F152F57431742-cd03-4030-86b0-6912ed51b4952FSandwich.png' },
  { id: 3, name: 'Grape juice', rating: 2.3, picture: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F112F302F152F442F132F9c6d8774-1e77-44c4-a16f-ac59c149ac0d2FGrapeJuice.png' }
]

function Food({ name, picture, rating }) {
  return <div>
    <h1>I like {name}</h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
}


function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => <Food key={dish.id} name={dish.name} picture={dish.picture} rating={dish.rating} />)}
    </div>
  );
}

export default App;
