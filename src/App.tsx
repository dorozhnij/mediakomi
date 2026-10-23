import { useState, useCallback } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen, { RoundResult } from './components/GameScreen';
import ResultScreen from './components/ResultScreen';
import { getRandomApartments, Apartment } from './data/apartments';

type Screen = 'start' | 'game' | 'result';

function App() {
  const [screen, setScreen] = useState<Screen>('start');
  const [gameApartments, setGameApartments] = useState<Apartment[]>([]);
  const [results, setResults] = useState<RoundResult[]>([]);

  const handleStart = useCallback(() => {
    const selected = getRandomApartments(10);
    setGameApartments(selected);
    setResults([]);
    setScreen('game');
  }, []);

  const handleFinish = useCallback((gameResults: RoundResult[]) => {
    setResults(gameResults);
    setScreen('result');
  }, []);

  const handleRestart = useCallback(() => {
    setScreen('start');
    setResults([]);
    setGameApartments([]);
  }, []);

  return (
    <div className="max-w-md mx-auto min-h-screen">
      {screen === 'start' && <StartScreen onStart={handleStart} />}
      {screen === 'game' && (
        <GameScreen apartments={gameApartments} onFinish={handleFinish} />
      )}
      {screen === 'result' && (
        <ResultScreen results={results} onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
