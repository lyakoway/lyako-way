import { setToastList } from "src/reducers";
import { Person } from "src/ui/Toast/Toast";
import { getToastDataList } from "src/common/utils/getToastDataList";
import { useDispatchTyped, useSelectorTyped } from "src/store";

export interface IToastNotifyProps {
  title?: string;
  text?: string;
  type?: "info" | "success" | "error";
}

export const useToastNotify = () => {
  const { toastList } = useSelectorTyped(({ toast }) => toast);
  const dispatch = useDispatchTyped();

  return ({ title = "", text = "", type = "success" }: IToastNotifyProps) => {
    if (toastList) {
      const toastDataList: Person[] = getToastDataList({
        text: text,
        id: toastList.length + 1,
        title: title,
      });
      const toastDataListValue: Person | undefined = toastDataList.find(
        (item) => item.type === type
      );

      if (toastDataListValue) {
        dispatch(setToastList([...toastList, toastDataListValue]));
      }
    }
  };
};
