import React from "react";
import Popup from "./popup";
import { useState } from "react";
function Row({ item, index, handleDelet }) {
  const [showModal, setShowModal] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const closeModal =(e)=>{
    e.preventDefault();
    setShowModal(false);
  }
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{item.name}</td>
        <td>{item.director}</td>
        <td>{item.genre}</td>
        <td>{item.year}</td>
        <td>
          <button className="description" onClick={(e) => openModal(e)}>
            توضیحات
          </button>
          {showModal && (
            <Popup
              description={item.description}
              onClose={closeModal}
            ></Popup>
          )}
        </td>
        <td>
          <button className="delet" onClick={() => handleDelet(item.id)}>
            حذف
          </button>
        </td>
      </tr>
    </>
  );
}

export default Row;
