import { apartments } from '../data/apartments';

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  // Get some sample apartments for the gallery
  const galleryApartments = apartments.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Hero section */}
      <div className="px-4 pt-10 pb-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#26CD94]/20 mb-4">
          <span className="text-3xl">🏠</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">
          <span className="text-[#26CD94]">Медиа</span>коми
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
          Симулятор оценки недвижимости. Угадай стоимость квартиры по фото и описанию!
        </p>
      </div>

      {/* Photo gallery */}
      <div className="px-4 mb-6">
        <h3 className="text-sm text-gray-400 mb-3 font-medium">Примеры объявлений:</h3>
        <div className="grid grid-cols-3 gap-2">
          {galleryApartments.map((apt) => (
            <div
              key={apt.id}
              className="aspect-square rounded-lg overflow-hidden bg-gray-800 relative"
            >
              {apt.photos[0] ? (
                <img
                  src={apt.photos[0]}
                  alt={apt.description}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  🏠
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1.5">
                <p className="text-[10px] text-white truncate">{apt.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to play */}
      <div className="px-4 mb-6">
        <div className="bg-gray-800 rounded-xl p-4">
          <h3 className="text-sm font-bold text-[#26CD94] mb-3">Как играть:</h3>
          <div className="space-y-2.5">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#26CD94]/20 text-[#26CD94] text-xs flex items-center justify-center shrink-0 font-bold">1</span>
              <p className="text-xs text-gray-300">Вам показывают 10 случайных квартир</p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#26CD94]/20 text-[#26CD94] text-xs flex items-center justify-center shrink-0 font-bold">2</span>
              <p className="text-xs text-gray-300">Двигайте бегунок, чтобы назвать свою цену</p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#26CD94]/20 text-[#26CD94] text-xs flex items-center justify-center shrink-0 font-bold">3</span>
              <p className="text-xs text-gray-300">Чем точнее угадаете — тем больше баллов</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scoring info */}
      <div className="px-4 mb-6">
        <div className="bg-gray-800 rounded-xl p-4">
          <h3 className="text-sm font-bold text-[#26CD94] mb-3">Система баллов:</h3>
          <div className="space-y-1.5 text-xs text-gray-400">
            <div className="flex justify-between">
              <span>Точное попадание (до 5%)</span>
              <span className="text-green-400 font-bold">100</span>
            </div>
            <div className="flex justify-between">
              <span>Отклонение 5-10%</span>
              <span className="text-green-400 font-bold">80</span>
            </div>
            <div className="flex justify-between">
              <span>Отклонение 10-20%</span>
              <span className="text-yellow-400 font-bold">60</span>
            </div>
            <div className="flex justify-between">
              <span>Отклонение 20-30%</span>
              <span className="text-yellow-400 font-bold">40</span>
            </div>
            <div className="flex justify-between">
              <span>Отклонение 30-50%</span>
              <span className="text-red-400 font-bold">20</span>
            </div>
            <div className="flex justify-between">
              <span>Больше 50%</span>
              <span className="text-red-400 font-bold">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Start button */}
      <div className="px-4 pb-4">
        <button
          onClick={onStart}
          className="w-full py-4 bg-[#26CD94] hover:bg-[#20b882] text-gray-900 font-bold rounded-xl text-lg transition-all active:scale-95 shadow-lg shadow-[#26CD94]/20"
        >
          🎮 Запустить игру
        </button>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 text-center">
        <span className="text-xs text-gray-600">Медиакоми © 2024</span>
      </div>
    </div>
  );
}
