import React, { memo } from "react";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";

export default memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner />
    </HomeWrapper>
  );
});
