import * as React from "react";

function UserProfile() {
  return (
    <>
      <div className="profile-container">
        <div className="profile-content">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/45287dc5ed4e095aae98880c4564ff55fbfeb61f32f620f0f424518f1437958d?apiKey=096b41606d0d45ab8cdfde5e4eff02e6&"
            alt=""
            className="background-image"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/081f551d5a13179a0ec72882f86bb31f651160d7e3ccf700da18a390f92d6ff1?apiKey=096b41606d0d45ab8cdfde5e4eff02e6&"
            alt="User avatar"
            className="user-avatar"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0af314e6157a7fb7f1d20b24d8be030eb9858e8cc5c90e89f3207c35c7be02f7?apiKey=096b41606d0d45ab8cdfde5e4eff02e6&"
            alt="User icon"
            className="user-icon"
          />
          <div className="username">USERNAME</div>
          <form className="sugar-level-form">
            <label htmlFor="sugarLevelInput" className="visually-hidden">
              Enter sugar level
            </label>
            <input
              className="sugar-level-input"
              type="text"
              id="sugarLevelInput"
              placeholder="Enter sugar level"
              aria-label="Enter sugar level"
            />
            <button className="check-button" type="submit">
              CHECK
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .profile-container {
          background-color: #2148c0;
          display: flex;
          flex-direction: column;
          font-size: 14px;
          color: #fff;
          font-weight: 300;
          text-align: center;
          text-transform: uppercase;
          line-height: 143%;
          justify-content: center;
          height: 100vh;
        }
        .profile-content {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          min-height: 720px;
          width: 100%;
          align-items: flex-start;
          padding: 36px 80px 80px 26px;
        }
        @media (max-width: 991px) {
          .profile-content {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .background-image {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .user-avatar {
          aspect-ratio: 0.93;
          object-fit: auto;
          object-position: center;
          width: 24px;
          margin-left: 28px;
          border: 1px solid rgba(255, 255, 255, 1);
        }
        @media (max-width: 991px) {
          .user-avatar {
            margin-left: 10px;
          }
        }
        .user-icon {
          aspect-ratio: 2.38;
          object-fit: auto;
          object-position: center;
          width: 48px;
          margin: 11px 0 0 16px;
          border: 1px solid rgba(255, 255, 255, 1);
        }
        @media (max-width: 991px) {
          .user-icon {
            margin-left: 10px;
          }
        }
        .username {
          margin-top: 27px;
          font-family: Montserrat, sans-serif;
        }
        @media (max-width: 991px) {
          .username {
            max-width: 100%;
          }
        }
        .sugar-level-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 127px;
          width: 300px;
          max-width: 100%;
        }
        @media (max-width: 991px) {
          .sugar-level-form {
            margin-top: 40px;
          }
        }
        .sugar-level-input {
          font-family: Montserrat, sans-serif;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 1);
          padding: 18px 16px;
          width: 100%;
          margin-bottom: 20px;
        }
        @media (max-width: 991px) {
          .sugar-level-input {
            padding: 18px;
          }
        }
        .check-button {
          font-family: Montserrat, sans-serif;
          border-radius: 4px;
          border: 1px solid rgba(38, 78, 202, 1);
          background-color: #d9d9d9;
          padding: 18px 59px;
        }
        @media (max-width: 991px) {
          .check-button {
            padding: 18px 20px;
          }
        }
      `}</style>
    </>
  );
}

export default UserProfile;