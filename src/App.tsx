import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { strict } from "assert";

type UserType = {
  avatarUrl: string;
  fullName: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<Array<UserType>>([
    {
      avatarUrl: "",
      fullName: "Вася",
      email: "vasya@pupkin.ru",
    },
    {
      avatarUrl: "",
      fullName: "фыв",
      email: "vasya@pupkin.ru",
    },
    {
      avatarUrl: "",
      fullName: "555555",
      email: "vasya@pupkin.ru",
    },
    {
      avatarUrl: "",
      fullName: "рррррррррррррррр",
      email: "vasya@pupkin.ru",
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputValue(value);
  };

  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="box">
            <h3 className="title">Рассылка приглашений</h3>
            <form action="#">
              <div className="search">
                <label className="search__label">
                  <input
                    className="search__user search__input"
                    type="text"
                    placeholder="Найти пользователя"
                    onChange={handleChangeInput}
                    value={inputValue}
                  />
                  <img
                    className="search__icon-close"
                    src="./assets/images/close-btn.svg"
                    alt="Закрыть"
                  />
                </label>
              </div>

              <div className="users">
                {users
                  .filter((u) =>
                    u.fullName
                      .toLocaleLowerCase()
                      .includes(inputValue.toLocaleLowerCase())
                  )
                  .map((u) => (
                    <div className="users__box">
                      <div className="users__left">
                        <img src={u.avatarUrl} alt="Пользователь" />
                        <div className="users__inner">
                          <h4 className="users__name">{u.fullName}</h4>
                          <p className="users__subtext">{u.email}</p>
                        </div>
                      </div>
                      <div className="users__right">
                        <button type="button" className="close-btn"></button>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="form__btn">
                <button className="form__btn-cancel">Отмена</button>
                <button className="form__btn-submit" type="submit">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
