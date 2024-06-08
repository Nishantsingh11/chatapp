import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatApp from "./components/Chats";

const App = () => {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path ="/" element ={<ChatApp />} />
  </Routes>
  </BrowserRouter>
  </>;
};

export default App;
