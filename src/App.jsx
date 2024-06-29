import Header from "./components/Header";
import useToogle from "./hooks/UseToggle";
import Login from "./pages/auth/login/Login";

function App() {
  const { isTrue: showLoginModal, toggle: toogleLoginModal } = useToogle();
  return (
    <div className="max-w-[1000px] mx-auto shadow-md ">
      <Header toogleLoginModal={toogleLoginModal} />
      <Login
        showLoginModal={showLoginModal}
        toogleLoginModal={toogleLoginModal}
      />
    </div>
  );
}

export default App;
