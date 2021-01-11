import React from 'react'
import Radio from './Form/Radio'

const questions = [
  {
    question: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    answer: 'React.createElement()',
    id: 'q1',
  },
  {
    question: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    answer: 'import Component from "./Component"',
    id: 'q2',
  },
  {
    question: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    answer: 'useFetch()',
    id: 'q3',
  },
  {
    question: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    answer: 'use',
    id: 'q4',
  },
]

const App = () => {
  const [answers, setAnswers] = React.useState(
    questions.reduce((acc, question) => {
      return {
        ...acc,
        [question.id]: ''
      }
    }, {})
  )
  const [slide, setSlide] = React.useState(0)
  const [result, setResult] = React.useState(null)

  function handleChange({ target }) {
    setAnswers({ ...answers, [target.id]: target.value })
  }

  function finalResult() {
    const correctAnswers = questions.filter(
      ({ id, answer }) => answers[id] === answer
    )
    setResult(`Você acertou: ${correctAnswers.length} de ${questions.length}`)
  }

  function handleNext() {
    if (slide < questions.length - 1) {
      setSlide(slide + 1)
    } else {
      setSlide(slide + 1)
      finalResult()
    }
  
  }
  function handlePrev() {
    if (slide === 0) {
      setSlide(slide)
    } else if (slide < questions.length) {
      setSlide(slide - 1)
    } 
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {questions.map((question, index) => (
        <Radio 
          active={slide === index}
          key={question.id} 
          value={answers[question.id]}
          onChange={handleChange} 
          {...question} 
        />
      ))}
      {result ? (
        <p>{result}</p> 
      ) : (
        <>
          <button style={{ marginRight: '10px' }} onClick={handlePrev}>Anterior</button>
          <button onClick={handleNext}>Próximo</button>
        </>
      )}
    </form>
  )
}

export default App
