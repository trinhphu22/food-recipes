import React, { useEffect, useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

import Avatar from "../../../assets/images/avt1.jpeg";

const Setting = () => {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [imageUpload, setImageUpload] = useState("");

  const fileInputRef = useRef();

  //Hiển thị image

  useEffect(() => {
    if (!image) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImagePreview(fileReader.result);
    };
    fileReader.readAsDataURL(image);
  }, [image]);

  //Đọc file image

  const handleImage = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div className="admin__main__body">
      <div className="admin__main__body__title">
        <span>Edit Profile</span>
      </div>
      <div className="card-sys box-shw">
        <div className="card-sys__item">
          <div className="title">Profile Picture</div>
          <div className="content">
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImage}
              ref={fileInputRef}
            />
            <div
              className="content__container"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              <FiUploadCloud className="icon-upload" />
              <span>Drag your image here</span>
              <span className="subtext">
                (Only *.jpeg and *.png images will be accepted)
              </span>
            </div>
            <div className="content__preview">
              <img src={imagePreview ? imagePreview : Avatar} alt="avt" />
            </div>
          </div>
        </div>
        <div className="card-sys__item">
          <div className="title">Name</div>
          <div className="content">
            <div className="input-container">
              <input className="input" type="text" defaultValue="123" />
            </div>
          </div>
        </div>
        <div className="card-sys__item">
          <div className="title">Email</div>
          <div className="content">
            <div className="input-container">
              <input
                className="input"
                type="text"
                defaultValue="123@gmail.com"
              />
            </div>
          </div>
        </div>
        <div className="card-sys__item">
          <div className="title">Contact number</div>
          <div className="content">
            <div className="input-container">
              <input className="input" type="text" defaultValue="123-456-789" />
            </div>
          </div>
        </div>
        <div className="card-sys__item">
          <div className="title">Role</div>
          <div className="content">
            <div className="input-container">
              <select name="" id="">
                <option value="">Admin</option>
                <option value="">Author</option>
                <option value="">Member</option>
              </select>
            </div>
          </div>
        </div>
        <div className="card-sys__button">
          <button className="btn-update">Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
