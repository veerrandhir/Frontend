import React, { useState } from "react";
import authService from "../appwrite/auth";

import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";

import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";

import { useform } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const { register, handleSubmit } = useform();

  const create = async (data) => {
    setError("");

    if (userData) {
      const userData = await authService.createAccount(data);

      try {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));

        navigate("/");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return <div>Signup</div>;
}

export default Signup;
