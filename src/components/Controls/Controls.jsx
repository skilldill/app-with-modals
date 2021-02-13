import React, { useContext } from "react";

import "./style.css";
import { ModalContext } from "../../contexts";

export const Controls = () => {
    const { openModal, closeModal } = useContext(ModalContext);

    const handleClickFirstButton = () => {
        openModal({
            title: 'Opened by First Button',
            children: "MODAL MODAL MODAL"
        });
    }

    const handleClickSecondButton = () => {
        openModal({
            title: 'Opened by Second Button',
            children: <h1>SECOND MODAL</h1>
        });
    }

    const handleClickThridButton = () => {
        openModal({
            title: 'Opened by Thrid Button',
            children: <div><button onClick={closeModal}>CLOSE MODAL</button></div>
        });
    }

    return (
        <div className="controls">
            <button onClick={handleClickFirstButton}>Open first modal</button>
            <button onClick={handleClickSecondButton}>Open second modal</button>
            <button onClick={handleClickThridButton}>Open thrid modal</button>
        </div>
    )
}