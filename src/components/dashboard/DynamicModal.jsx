// DynamicModal.jsx
import React from 'react';
import Modal from 'react-modal';

const DynamicModal = ({ modalIsOpen, closeModal, ContentComponent }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Dynamic Modal"
      className="fixed inset-0 flex items-center justify-center mt-[180px] bg-black bg-opacity-10"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-7">
        <div className="flex justify-between items-center mb-4">
          <button onClick={closeModal} className="text-black text-xl font-bold">
            ✕
          </button>
          <p className="font-semibold text-[16px] text-[#000000]">
            Social Network
          </p>
        </div>
        <div className="mt-6">
          <ContentComponent />
        </div>
      </div>
    </Modal>
  );
};

export default DynamicModal;
