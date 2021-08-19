import { Home } from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import { About } from "./About";
import { Nav } from "./Nav";
import { FoodForm } from "./FoodForm";
import { QueryClientProvider, QueryClient } from "react-query";
import { UserContextProvider, UserContextType } from "./UserContext";

const user: UserContextType = {
  email: "c@h.com",
  name: "Cory",
  role: "admin",
  token: "1234",
};

export function App() {
  const queryClient = new QueryClient();

  return (
    <UserContextProvider value={user}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Nav />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/food" exact>
            <FoodForm />
          </Route>
          <Route path="/food/:foodId">
            <FoodForm />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </BrowserRouter>
      </QueryClientProvider>
    </UserContextProvider>
  );
}
