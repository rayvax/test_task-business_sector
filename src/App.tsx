import { HashRouter } from 'react-router-dom';
import { PostsPage } from './pages/posts';

function App() {
  return (
    <HashRouter>
      <div className='content-area'>
        <PostsPage />
      </div>
    </HashRouter>
  );
}

export default App;
