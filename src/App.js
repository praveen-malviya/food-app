import Header from "./components/Header";
// import Home from "./components/Home";
import Menu from "./components/Menu";
import MenuContextProvider from "./context/MenuContext";


function App() {
  return (
    <div className="App">
      <MenuContextProvider>
        <Header />
        {/* <Home /> */}
        <Menu />
        </MenuContextProvider>
    </div>
  );
}

export default App;
