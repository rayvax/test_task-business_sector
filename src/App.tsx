import { BrowserRouter } from 'react-router-dom';
import { PostsPage } from './pages/posts';

function App() {
  return (
    <BrowserRouter>
      <div className='content-area'>
        <PostsPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
