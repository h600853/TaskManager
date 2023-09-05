import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

interface InputFieldProps {
  labelText: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

const InputField: React.FC<InputFieldProps> = ({ labelText, value, onChange, type }) => {
  return (
    <div className="mb-3"> 
      <label htmlFor="inputField" className="form-label"> 
        {labelText}:
      </label>
      <input
        type={type}
        id="inputField"
        className={`form-control`} 
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
