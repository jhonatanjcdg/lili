import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PartyPopper } from 'lucide-react';
import Nav from './Nav';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: '¿Cuáles son tus héroes Main en Mobile Legends?',
      answerOptions: [
        { answerText: 'Nana y Miya', isCorrect: false },
        { answerText: 'Lylia (Mid) y Clint (Oro)', isCorrect: true },
        { answerText: 'Odette y Layla', isCorrect: false },
        { answerText: 'Kagura y Hanabi', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué pasa cuando uno de nosotros saca MVP?',
      answerOptions: [
        { answerText: 'Nos felicitamos normal', isCorrect: false },
        { answerText: 'No decimos nada', isCorrect: false },
        { answerText: 'Hacemos DEMASIADO drama, sarcasmo y nos lo restregamos', isCorrect: true },
        { answerText: 'Dejamos de jugar', isCorrect: false },
      ],
    },
    {
      questionText: '¿Qué juego de Roblox nos está quitando el sueño últimamente?',
      answerOptions: [
        { answerText: 'Brookhaven', isCorrect: false },
        { answerText: 'Adopt Me', isCorrect: false },
        { answerText: 'Murder Mystery 2', isCorrect: false },
        { answerText: '99 noches en el bosque', isCorrect: true },
      ],
    },
    {
      questionText: '¿Cuál es la forma correcta de decir "buenas noches" en nuestro chat?',
      answerOptions: [
        { answerText: 'Buenas noches, descansa', isCorrect: false },
        { answerText: 'descansa muchoo, cuídatee y sueuña bonitoo', isCorrect: true },
        { answerText: 'Chau, nos vemos', isCorrect: false },
        { answerText: 'Bye', isCorrect: false },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      <Nav backTo="/" />
      
      <div className="flex-1 flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-card max-w-lg w-full p-8 rounded-[2rem] relative overflow-hidden"
        >
          {/* Adorno de fondo */}
          <div className="absolute -top-10 -right-10 text-9xl opacity-10">🎀</div>

          {showScore ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center relative z-10"
            >
              <div className="flex justify-center mb-6">
                <PartyPopper className="w-20 h-20 text-hk-pink animate-bounce" />
              </div>
              <h2 className="text-3xl font-heading text-hk-black mb-4">
                ¡Nivel Completado!
              </h2>
              <p className="text-xl text-gray-700 mb-6 font-bold">
                Puntaje: {score} de {questions.length} respuestas correctas.
              </p>
              <p className="text-lg font-bold text-hk-pink bg-white/40 border border-white p-4 rounded-xl shadow-inner">
                Tanto si sacaste MVP aquí como si no, no haré drama esta vez. ¡Hoy tú eres la MVP de la vida! 🎉
              </p>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-white bg-hk-pink px-3 py-1 rounded-full">
                      Pregunta {currentQuestion + 1} de {questions.length}
                    </span>
                    <span className="text-2xl animate-pulse">✨</span>
                  </div>
                  <h2 className="text-2xl font-heading text-gray-800 leading-snug">
                    {questions[currentQuestion].questionText}
                  </h2>
                </div>
                
                <div className="space-y-3">
                  {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                      className="w-full text-left p-4 rounded-xl border border-white/60 bg-white/50 hover:bg-hk-pink/90 hover:text-white hover:border-hk-pink transition-all font-bold text-gray-800 hover:shadow-lg transform hover:-translate-y-1 backdrop-blur-sm"
                    >
                      {answerOption.answerText}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </div>
  );
}
