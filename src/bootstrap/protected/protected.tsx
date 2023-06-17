import React, { useEffect } from "react";
import { environment } from "../environment/environment";
import { useNavigate } from "react-router-dom";

export const Protected = (props: any) => {
  const navigate = useNavigate();
  const { Component } = props;
  useEffect(() => {
    checkLogin();
    console.log(Component);
  }, []);
  const checkLogin = () => {
    const login = localStorage.getItem(environment.tokenKey);
    if (!login) {
      navigate("/");
      return;
    }
  };
  return (
    <div>
      <Component />
    </div>
  );
};
