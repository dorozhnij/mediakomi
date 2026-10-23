import { useState, useRef, useEffect } from 'react';
import { Apartment, calculateScore, getOverpayInfo } from '../data/apartments';

interface GameScreenProps {
  apartments: Apartment[];
  onFinish: (results: RoundResult[]) => void;
}

export interface RoundResult {
  apartment: Apartment;
  userGuess: number;
  correctPrice: number;
  score: number;
  overpay: boolean;
  amount: number;
}

const MIN_PRICE = 50000;
const MAX_PRICE = 2000000;

export default function GameScreen({ apartments, onFinish }: GameScreenProps) {
  const [currentRound, setCurrentRound] = useState(0);
  const [guess, setGuess] = useState(500000);
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState<RoundResult[]>([]);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [animateSlider, setAnimateSlider] = useState(false);
  const sliderRef = useRef<HTMLInputElement>(null);

  const apartment = apartments[currentRound];
  const totalRounds = apartments.length;
  const progress = ((currentRound) / totalRounds) * 100;

  useEffect(() => {
    if (currentRound === 0 && !animateSlider) {
      setAnimateSlider(true);
      const timer = setTimeout(() => setAnimateSlider(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentRound, animateSlider]);

  useEffect(() => {
    setCurrentPhoto(0);
    setGuess(Math.round((MIN_PRICE + MAX_PRICE) / 2));
    setAnswered(false);
  }, [currentRound]);

  useEffect(() => {
    if (sliderRef.current) {
      const progress = ((guess - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
      sliderRef.current.style.setProperty('--slider-progress', `${progress}%`);
    }
  }, [guess]);

  const handleAnswer = () => {
    const score = calculateScore(guess, apartment.price);
    const { overpay, amount } = getOverpayInfo(guess, apartment.price);
    const result: RoundResult = {
      apartment,
      userGuess: guess,
      correctPrice: apartment.price,
      score,
      overpay,
      amount,
    };
    const newResults = [...results, result];
    setResults(newResults);
    setAnswered(true);

    setTimeout(() => {
      if (currentRound + 1 >= totalRounds) {
        onFinish(newResults);
      } else {
        setCurrentRound(currentRound + 1);
      }
    }, 2500);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 40) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-800">
        <div
          className="h-full bg-[#26CD94] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Round counter */}
      <div className="px-4 pt-3 pb-2 flex justify-between items-center">
        <span className="text-sm text-gray-400">Раунд {currentRound + 1} из {totalRounds}</span>
        <span className="text-sm text-[#26CD94] font-medium">
          Очки: {results.reduce((sum, r) => sum + r.score, 0)}
        </span>
      </div>

      {/* Photo gallery */}
      <div className="px-4 flex-1 flex flex-col">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-800 mb-3">
          {apartment.photos.length > 0 ? (
            <img
              src={apartment.photos[currentPhoto]}
              alt={`Фото ${currentPhoto + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <span className="text-4xl">🏠</span>
            </div>
          )}
          {/* Photo dots */}
          {apartment.photos.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {apartment.photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPhoto(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentPhoto ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Apartment info */}
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-1">{apartment.description}</h2>
          <p className="text-gray-400 text-sm">📍 {apartment.address}</p>
        </div>

        {/* Price slider */}
        <div className="mb-4">
          <label className="text-sm text-gray-400 mb-2 block">Ваша цена:</label>
          <div className={`text-2xl font-bold mb-3 ${answered ? 'text-gray-400' : 'text-[#26CD94]'} ${animateSlider ? 'animate-pulse' : ''}`}>
            {formatPrice(guess)}
          </div>
          <input
            ref={sliderRef}
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={10000}
            value={guess}
            onChange={(e) => setGuess(Number(e.target.value))}
            disabled={answered}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#26CD94] disabled:opacity-50"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{formatPrice(MIN_PRICE)}</span>
            <span>{formatPrice(MAX_PRICE)}</span>
          </div>
        </div>

        {/* Answer result */}
        {answered && (
          <div className="mb-4 p-3 rounded-lg bg-gray-800 border border-gray-700 animate-[fadeIn_0.3s_ease-in]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Правильная цена:</span>
              <span className="font-bold text-white">{formatPrice(apartment.price)}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Разница:</span>
              <span className={`font-bold ${apartment.price > guess ? 'text-red-400' : 'text-blue-400'}`}>
                {apartment.price > guess ? 'Вы занизили' : 'Вы завысили'} на {formatPrice(getOverpayInfo(guess, apartment.price).amount)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Баллы:</span>
              <span className={`font-bold text-lg ${getScoreColor(calculateScore(guess, apartment.price))}`}>
                +{calculateScore(guess, apartment.price)}
              </span>
            </div>
          </div>
        )}

        {/* Answer button */}
        {!answered && (
          <button
            onClick={handleAnswer}
            className="w-full py-4 bg-[#26CD94] hover:bg-[#20b882] text-gray-900 font-bold rounded-xl text-lg transition-all active:scale-95"
          >
            Оценить
          </button>
        )}
      </div>

      {/* Footer links */}
      <div className="px-4 py-3 text-center">
        <span className="text-xs text-gray-600">Медиакоми © 2024</span>
      </div>
    </div>
  );
}
