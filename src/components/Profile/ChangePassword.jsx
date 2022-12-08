import React from "react";
import Rodal from "rodal";

import { BiKey } from "react-icons/bi";

// include styles
import "rodal/lib/rodal.css";

const ChangePassword = (props) => {
  const { hide, visible, item, handleDelete } = props;

  return (
    <Rodal
      width={600}
      height={500}
      visible={visible}
      showCloseButton={false}
      customStyles={{ borderRadius: "10px" }}
    >
      <div className="modal">
        <div className="modal__info">
          <div className="modal__info__title title">
            <span className="icon">Change Password </span>
          </div>
        </div>
        <div className="modal__input">
          <div className="title">Old Password</div>
          <div className="content">
            <div className="input-container">
              <input className="input" type="text" />
            </div>
          </div>
        </div>
        <div className="modal__input">
          <div className="title">New Password</div>
          <div className="content">
            <div className="input-container">
              <input className="input" type="text" />
            </div>
          </div>
        </div>
        <div className="modal__input">
          <div className="title">Confirm Password</div>
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
            Delete
          </button>
        </div>
      </div>
    </Rodal>
  );
};

export default ChangePassword;
