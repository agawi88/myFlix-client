import React, { useState } from "react";
import { Form, InputGroup, Button, Row} from "react-bootstrap";
import Eye from "react-bootstrap-icons/dist/icons/eye";
import EyeSlash from "react-bootstrap-icons/dist/icons/eye-slash";


export const PasswordInput = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Row>
    <Form.Group>
        <InputGroup>
        <Form.Control
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
