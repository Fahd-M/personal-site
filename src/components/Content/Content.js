import React from "react";
import MobileScreen from "../MobileScreen/MobileScreen";
import TabletScreen from "../TabletScreen/TabletScreen";
import "./Content.scss";

function Content() {
  return (
    <>
      <div className="content__container">
        <div className="content__device">
          {/* add ternary operator for which screen to show based on screen width or use scss */}
          <TabletScreen />
          <MobileScreen />
        </div>
        {/* START BUTTON HERE LATER + ANIMATION */}
      </div>
    </>
  );
}

export default Content;
