import { useState, useEffect } from 'react'
import { books } from './Data';
import FilterButtons from './FilterButtons';

function App() {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Все');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const sortedBooks = [...books].sort((a, b) => 
  (b.status === 'В наличии') - (a.status === 'В наличии'));

  const filtered = sortedBooks.filter(book =>{
    if (filter === 'Все') return true;
    return book.status === filter;
  });

  if (loading) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-xl text-emerald-600 mb-6">Загрузка...</div>
      
      <div className="w-80 h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-linear-160 from-emerald-900 to-green-600 rounded-full"
          style={{
            animation: 'progress 1s ease-in-out forwards'
          }}
        />
      </div>
      
      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}

  return (
    <div className="min-h-screen">
      <div className="bg-linear-60 from-emerald-900 to-green-600 shadow-lg">
        <h1 className="text-3xl font-bold text-center p-12 text-white tracking-widest uppercase">
          Бибилиотека
        </h1>
        
        <div className="pb-8">
          <FilterButtons filter={filter} setFilter={setFilter} />
        </div>
      </div>
      
        <ul className="space-y-5 pr-10 pl-10 pt-5 flex-wrap justify-items-center">
          {filtered.map(book => (
            <li key={book.id}
              className="p-4 bg-white rounded-2xl shadow border border-r-6 border-b-6 w-10/12
              border-gray-100 relative 
              transition duration-100 ease-in-out hover:scale-99">

              <span className={`absolute top-5.5 right-3 text-s px-2 py-1 rounded-lg ${
                book.status === 'В наличии' 
                  ? 'bg-green-100 text-emerald-700' 
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {book.status}
              </span>
              
              <div className="font-medium text-black pr-16">
                {book.title}
              </div>
              <div className="text-gray-600 text-sm">
                {book.author}
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;