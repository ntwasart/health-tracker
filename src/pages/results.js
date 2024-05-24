import * as React from "react";

function MyComponent() {
  return (
    <>
      <section className="container">
        <header className="header">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/45287dc5ed4e095aae98880c4564ff55fbfeb61f32f620f0f424518f1437958d?apiKey=096b41606d0d45ab8cdfde5e4eff02e6&"
            className="background-image"
            alt="Background"
          />
          <div className="content-wrapper">
            <div className="user-info">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/50a2318e3de02c22e6ed6f98e927c96b91377c08027065fe590dce1e6895cf2d?apiKey=096b41606d0d45ab8cdfde5e4eff02e6&"
                className="user-avatar"
                alt="User Avatar"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e63062e38d0a2510472bfbb84193a51adfbf0179116414cf27c7943199eddade?apiKey=096b41606d0d45ab8cdfde5e4eff02e6&"
                className="user-badge"
                alt="User Badge"
              />
              <div className="username">USERNAME</div>
            </div>
            <h1 className="title">Results</h1>
            <div className="results-wrapper">
              <div className="results-box" />
              <div className="details-box" />
            </div>
          </div>
          <div className="footer-box" />
        </header>
      </section>
      <style jsx>{`
        .container {
          background-color: #2148c0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .header {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          min-height: 720px;
          width: 100%;
          gap: 20px;
          padding: 28px 80px 68px 22px;
        }
        @media (max-width: 991px) {
          .header {
            max-width: 100%;
            flex-wrap: wrap;
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
        .content-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          flex-basis: 0;
          width: fit-content;
        }
        @media (max-width: 991px) {
          .content-wrapper {
            max-width: 100%;
          }
        }
        .user-info {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          color: #fff;
          font-weight: 300;
          text-align: center;
          text-transform: uppercase;
        }
        @media (max-width: 991px) {
          .user-info {
            flex-wrap: wrap;
          }
        }
        .user-avatar {
          aspect-ratio: 0.96;
          object-fit: auto;
          width: 24px;
          border: 1px solid #fff;
        }
        .user-badge {
          aspect-ratio: 2.38;
          object-fit: auto;
          width: 48px;
          border: 1px solid #fff;
          margin-top: 11px;
        }
        .username {
          font-family: Montserrat, sans-serif;
          margin-top: 26px;
        }
        .title {
          margin-top: 80px;
          flex-grow: 1;
          font: 36px/56% Montserrat, sans-serif;
        }
        @media (max-width: 991px) {
          .title {
            margin-top: 40px;
          }
        }
        .results-wrapper {
          display: flex;
          flex-direction: column;
          margin-top: 63px;
          width: 806px;
        }
        @media (max-width: 991px) {
          .results-wrapper {
            margin-top: 40px;
          }
        }
        .results-box {
          box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
          border: 1px solid #fff;
          align-self: center;
          width: 645px;
          height: 77px;
        }
        .details-box {
          border: 1px solid #fff;
          margin-top: 27px;
          height: 352px;
        }
        @media (max-width: 991px) {
          .details-box {
            max-width: 100%;
          }
        }
        .footer-box {
          position: relative;
          border: 1px solid #000;
          background-color: #d9d9d9;
          margin-top: 548px;
          width: 68px;
          height: 76px;
        }
        @media (max-width: 991px) {
          .footer-box {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default MyComponent;