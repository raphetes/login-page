import React from "react";
import styles from "./Input.module.css";
import Hide from "../../assets/eyes-off.svg?react";
import Show from "../../assets/eyes-on.svg?react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Input = ({ type, label, id, value, setValue, onChange, onBlur, error, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  function togglePassword(event) {
    event.preventDefault()
    setShowPassword(!showPassword);
  }
  const condition = type == "password";

  const {pathname} = useLocation()


  return (
    <div className={styles.inputWrapper}>
      <div className={styles.labelWrapper}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        {condition && pathname !== "/create" && <Link to="/forget" className={styles.forgot}>Esqueceu sua senha?</Link>}
      </div>
      <div className={styles.inputBox}>
        <input
          className={`${styles.input} ${
            type === "password" && styles.password
          } ${error && styles.inputError}`}
          type={condition ? (showPassword ? 'text' : 'password') : type}
          id={id}
          value={value}
          onChange={onChange}
          setValue={setValue}
          onBlur={onBlur}
          {...props}
        />
        {condition && value.length > 0 && <button onClick={togglePassword}>{showPassword ? <Hide /> : <Show />}</button>}
        {error && <span className={styles.error}>{error}</span>}
      </div>
    </div>
  );
};

export default Input;
