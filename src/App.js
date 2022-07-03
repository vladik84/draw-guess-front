import React from "react";

import "./App.css";
import PageSwitcher from "./components/PageSwitcher";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <PageSwitcher />
      </QueryClientProvider>

    </div>
  );
};

export default App;
