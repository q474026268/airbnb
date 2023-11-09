import React, { memo } from "react";
import { LeftWrapper } from "./style";
import logo from "@/assets/img/logo.png";

export default memo(() => {
  return (
    <LeftWrapper>
      <img src={logo} alt="" />
    </LeftWrapper>
  );
});
