import React from "react";
import { version } from "./../../package.json";
const AppContainer = () => {
  return (
    <React.Fragment>
      <div id="version-name">{version}</div>
      <div
        style={{
          background: "#EDF6FF 0% 0% no-repeat padding-box",
          position: "absolute",
          zIndex: "-1",
          height: "-webkit-fill-available",
          width: "100%"
        }}
      >
        <div
          style={{
            position: "relative",
            height: "300px",
            width: "100%",
            background: "transparent linear-gradient(253deg, #303F60 0%, #1A253C 100%) 0% 0% no-repeat padding-box",
            opacity: "1"
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default AppContainer;
