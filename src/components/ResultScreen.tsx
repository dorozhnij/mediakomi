import { RoundResult } from './GameScreen';

interface ResultScreenProps {
  results: RoundResult[];
  onRestart: () => void;
}

export default function ResultScreen({ results, onRestart }: ResultScreenProps) {
  const totalScore = results.reduce((sum, r) => sum + r.score, 0);
  const maxScore = results.length * 100;

  // Determine average overpay direction
  const avgDiff = results.reduce((sum, r) => sum + (r.userGuess - r.correctPrice), 0) / results.length;

  const getTitle = () => {
    if (totalScore >= 700) {
      return {
        emoji: '🏆',
        title: 'Опытный инвестор',
        subtitle: 'Близок к результату! Вы отлично разбираетесь в ценах на недвижимость.',
        color: 'text-[#26CD94]',
      };
    }
    if (avgDiff > 0) {
      return {
        emoji: '💸',
        title: 'Щедрый инвестор',
        subtitle: 'Вы переплачиваете за недвижимость! Попробуйте быть внимательнее к рыночным ценам.',
        color: 'text-orange-400',
      };
    }
    return {
      emoji: '🤑',
      title: 'Скряга',
      subtitle: 'Экономный инвестор! Вы всегда стараетесь купить подешевле.',
      color: 'text-blue-400',
    };
  };

  const titleInfo = getTitle();

  const totalOverpay = results.reduce((sum, r) => {
    return sum + (r.overpay ? r.amount : -r.amount);
  }, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 text-center">
        <div className="text-6xl mb-4">{titleInfo.emoji}</div>
        <h1 className={`text-2xl font-bold mb-2 ${titleInfo.color}`}>{titleInfo.title}</h1>
        <p className="text-gray-400 text-sm px-4">{titleInfo.subtitle}</p>
      </div>

      {/* Score summary */}
      <div className="px-4 mb-4">
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-400">Итого баллов:</span>
            <span className="text-2xl font-bold text-[#26CD94]">{totalScore} / {maxScore}</span>
          </div>
          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#26CD94] rounded-full transition-all duration-1000"
              style={{ width: `${(totalScore / maxScore) * 100}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <span className="text-gray-400 text-sm">
              {totalOverpay > 0 ? 'Переплата:' : 'Недоплата:'}
            </span>
            <span className={`font-bold ${totalOverpay > 0 ? 'text-red-400' : 'text-blue-400'}`}>
              {totalOverpay > 0 ? '+' : '-'}{formatPrice(Math.abs(totalOverpay))}
            </span>
          </div>
        </div>
      </div>

      {/* Round details */}
      <div className="px-4 flex-1 overflow-y-auto pb-4">
        <h3 className="text-sm text-gray-400 mb-2 font-medium">Детализация раундов:</h3>
        <div className="space-y-2">
          {results.map((result, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-3">
              <div className="flex justify-between items-start">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{result.apartment.description}</p>
                  <p className="text-xs text-gray-500">{result.apartment.address}</p>
                </div>
                <span className={`text-sm font-bold ml-2 ${
                  result.score >= 80 ? 'text-green-400' :
                  result.score >= 40 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  +{result.score}
                </span>
              </div>
              <div className="flex justify-between mt-2 text-xs">
                <span className="text-gray-500">Ваша цена: {formatPrice(result.userGuess)}</span>
                <span className="text-gray-500">Реальная: {formatPrice(result.correctPrice)}</span>
              </div>
              <div className="mt-1">
                <span className={`text-xs ${result.overpay ? 'text-red-400' : 'text-blue-400'}`}>
                  {result.overpay ? '↑ Завысили' : '↓ Занизили'} на {formatPrice(result.amount)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Restart button */}
      <div className="px-4 py-4">
        <button
          onClick={onRestart}
          className="w-full py-4 bg-[#26CD94] hover:bg-[#20b882] text-gray-900 font-bold rounded-xl text-lg transition-all active:scale-95"
        >
          Играть снова
        </button>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 text-center">
        <span className="text-xs text-gray-600">Медиакоми © 2024</span>
      </div>
    </div>
  );
}
