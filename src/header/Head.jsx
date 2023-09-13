import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left">
            <i className="fa fa-phone"></i>
            <label>+8013 0813 1106</label>
            <i className="fa fa-envelope"></i>
            <label>products@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span></span>
            <label htmlFor="">Value</label>
            <span></span>
            <label htmlFor="">IND</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
