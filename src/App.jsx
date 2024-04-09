import './App.css';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import LangTag from './components/LangTag';
import LangTags from './components/LangTags';


function App() {
  return (
    <>
      <Title />
      <SearchBar />
      <LangTags>
        <LangTag text="JavaScript" />
        <LangTag text="Python" />
      </LangTags>
      
    </>
  );
}

export default App;
