import "./custom.css";
import { Alert } from "@mui/material";
import { QuickStart } from "./components/QuickStart";

const App: React.FC = () => {
  return (
    <div>
      <Alert severity="success">React Hook Form Test with MUI</Alert>
      <h1>Quick Start Example</h1>
      <QuickStart />
    </div>
  );
};

export default App;
