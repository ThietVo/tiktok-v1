import { Route, Routes } from "react-router-dom";
import Following from "./components/Following/Following";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./components/Home/Home";
import Live from "./components/Live/Live";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import UserDetail from "./components/UserDetail/UserDetail";
import Upload from "./components/Upload/Upload";
import VideoDetail from "./components/VideoDetail/VideoDetail";

function App() {
  return (
    <GlobalStyles>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/following' element={<Following />}/>
            <Route path='/live' element={<Live />}/>
            <Route path='/:userId' element={<UserDetail />}/>
            <Route path='/upload' element={<Upload />}/>
            <Route path='/:userId/video/:videoId' element={<VideoDetail />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </Layout>
    </GlobalStyles>
  );
}
export default App;
