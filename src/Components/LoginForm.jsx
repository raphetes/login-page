import React from "react";
import Input from "./Form/Input";
import Button from "./Form/Button";

const LoginForm = ({ fields, buttonLabel, onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>
      {fields.map((field) => (
        <Input
          key={field.id}
          type={field.type}
          id={field.id}
          label={field.label}
          placeholder={field.placeholder}
          autoComplete="off"
          {...field.hook}
        />
      ))}
      <Button>{buttonLabel}</Button>
    </form>
  );
};

export default LoginForm;
