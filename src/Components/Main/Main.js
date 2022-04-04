import React from "react";

function Main(props) {
  const { product, addition, substraction, count, handleCart } = props;

  const [img, setImg] = React.useState(product.thumbnailArray[0].img);

  // console.log(img);

  const handleImg = (index) => {
    setImg(product.thumbnailArray[index].img);
  };
  return (
    <div className="main-container">
      <div className="main-left">
        <img src={require(`../../assets/images/${img}`)} alt="cart-image" />
        <div className="thumbnails">
          {product.thumbnailArray.map((tImg, index) => (
            <img
              src={require(`../../assets/images/${tImg.thumbnailImg}`)}
              alt="cart-thumbnail-image"
              key={index}
              onClick={() => handleImg(index)}
            />
          ))}
        </div>
      </div>
      <div className="main-right">
        <h4 className="main-right-itmes">{product.title}</h4>
        <h1 className="main-right-itmes">{product.mainTitle}</h1>
        <p className="main-right-itmes">{product.description}</p>
        <div className="price main-right-itmes">
          ${product.retailPrice} <span>{product.discountPercent}%</span>
          <p className="actual-price">${product.actualPrice}</p>
        </div>
        <div className="count-btn-container main-right-itmes">
          <div className="counter">
            <div className="mius counter-items" onClick={substraction}>
              <img
                src={require("../../assets/images/icon-minus.svg").default}
                alt="minus"
              />
            </div>
            <div className="counter-number counter-items">{count}</div>
            <div className="plus counter-items" onClick={addition}>
              <img
                src={require("../../assets/images/icon-plus.svg").default}
                alt="plus"
              />
            </div>
          </div>
          <button
            className="btn-card"
            onClick={() => {
              handleCart(count, product, img);
            }}
          >
            <img
              src={require("../../assets/images/icon-cart.svg").default}
              alt="iconcart"
            />
            <p>Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
