import { createContext, useContext, useState, useEffect } from "react";

const EffectContext = createContext();

export const EffectProvider = ({ children }) => {
  const [godMode, setGodMode] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const checkUnlock = () => {
      const hashUnlocked = window.location.hash === "#god";
      const storageUnlocked = localStorage.getItem("secret") === "true";
      setUnlocked(hashUnlocked || storageUnlocked);
    };

    checkUnlock();
    window.addEventListener("hashchange", checkUnlock);

    return () => window.removeEventListener("hashchange", checkUnlock);
  }, []);

  useEffect(() => {
    if (!unlocked) return;

    const toggle = (e) => {
      if (e.key.toLowerCase() === "g") {
        setGodMode((prev) => !prev);
      }
    };

    window.addEventListener("keydown", toggle);
    return () => window.removeEventListener("keydown", toggle);
  }, [unlocked]);

  return (
    <EffectContext.Provider value={{ godMode, unlocked }}>
      {children}
    </EffectContext.Provider>
  );
};

export const useEffects = () => useContext(EffectContext);
