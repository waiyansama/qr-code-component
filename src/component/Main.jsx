import React from "react";

function Main() {
    return (
      <div className="card">
        <img
          src="/img/image-qr-code.png"
          alt="Frontend Mentor QR Code"
          className="rounded-xl"
        />
        <div className="text-container">
          <h2 className="text-xl font-bold leading-7">
            Improve your front-end skills by building projects
          </h2>
          <p className="text-sm text-gray-500 mt-4 leading-5">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    );
}

export default Main