import React from "react";
import { NewtonCradleLoader, PageLoadingWrapper } from "./LoadersStyles";

export const FullPageLoader = () => {
  return (
    <PageLoadingWrapper>
      <NewtonCradleLoader>
        <div className="cradle">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </NewtonCradleLoader>
    </PageLoadingWrapper>
  );
};
