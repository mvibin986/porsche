import React from 'react'
import "./car.css"
import {Link} from "react-router-dom"
export default function GTR() {
  return (
    <><div>
      <img src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x2/dam/US-local/Press-Releases/2022/October-2022/20221021-GT3-RS-Tribute/Exterior/PCNA22_1125_fine.jpg/jcr:content/PCNA22_1125_fine.jpg" alt="" className='pic'/>
    </div>
    <div>
      <h2>Porsche 911 GT3</h2>
      <p>The Porsche 911 GT3 is a high-performance sports car that embodies the essence of Porsche's racing heritage. Renowned for its exceptional handling, powerful naturally aspirated engine, and track-focused design, the GT3 is a favorite among driving enthusiasts. It features advanced aerodynamics, lightweight construction, and a finely tuned suspension system that delivers an exhilarating driving experience both on the road and the racetrack. The GT3 combines cutting-edge technology with Porsche's commitment to precision engineering, making it a true icon in the world of high-performance automobiles.</p>
      <h2>Interior</h2>
      <p>The interior of the Porsche 911 GT3 is designed to provide a driver-focused experience, combining luxury with functionality. It features sport seats that offer excellent support during spirited driving, often upholstered in high-quality materials such as leather and Alcantara. The cockpit is ergonomically designed, with controls and displays positioned for easy access and visibility. The GT3 typically includes a sporty steering wheel, a digital instrument cluster, and advanced infotainment systems that keep drivers connected while on the road. Despite its performance-oriented nature, the interior maintains a level of comfort and refinement expected from Porsche, making it suitable for both track days and everyday driving.</p>
      <h2>Exterior</h2>
      <p>The exterior of the Porsche 911 GT3 is a striking blend of aerodynamic efficiency and aggressive styling. It features a low-slung profile with wide fenders, a prominent rear wing, and air intakes that enhance cooling for the high-performance engine. The design incorporates lightweight materials such as carbon fiber to reduce weight and improve handling. The GT3's distinctive front fascia includes large air vents and a sculpted hood, while the rear showcases quad exhaust tips and a diffuser that contribute to its sporty appearance. Overall, the exterior design of the GT3 not only emphasizes its performance capabilities but also reflects Porsche's commitment to timeless aesthetics and engineering excellence.</p>
      <h2>Engine</h2>
      <p>The Porsche 911 GT3 is powered by a high-revving naturally aspirated flat-six engine, known for its impressive performance and exhilarating sound. The engine typically produces around 500 horsepower, allowing the GT3 to accelerate from 0 to 60 mph in just over 3 seconds. It features advanced technologies such as direct fuel injection, variable valve timing, and a lightweight construction that contributes to its responsiveness and efficiency. The GT3's engine is paired with a precise manual or dual-clutch automatic transmission, providing drivers with an engaging driving experience. This powertrain setup not only delivers thrilling performance on the road but also ensures that the GT3 remains true to its racing heritage.</p>
    </div>
    
   <Link to="/home"><button className='butt'>BACK</button></Link>
    
    </>
  )
}
