import React, { useState } from "react";

export type UserItemType = {
  avatarUrl: string;
  fullName: string;
  email: string;
  onAdd: (fullName: string) => void;
};
export const UserItem = (props: UserItemType) => {
  const { fullName, avatarUrl, email, onAdd } = props;

  const [list, setList] = useState<Array<UserItemType>>([]);

  return (
    <div key={fullName} className="users__box">
      <div className="users__left">
        <img src={avatarUrl} alt="Пользователь" />
        <div className="users__inner">
          <h4 className="users__name">{fullName}</h4>
          <p className="users__subtext">{email}</p>
        </div>
      </div>
      <div className="users__right">
        <button
          onClick={() => onAdd(fullName)}
          type="button"
          className="close-btn"
        ></button>
      </div>
    </div>
  );
};
