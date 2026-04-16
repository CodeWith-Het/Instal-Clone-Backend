import AppRouter from "./AppRouter";
import './style.scss'
import { AuthProvider } from "./feature/auth/auth.context";

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
