import React from "react";
import Card from "./Card";

export default function CardList({ robots }) {
  const CardComponent = robots.map((e, i) => {
    return (
      <Card
        key={i}
        id={e.id}
        name={e.name}
        username={e.username}
        email={e.email}
      />
    );
  });
  // if (true) {
  //   throw new Error("Nooooo");
  // }
  return <>{CardComponent}</>;
}
