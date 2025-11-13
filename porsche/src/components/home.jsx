import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  // Car data array
  const cars = [
    {
      name: "911",
      link: "/911",
      img: "https://media.istockphoto.com/id/1401484944/photo/porsche-911-turbo-s.jpg?s=612x612&w=0&k=20&c=D9bkCP5G9_TUI7alj5tv_KrqLrW-Poja6AluoH1gcBI=",
    },
    {
      name: "GT3",
      link: "/GT3",
      img: "https://media.istockphoto.com/id/1942054175/photo/porsche-911-gt3-rs.jpg?s=612x612&w=0&k=20&c=ebm-XtNa9mZ3KelsXogOJekf29VRGSI9HZGt6R5k5LY=",
    },
    {
      name: "Turbo S",
      link: "/S",
      img: "https://media.istockphoto.com/id/1419988769/photo/porsche-911-turbo-s.jpg?s=612x612&w=0&k=20&c=KdoIXVhnHEJcJkvxHHkOHLyVcq7YtzGBG9QE8uBjI_4=",
    },
    {
      name: "Turbo GT",
      link: "/GT",
      img: "https://news.porschemarin.com/wp-content/uploads/2024/03/Porsche_Taycan-2025_006-800x500.jpg",
    },
    {
      name: "Taycan",
      link: "/taycan",
      img: "https://www.stratstone.com/-/media/stratstone/porsche/car-models/inline-images/taycan/2023-update/porsche-taycan-turbo-s-front-720x405px.ashx?mh=1440&la=en&h=405&w=720&mw=2560&hash=26E718B09640A63AEC55933D811E4456",
    },
    {
      name: "718",
      link: "/718",
      img: "https://media.ed.edmunds-media.com/porsche/718-cayman/2025/oem/2025_porsche_718-cayman_coupe_gts-40_fq_oem_1_600.jpg",
    },
  ];

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to Porsche</h1>
          <h3>Engineered for Excellence</h3>
        </div>
      </div>

      <h1>Discover</h1>

      <div className="card-container">
        {cars.map((car, index) => (
          <Link to={car.link} key={index}>
            <div className="card">
              <img src={car.img} alt={car.name} className="img" />
              <h3>{car.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
