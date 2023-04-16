import React from "react";

const Card = ({ name, email, id, username }) => {
  //   const { name, email, id, username } = props;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${username}?200x200`} alt="Robot" />
      <div className="flex flex-column items-center justify-center">
        <h2 className="ma1">{name}</h2>
        <p className="ma1">{email}</p>
      </div>
    </div>
  );
};
export default Card;
