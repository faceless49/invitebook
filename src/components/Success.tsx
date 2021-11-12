import Icon from "./../assets/images/successfully.svg";
import { FC } from "react";
type Props = {
  onClose: () => void;
};
export const Success: FC<Props> = (props) => {
  const { onClose } = props;
  return (
    <div className="success__box">
      <img src={Icon} alt="Success" />
      <h3 className="success__title">Успешно отправлено!</h3>
      <p className="success__text">
        Все пользователи из списка были оповещены о вашем мероприятии
      </p>
      <button className="success__btn" onClick={onClose}>
        Хорошо
      </button>
    </div>
  );
};
