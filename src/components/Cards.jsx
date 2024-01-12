import React from "react";

export const Card = ({ item }) => {
  return (
    <div key={item.id} className="card">
      <p>{item.title}</p>
    </div>
  );
};

export const Cards = ({ data }) => {
  return (
    <div className="cards">
      {data.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};
