import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import RecipeViewer from "./components/RecipeViewer"
import GlobalStyles from "./components/GlobalStyles";
import { ListProvider } from "./components/ListContext";
import RecipesList from "./components/RecipesList";
import About from "./components/About";


function App() {

  return (
    <>
    <ListProvider>
      <BrowserRouter>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/recipes/:id" element={<RecipesList />} />
            <Route path="/recipe/:id" element={<RecipeViewer />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </BrowserRouter>
    </ListProvider>


    </>
  )
}

export default App
