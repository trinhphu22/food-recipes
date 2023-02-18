import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";

export const Rating = ({ item }) => {
  switch (true) {
    case 0.5 <= item && item < 1:
      return (
        <div className="item__rating">
          <span className="rate">
            <MdStarHalf />
            <MdStarOutline />
            <MdStarOutline />
            <MdStarOutline />
            <MdStarOutline />
          </span>
        </div>
      );
    case 1 <= item && item < 1.5:
      return (
        <div className="item__rating">
          <span className="rate">
            <MdStar />
            <MdStarOutline />
            <MdStarOutline />
            <MdStarOutline />
            <MdStarOutline />
          </span>
        </div>
      );
    case 1.5 <= item && item < 2:
      return (
        <div className="item__rating">
          <span className="rate">
            <MdStar />
            <MdStarHalf />
            <MdStarOutline />
            <MdStarOutline />
            <MdStarOutline />
          </span>
        </div>
      );
    case 2 <= item && item < 2.5:
      return (
        <div className="item__rating">
          <span className="rate">
            <MdStar />
            <MdStar />
            <MdStarOutline />
            <MdStarOutline />
            <MdStarOutline />
          </span>
        </div>
      );
    case 2.5 <= item && item < 3:
      return (
        <div className="item__rating">
          <span className="rate">
            <MdStar />
            <MdStar />
            <MdStarHalf />
            <MdStarOutline />
            <MdStarOutline />
          </span>
        </div>
      );
    case 3 <= item && item < 3.5:
      return (
        <div className="item__rating">
          <span className="rate">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarOutline />
            <MdStarOutline />
          </span>
        </div>
      );
    case 3.5 <= item && item < 4:
      return (
        <div className="item__rating">
          <span className="rate">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarHalf />
            <MdStarOutline />
          </span>
        </div>
      );
    case 4 <= item && item < 4.5:
      return (
        <div className="item__rating">
          <span className="rate">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarOutline />
          </span>
        </div>
      );
    case 4.5 <= item && item < 5:
      return (
        <div className="item__rating">
          <span className="rate">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarHalf />
          </span>
        </div>
      );
    case 5 <= item:
      return (
        <div className="item__rating">
          <span className="rate">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </span>
        </div>
      );
    default:
      return (
        <div className="item__rating">
          <span className="rate">
            <MdStarOutline />
            <MdStarOutline />
            <MdStarOutline />
            <MdStarOutline />
            <MdStarOutline />
          </span>
        </div>
      );
  }
};
