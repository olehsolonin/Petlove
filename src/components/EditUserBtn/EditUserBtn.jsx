import css from "./EditUserBtn.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import Modal from "react-modal";

// обязательно для доступности
Modal.setAppElement("#root");

export default function EditUserBtn() {
  const userName = useSelector((state) => state.userInfo.name);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={css.editProfileContainer}>
      <button className={css.profileBtn}>
        {userName}
        <span>
          <IoPersonSharp className={css.icon} />
        </span>
      </button>
      <button className={css.editBtn} onClick={() => setIsOpen(true)}>
        <span>
          <FiEdit2 className={css.editPencil} />
        </span>
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)} // Закрытие по клику вне окна или Esc
        contentLabel="Пример модального окна"
        style={{
          content: {
            width: "400px",
            margin: "auto",
            padding: "20px",
          },
        }}
      >
        <h2>Заголовок</h2>
        <p>Содержимое модалки</p>
        <button onClick={() => setIsOpen(false)}>Закрыть</button>
      </Modal>
    </div>
  );
}
