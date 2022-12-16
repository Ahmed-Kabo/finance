import React from "react";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        margin: 0,
      }}
    >
      <Box
        sx={{
          color: "#000",
          width: "6rem",
          height: "6rem",

          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "3px solid #000",
          borderRadius: "50%",
          "&::before , &::after ": {position: "absolute",
    content: "",
    top: "calc(3 * 0.25)", 
    width: var(--clock-thickness);
    background: var(--clock-color);
    border-radius: 10px;
    transform-origin: center calc(100% - calc(var(--clock-thickness) / 2));
    animation: spin infinite linear;},
        }}
      ></Box>
    </Box>
  );
};

export default Loading;
