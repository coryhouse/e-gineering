import { Home } from "./Home";
import { BrowserRouter, Route } from "react-router-dom";
import { About } from "./About";
import { Nav } from "./Nav";
import { FoodForm } from "./FoodForm";
import { QueryClientProvider, QueryClient } from "react-query";

export function App() {
  const queryClient = new QueryClient();

  return (
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
  );
}
