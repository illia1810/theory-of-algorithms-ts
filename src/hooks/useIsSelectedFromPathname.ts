import { useLocation } from 'react-router';
import { IOption } from '../components/sidebar/sidebarTypes';

const useIsSelectedFromPathname = (): Function => {
  const location = useLocation();

  return (option: IOption): boolean => {
    if (option.id === 'kanban-board') {
      if (location.pathname === option.activeOnPathes[0]) {
        return true;
      }
      return false;
    }
    if (option.activeOnPathes.length) {
      for (let i = 0; i < option.activeOnPathes.length; i++) {
        if (location.pathname === option.activeOnPathes[i]) {
          return true;
        }
      }
    }
    return false;
  };
};

export default useIsSelectedFromPathname;
