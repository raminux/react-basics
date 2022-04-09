import React from 'react';

function Food({ name, picture }) {
  return <div>
    <h1>I like {name}</h1>
    <img src={picture} />
  </div>;
}

const foodILike = [
  { name: 'Salad', picture: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F012F232F082F532F372F634819c1-ce43-458a-8682-0ecabb2bfd0f2FSalad.png' },
  { name: 'Sandwich', picture: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20182F012F232F082F532F152F57431742-cd03-4030-86b0-6912ed51b4952FSandwich.png' },
  { name: 'Grape juice', picture: 'https://wp-cdn.lingokids.com/wp-content/uploads/2020/11/20172F112F302F152F442F132F9c6d8774-1e77-44c4-a16f-ac59c149ac0d2FGrapeJuice.png' }
]

function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => <Food name={dish.name} picture={dish.picture} />)}
    </div>
  );
}

export default App;
