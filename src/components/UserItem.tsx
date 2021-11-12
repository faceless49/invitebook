import React from "react";
import { UserType } from "../App";

export type UserItemType = {
  id: number;
  fullName: string;
  avatarUrl: string;
  email: string;
  onAdd: (
    id: number,
    fullName: string,
    avatarUrl: string,
    email: string
  ) => void;
  isAdded: any;
};
export const UserItem = (props: UserItemType) => {
  const { id, fullName, avatarUrl, email, onAdd, isAdded } = props;

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
          onClick={() => onAdd(id, fullName, avatarUrl, email)}
          type="button"
          className={`close-btn ${isAdded ? "pushed" : ""}`}
        />
      </div>
    </div>
  );
};
