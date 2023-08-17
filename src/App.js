import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import SelectMenu from "./pages/select/SelectMenu";
import CardRank from "./pages/rank/CardRank";
import CategoryRank from "./pages/rank/CategoryRank";
import SearchCardCompany from "./pages/search/SearchCardCompany";
import MyList from "./pages/myList/MyList";
import Introduction from "./pages/introduction/Introduction";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/select-menu" element={<SelectMenu />} />
        <Route path="/card-rank" element={<CardRank />} />
        <Route path="/category-rank" element={<CategoryRank />} />
        <Route path="/search-card-company" element={<SearchCardCompany />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </div>
  );
}

export default App;
