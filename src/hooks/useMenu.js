import FirebaseMenuService from "../services/firebaseMenuService";
import {useState, useEffect} from "react";

const menuService = new FirebaseMenuService();

const useMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function getData() {
      const data = await menuService.getMenu();

      if (!cancelled) {
        setMenu(data);
      }
    }

    getData();

    return () => {
      // cancel if unmounted
      cancelled = true;
    }
  }, []);

  return menu;
};

export default useMenu;
