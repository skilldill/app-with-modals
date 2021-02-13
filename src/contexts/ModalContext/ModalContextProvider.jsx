import React, { useState } from "react";

import { ModalContext } from "./ModalContext";
import { Modal } from "../../components";

export const ModalProvider = ({ children }) => {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    
    const openModal = (modalConfig) => {
        setModalContent(modalConfig);
        setModalOpened(true);
    }

    const closeModal = () => {
        setModalOpened(false);
    }

    const valueModalProvider = {
        openModal,
        closeModal
    }

    return (
        <ModalContext.Provider value={valueModalProvider}>
            {modalOpened && <Modal {...modalContent} />}
            {children}
        </ModalContext.Provider>
    )
}