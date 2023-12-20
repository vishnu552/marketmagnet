import { useContext, useState, createContext } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isFormOpen, setFormOpen] = useState(true);
  function closeForm() {
    setFormOpen(false);
  }
  function openForm() {
    setFormOpen(true);
  }
  return (
    <AppContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalForm = () => {
  return useContext(AppContext);
};
