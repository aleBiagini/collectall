import "./App.css";
import MultipleSelectPlaceholder from "./components/MultipleSelectPlaceholder/MultipleSelectPlaceholder";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import StandardImageList from "./components/StandardImageList/StandardImageList";

function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <MultipleSelectPlaceholder></MultipleSelectPlaceholder>
      <StandardImageList></StandardImageList>
    </>
  );
}

export default App;
