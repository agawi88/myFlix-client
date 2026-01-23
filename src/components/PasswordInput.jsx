/**
 * @file PasswordInput.jsx
 * @description
 * Reusable password input component with visibility toggle.
 *
 * Provides a controlled password input field that allows
 * users to toggle between masked and visible password text.
 */


import React from "react";
import { useState } from "react";
import { Form, InputGroup, Button, Row } from "react-bootstrap";
import Eye from "react-bootstrap-icons/dist/icons/eye";
import EyeSlash from "react-bootstrap-icons/dist/icons/eye-slash";
import PropTypes from "prop-types";

/**
 * PasswordInput component.
 *
 * Renders a password input field with a toggle button
 * that switches between hidden and visible password states.
 *
 * @param {Object} props Component props
 * @param {string} props.value Current password value
 * @param {Function} props.onChange Change handler for the input field
 *
 * @returns {JSX.Element} Password input field with visibility toggle
 */

export const PasswordInput = ({ value, onChange }) => {
  
    /**
   * Toggles password visibility between masked and plain text.
   */

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Row>
    <Form.Group>
        <InputGroup>
          <Form.Control
          id="password"
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          required
          minLength="8"
          maxLength="15"
          autoComplete="current-password"
          className="bg-light text-dark"
          placeholder="Enter your password" 
            />
        <Button
          variant="outline-secondary"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeSlash /> : <Eye />}
        </Button>
      </InputGroup>
      </Form.Group>
      </Row>
  );
};
PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
