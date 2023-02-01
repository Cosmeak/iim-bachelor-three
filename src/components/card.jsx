import React, {useState} from "react";

const Card = ({ pokemon }) => {
  const [offset, setOffset] = useState({
    x: 0,
    y: 0,
  });

  const friction = 1/18;

  const getHolo = () => {
    //
  };

  const handleMouseMove = (event) => {
    let x = offset.x + (-offset.x - (window.innerWidth / 2 - event.clientX) * friction);
    let y = offset.y + (-offset.y - (window.innerHeight / 2 -  event.clientY) * friction);
    setOffset({x: x, y: y});
    event.target.style.transform = `
      rotateY(${offset.x}deg)
      rotateX(${offset.y}deg)
      perspective(300px)
    `;
  };

  const handleMouseLeave = (event) => {
    setOffset({x: 0, y:0});
    event.target.style.transform = 'none';
  };

  return (
    <div id={pokemon.id} className="max-w-100 max-h-100 mx-auto">
      <img
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        src={pokemon.images.large}
        className="
          w-full
          h-full
          rounded-xl
          transform-x-1/2
          transform-y-1/2
          -z-10
          shadow-xl
        "
      />
    </div>
  );
};

export default Card;
