import React from 'react'
import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";

const COD = (props) => {
  const { hide, visible, item, handleDelete } = props;

  return (
    <Rodal
      width={800}
      height={500}
      visible={visible}
      showCloseButton={false}
      customStyles={{ borderRadius: "10px" }}
    >
      <div className="modal">
        <div className="modal__info">
          <div className="modal__info__title title">
            <span className="icon">Cash On Delivery </span>
          </div>
        </div>
        <div className="modal__input">
          <div className="title">Full Name</div>
          <div className="content">
            <div className="input-container">
              <input className="input" type="text" />
            </div>
          </div>
        </div>
        <div className="modal__input">
          <div className="title">Email</div>
          <div className="content">
            <div className="input-container">
              <input className="input" type="text" />
            </div>
          </div>
        </div>
        <div className="modal__input">
          <div className="title">Phone Number</div>
          <div className="content">
            <div className="input-container">
              <input className="input" type="text" />
            </div>
          </div>
        </div>
        <div className="modal__input">
          <div className="title">Address</div>
          <div className="content">
            <div className="input-container">
              <input className="input" type="text" />
            </div>
          </div>
        </div>
        <div className="modal__buttons">
          <button className="btn btn-cancel" onClick={hide}>
            Cancel
          </button>
          <button
            onClick={() => {
              handleDelete(item.id);
              hide();
            }}
            className="btn btn-delete"
          >
            Checkout
          </button>
        </div>
      </div>
    </Rodal>
  );
}

export default COD