// INPUT COMPONENT
const InputField = ({ type, placeholder, min, step, value, onChange, hasError }) => {
  return (
    <input
      className={hasError && !value ? 'form-control is-invalid' : 'form-control'}
      type={type}
      min={min ? min : ''}
      step={step ? step : ''}
      placeholder={placeholder}
      aria-label={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default InputField;