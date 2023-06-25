import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Protected = (props: any) => {
  // const navigate = useNavigate();
  const { Component } = props;
  // useEffect(() => {
  //   checkLogin();
  // }, []);
  // const checkLogin = () => {
  //   navigate("/");
  //   return;
  // };
  return (
    <div>
      <Component />
    </div>
  );
};
