import React from "react";
import { useState } from "react";

import { Form } from "react-router-dom";
import { Button, Input, Logo } from "./index";

import { login as authLogin } from "../store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";

import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();

        if (userData) dispatch(authLogin(userData));

        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };



  