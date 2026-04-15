function FilterButtons({ filter, setFilter }) {
  const buttonBaseClass = "px-8 py-2 rounded-full text-lg font-medium transition-all duration-200";
  
  return (
    <div className="flex justify-center gap-16">
      <button 
        onClick={() => setFilter('Все')}
        className={`${buttonBaseClass} ${
          filter === 'Все' 
            ? 'bg-white text-emerald-800 shadow-lg scale-105' 
            : 'bg-green-900/60 text-white hover:bg-green-900 hover:scale-105'
        }`}
      >
        Все книги
      </button>
      
      <button 
        onClick={() => setFilter('В наличии')}
        className={`${buttonBaseClass} ${
          filter === 'В наличии' 
            ? 'bg-white text-emerald-800 shadow-lg scale-105' 
            : 'bg-green-900/60 text-white hover:bg-green-900 hover:scale-105'
        }`}
      >
        В наличии
      </button>
      
      <button 
        onClick={() => setFilter('Отсутствует')}
        className={`${buttonBaseClass} ${
          filter === 'Отсутствует' 
            ? 'bg-white text-emerald-800 shadow-lg scale-105' 
            : 'bg-green-900/60  text-white hover:bg-green-900 hover:scale-105'
        }`}
      >
        Отсутствуют
      </button>
    </div>
  );
}

export default FilterButtons;