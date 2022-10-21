import React from "react";
import FlashMessage from "react-flash-message";

const Message = ({message, time}) => {
  return (
    <FlashMessage duration={time}>
      <div className="flash-message">
        <strong>{message}</strong>
      </div>
    </FlashMessage>
  );
};

export default Message;
