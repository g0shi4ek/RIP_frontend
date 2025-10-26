import { FC, FormEvent } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
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
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <Form onSubmit={handleSubmit} className="search-container">
      <InputGroup className="search-input-group">
        <Form.Control
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="search-field"
        />
        <Button 
          variant="outline-secondary" 
          type="submit"
          className="search-btn"
        >
          {buttonTitle}
        </Button>
      </InputGroup>
    </Form>
  )
}