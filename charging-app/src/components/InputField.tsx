import { FC } from 'react'
import './InputField.css'

interface InputFieldProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  placeholder?: string
  buttonTitle?: string
}

export const InputField: FC<InputFieldProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = "Поиск...",
  buttonTitle = "Найти"
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <div className="search-input">
        <input
          type="text"
          className="search-field"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <button type="submit" className="search-btn">
        {buttonTitle}
      </button>
    </form>
  )
}