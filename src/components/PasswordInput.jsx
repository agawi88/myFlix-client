import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";

export const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form.Group>
      <Form.Label>
        Password (8 characters minimum):</Form.Label>
        <InputGroup>
        <Form.Control
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          required
          minLength="8"
          maxLength="15"
          autoComplete="current-password"
            />
        <Button
          variant="outline-secondary"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeSlash /> : <Eye />}
        </Button>
      </InputGroup>
      </Form.Group>
  );
};
