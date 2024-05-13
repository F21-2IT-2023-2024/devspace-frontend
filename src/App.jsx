import './App.css';
import AddSnippetBtn from './components/AddSnippetBtn';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import LangTag from './components/LangTag';
import LangTags from './components/LangTags';
import SnippetGrid from './components/SnippetGrid';
import Snippet from './components/Snippet';
import SnippetCode from './components/SnippetCode';
import Heart from './components/Heart';


function App() {
  return (
    <div className='text-secondary'>
      <AddSnippetBtn />
      <Title />
      <SearchBar />
      <LangTags>
        <LangTag text="JavaScript" />
        <LangTag text="Python" />
        <LangTag text="Java" />
        <LangTag text="CSS" />
        <LangTag text="HTML" />
        <LangTag text="TypeScript" />
        <LangTag text="C#" />
      </LangTags>
      <SnippetGrid>
        <Snippet>
          <Heart />
          <SnippetCode />
        </Snippet>
      </SnippetGrid>
    </div>
  );
}

export default App;
