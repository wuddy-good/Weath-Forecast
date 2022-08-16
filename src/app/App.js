
import CardListItem from '../components/card-list-item/card-list-item';
import SearchPanel from '../components/SearcPanel/SearchPanel';

function App() {
  return (
    <div className="App">
      <header>
        <nav >
          <div className='SearchPanel'>
              <SearchPanel/>
          </div>
        </nav>
      </header>
      <main>
        <CardListItem/>
      </main>
    </div>
  );
}

export default App;
