import React from "react";
import { ContainerLoad, LoadingWrapper, Ball } from "./Loading.styled";

const Loader = () => (
  <LoadingWrapper>
    <Ball />
    <Ball />
    <Ball />
  </LoadingWrapper>
);

export const LoadingIcon = ({ fullscreen }) => {
  return fullscreen ? (
    <>
      <ContainerLoad>
        <Loader />
      </ContainerLoad>
    </>
  ) : (
    <Loader />
  );
};
