import { useEffect } from 'react';

import {
  Container,
  Notification,
  TextWrapper,
  Title,
  Text,
  Wrapper,
  WrapperClose,
  Content,
} from './style';
import { getToastIcon } from '../Icon';
import ButtonDelete from '../ButtonDelete';
import { useAppDispatch, useSelectorTyped } from '../../../store';
import { setToastList } from '../../../reducers/toast-slice';
import { useToastListItem } from '../../../common/hooks/use-toast-list';

export interface Person {
  id: number;
  title: string;
  text: string;
  backgroundColor: string;
  type?: 'info' | 'success' | 'error';
}

const ToastMap = (
  toast: Person,
  id: number,
  deleteToast: (value: number) => void
) => {
  const Icon = getToastIcon(toast?.type ? toast.type : 'error');
  return (
    <Notification key={id} backgroundColor={toast.backgroundColor}>
      <Icon />
      <TextWrapper>
        <Title>{toast.title}</Title>
        <Text>{toast.text}</Text>
      </TextWrapper>
      <WrapperClose>
        <ButtonDelete onClick={() => deleteToast(toast.id)}>
          &times;
        </ButtonDelete>
      </WrapperClose>
    </Notification>
  );
};

export const Toast = () => {
  const { toastList } = useSelectorTyped(({ toast }) => toast);
  const dispatch = useAppDispatch();
  const deleteToast = useToastListItem();

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        deleteToast(toastList[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, deleteToast]);

  return (
    <Container>
      {toastList.length > 1 && (
        <Wrapper>
          <ButtonDelete onClick={() => dispatch(setToastList([]))}>
            &times;
          </ButtonDelete>
        </Wrapper>
      )}
      <Content>
        {toastList.map((toast, id) => ToastMap(toast, id, deleteToast))}
      </Content>
    </Container>
  );
};
