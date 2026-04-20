import AppRouter from "./AppRouter";
import './feature/shared/style.scss'
import { AuthProvider } from "./feature/auth/auth.context";
import { PostContextProvider } from "./feature/post/post.context";

const App = () => {
  return (
    <AuthProvider>
      <PostContextProvider>
        <AppRouter />
      </PostContextProvider>
    </AuthProvider>
  );
};

export default App;
