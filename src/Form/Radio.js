import React from 'react'

const Radio = ({ question, options, onChange, value, id, active }) => {
  if (active === false) return true

  return (
    <fieldset style={{ padding: '2rem', marginBottom: '1rem', border: '2px, solid #eee' }}>
      <legend style={{ fontWeight: 'bold' }}>{question}</legend>
      {options.map((option) => (
        <label 
          key={option} 
          style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
        >
          <input 
            value={option} 
            type="radio"
            id={id}
            checked={value === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  )
}

export default Radio
