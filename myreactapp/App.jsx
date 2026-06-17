import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>welcome to my webpage</p>
      <p>hello cse 13</p>
      <img src="https://images.pexels.com/photos/14430742/pexels-photo-14430742.jpeg" width="500" height="300" ></img>
      <iframe width="500" height="300" src="https://www.youtube.com/embed/IMLerLiQtGY" title="Return of the Lion | A Lion’s Fight to Survive in Rwanda | National Geographic" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
}

export default App;