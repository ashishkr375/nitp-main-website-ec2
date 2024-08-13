import React from "react"
import Slider from "../Slider/Slider"

export const Nitpbackimg = () => {
  
  const customImageUrls = [
    "https://i.postimg.cc/c4rY66jK/Screenshot-2024-08-12-222002.png",
"https://i.postimg.cc/sgvVmgT5/Screenshot-2024-07-31-154315.png",
"https://i.postimg.cc/W3prhj1t/homebg-1.jpg",
"https://i.postimg.cc/zBdhhMy7/homebg-2.jpg",
"https://i.postimg.cc/mktHywMs/homebg-3.jpg",
"https://i.postimg.cc/c4rY66jK/Screenshot-2024-08-12-222002.png",
"https://i.postimg.cc/PJ983wz8/homebg-4.jpg",
"https://i.postimg.cc/J72J4fV4/homebg-5.jpg",
"https://i.postimg.cc/6psvCCpk/homebg-6.jpg",
"https://i.postimg.cc/QdpWmVBH/sac.jpg",
"https://i.postimg.cc/c4rY66jK/Screenshot-2024-08-12-222002.png",

  ]

  
  const images = customImageUrls.map((url, index) => (
    <img
      key={index}
      src={url}
      alt={`Custom Banner ${index + 1}`}
      style={{
        objectFit: "fill",
        maxHeight: "100vh",
        width: "100%",
        height: "100%",
      }}
    />
  ))

  return <Slider dataSlider={images} type={"homePageImg"} />
}
