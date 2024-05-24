import * as React from "react"; 

export default function MyComponent() {
  return (
    <>
      <section className="main-container">
        <div className="overlay">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/45287dc5ed4e095aae98880c4564ff55fbfeb61f32f620f0f424518f1437958d?apiKey=096b41606d0d45ab8cdfde5e4eff02e6&" alt="" className="background-image" />
          <div className="content-container">
            <h1 className="title">Health management</h1>
            <form className="login-form">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf73c0faa5ddfa750d78bfe890a55c14c5ffe9b57eb567ad44a7da67f07fb58d?apiKey=096b41606d0d45ab8cdfde5e4eff02e6&" alt="Health management logo" className="form-logo" />
              <div className="input-container">
                <label htmlFor="emailInput" className="visually-hidden">Email</label>
                <div className="input-wrapper">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/57504037d7e6b3838ed793dd36d04799dd38f02f8e5105ccabc9e9c37e72edb4?apiKey=096b41606d0d45ab8cdfde5e4eff02e6&" alt="" className="input-icon" />
                  <input type="email" id="emailInput" placeholder="Email" aria-label="Email" className="input" />
                </div>
              </div>
              <div className="input-container">
                <label htmlFor="passwordInput" className="visually-hidden">Password</label>
                <div className="input-wrapper">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47e1946ab5690657a70c7581182fa78d733a9e0928efd9d0c229f2aaa93d4f82?apiKey=096b41606d0d45ab8cdfde5e4eff02e6&" alt="" className="input-icon" />
                  <input type="password" id="passwordInput" placeholder="Password" aria-label="Password" className="input" />
                </div>
              </div>
              <button type="submit" className="login-button">Login</button>
              <a href="/forgot-password" className="forgot-password">Forgot password?</a>
            </form>
          </div>
        </div>
      </section>
      <style jsx>{`
        .main-container {
          background-color: #2148c0;
          display: flex;
          flex-direction: column;
          color: #fff;
          font-weight: 300;
          text-align: center;
          justify-content: center;
        }
        
        .overlay {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          min-height: 720px;
          width: 100%;
          align-items: center;
          justify-content: center;
          padding: 74px 60px;
        }
        
        @media (max-width: 991px) {
          .overlay {
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
        
        .content-container {
          position: relative;
          display: flex;
          margin-bottom: 50px;
          width: 426px;
          max-width: 100%;
          flex-direction: column;
        }
        
        @media (max-width: 991px) {
          .content-container {
            margin-bottom: 40px;
          }
        }
        
        .title {
          text-transform: uppercase;
          font: 36px/56% Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
        }
        
        @media (max-width: 991px) {
          .title {
            max-width: 100%;
          }
        }
        
        .login-form {
          display: flex;
          margin-top: 105px;
          flex-direction: column;
          font-size: 14px;
          padding: 0 63px;
        }
        
        @media (max-width: 991px) {
          .login-form {
            max-width: 100%;
            margin-top: 40px;
            padding: 0 20px;
          }
        }
        
        .form-logo {
          aspect-ratio: 1.05;
          object-fit: auto;
          object-position: center;
          width: 73px;
          align-self: center;
        }
        
        .input-container {
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 1);
          display: flex;
          margin-top: 63px;
          gap: 20px;
          padding: 13px 12px;
          white-space: nowrap;
          text-transform: uppercase;
          line-height: 143%;
        }
        
        @media (max-width: 991px) {
          .input-container {
            margin-top: 40px;
            white-space: initial;
          }
        }
        
        .input-icon {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        
        .input-wrapper {
          display: flex;
          align-items: center;
        }

        .input {
          flex-grow: 1;
          border: none;
          background-color: transparent;
          color: #fff;
          padding: 0;
          margin-left: 10px;
        }
        
        .login-button {
          border-radius: 4px;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
          background-color: #fff;
          color: #2148c0;
          margin-top: 43px;
          white-space: nowrap;
          text-transform: uppercase;
          padding: 17px 60px;
          font: 600 16px Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
          cursor: pointer;
        }
        
        @media (max-width: 991px) {
          .login-button {
            margin-top: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
        
        .forgot-password {
          align-self: flex-end;
          margin-top: 15px;
          font: 500 16px Montserrat, -apple-system, Roboto, Helvetica, sans-serif;
          color: #fff;
          text-decoration: none;
        }

        .forgot-password:hover {
          text-decoration: underline;
        }
        
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
      `}</style>
    </>
  );
}