import React from "react";

function Main() {
  const [count, setCount] = React.useState(1);
  const [img, setImg] = React.useState("./assets/images/image-product-1.jpg");

  const products = [
    {
      title: "Sneaker Company",
      mainTitle: "Fall Limited Edition Sneakers",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciuntiure ad labore rem dolor quaerat, est, voluptates fuga, sit ullamdoloremque hic voluptas perspiciatis consequuntur id amet voluptatibusipsum dolore.",
      retailPrice: "$125.00",
      discountPercent: "50%",
      actualPrice: "$250.00",
    },
  ];

  const thumbnailArray = [
    {
      img: "./assets/images/image-product-1.jpg",
      thumbnailImg: "./assets/images/image-product-1-thumbnail.jpg",
    },
    {
      img: "./assets/images/image-product-2.jpg",
      thumbnailImg: "./assets/images/image-product-2-thumbnail.jpg",
    },
    {
      img: "./assets/images/image-product-3.jpg",
      thumbnailImg: "./assets/images/image-product-3-thumbnail.jpg",
    },
    {
      img: "./assets/images/image-product-4.jpg",
      thumbnailImg: "./assets/images/image-product-4-thumbnail.jpg",
    },
  ];

  const addition = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const substraction = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleImg = (index) => {
    setImg(thumbnailArray[index].img);
  };
  return (
    <div className="main-container">
      <div className="main-left">
        <img src={img} alt="cart-image" />
        <div className="thumbnails">
          {thumbnailArray.map((tImg, index) => (
            <img
              src={tImg.thumbnailImg}
              alt="cart-thumbnail-image"
              key={index}
              onClick={() => handleImg(index)}
            />
          ))}
        </div>
      </div>
      {products.map((product, index) => (
        <div className="main-right">
          <h4 className="main-right-itmes">{product.title}</h4>
          <h1 className="main-right-itmes">{product.mainTitle}</h1>
          <p className="main-right-itmes">{product.description}</p>
          <p className="price main-right-itmes">
            {product.retailPrice} <span>{product.discountPercent}</span>
            <p className="actual-price">{product.actualPrice}</p>
          </p>
          <div className="count-btn-container main-right-itmes">
            <div className="counter">
              <div className="mius counter-items" onClick={substraction}>
                <img src="./assets/images/icon-minus.svg" alt="minus" />
              </div>
              <div className="counter-number counter-items">{count}</div>
              <div className="plus counter-items" onClick={addition}>
                <img src="./assets/images/icon-plus.svg" alt="plus" />
              </div>
            </div>
            <button className="btn-card">
              <img src="./assets/images/icon-cart.svg" alt="" />
              <p>Add to Cart</p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
