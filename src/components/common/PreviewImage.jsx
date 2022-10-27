import React, { useEffect, useRef, useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

const PreviewImage = ({ Image }) => {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

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
      {(Image || imagePreview) && (
        <div className="content__preview img-pro">
          <img src={imagePreview ? imagePreview : Image} alt="img" />
        </div>
      )}
    </div>
  );
};

export default PreviewImage;
