import { useDispatchTyped, useSelectorTyped } from "src/store";
import { setToastList } from "src/reducers";

export const useToastListItem = () => {
  const { toastList } = useSelectorTyped(({ toast }) => toast);
  const dispatch = useDispatchTyped();

  const deleteToast = (id: number) => {
    const toastListItem = toastList.filter((e) => e.id !== id);
    dispatch(setToastList(toastListItem));
  };

  return deleteToast;
};
