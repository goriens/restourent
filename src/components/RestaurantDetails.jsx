import { useEffect, useState } from "react";

export const Restaurant = () => {
  const [users, setUsers] = useState([]);
  const [sorting, setSorting] = useState([]);
  const getUsers = async () => {
    const response = await fetch("http://localhost:5000/data");
    //console.log(response);
    setUsers(await response.json());
    //const data = await response.json();
    //console.log(data[1].cost);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="sorting">Sort By Rating</div>
      <div className="mapApp">
        {users.map((el) => {
          return (
            <div className="container">
              <div className="main-box-1">
                <div className="box1">
                  <img
                    src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-2-500x375.jpg"
                    alt=""
                  />
                </div>
                <div className="box2">
                  <h2>URU Brewpark</h2>
                  <p className="category"> pizza</p>
                  <p className="cost">const ₹ {el.price} for one</p>
                  <div className="box2-bottom">
                    <p>Min {el.cost} </p>
                    <p>•</p>
                    <p>Up to 30min</p>
                  </div>
                  <p className="accept">Accept online payments only</p>
                </div>
                <div className="box3">
                  <button>{el.rating}</button>
                  <p>{el.votes} votes</p>
                  <p>{el.reviews} Reviews</p>
                </div>
              </div>
              <div className="main-box-2">Order Online &#62;</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
