import React from "react";
import Rodal from "rodal";

import { BiTrash } from "react-icons/bi";

// include styles
import "rodal/lib/rodal.css";

const DeleteRecipe = (props) => {
  const { hide, visible, item } = props;
  
  return (
    <Rodal
      width={600}
      height={300}
      visible={visible}
      showCloseButton={false}
      customStyles={{ borderRadius: "10px" }}
    >
      <div className="modal">
        <div className="modal__info">
          <div className="modal__info__icon">
            <BiTrash className="icon" />
          </div>
          <div className="modal__info__title">
            <span>Are You Sure! Want to Delete </span>
            <span className="color">{item?.title} </span>
            <span>of </span>
            <span className="color">{item?.user?.name} </span>
            <span>Record?</span>
          </div>
          <div className="modal__info__subtitle">
            <span>
              Do you really want to delete these records? You can't view this in
              your list anymore if you delete!
            </span>
          </div>
        </div>
        <div className="modal__buttons">
          <button className="btn btn-cancel" onClick={hide}>
            Cancel
          </button>
          <button className="btn btn-delete">Delete</button>
        </div>
      </div>
    </Rodal>
  );
};

export default DeleteRecipe;
