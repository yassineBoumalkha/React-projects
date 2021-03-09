import './App.css';
import questionsData  from './data';
import { useState } from 'react';
import Question from './Question';

function App() {
  const [questions, setQuestion] = useState(questionsData)
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about login</h3>
        <section className="info">
          {
            questions.map((question) => {
              return (
                <Question key={question.id} {...question}></Question>
              )
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
