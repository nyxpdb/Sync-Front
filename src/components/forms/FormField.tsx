import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface FormFieldProps {
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea' | 'url';
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  options?: Array<{
    value: string | number;
    label: string;
  }>;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  multiline?: false;
  rows?: number;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  options = [],
  required = false,
  disabled = false,
  error,
  helperText,
  size = 'small',
  fullWidth = true,
  multiline = false,
  rows = 1,
  className = ''
}) => {
  if (type === 'select') {
    return (
      <FormControl 
        size={size} 
        fullWidth={fullWidth} 
        required={false}
        disabled={disabled}
        error={!!error}
        className={className}
      >
        <InputLabel sx={{ color: 'var(--muted)' }}>{label}</InputLabel>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          label={label}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'white',
              '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--primary)',
                },
              },
              '&.Mui-focused': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--primary)',
                },
              },
            },
            '& .MuiSelect-icon': {
              color: 'var(--muted)',
            },
            '& .MuiInputLabel-root': {
              '&.Mui-focused': {
                color: 'var(--primary)',
              },
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return (
    <TextField
      type={type}
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      error={!!error}
      helperText={error || helperText}
      size={size}
      fullWidth={fullWidth}
      multiline={multiline}
      rows={rows}
      className={className}
      sx={{
        '& .MuiOutlinedInput-root': {
          backgroundColor: 'white',
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--primary)',
            },
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--primary)',
            },
          },
        },
        '& .MuiInputLabel-root': {
          '&.Mui-focused': {
            color: 'var(--primary)',
          },
        },
        '& .MuiInputBase-input': {
          '&:hover': {
            borderColor: 'var(--primary)',
          },
        },
      }}
    />
  );
};

export default FormField; 