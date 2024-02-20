import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import {HiExclamation} from "react-icons/hi";

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
    return (
        <Modal open={isOpen} onClose={onClose} center>
            <div className="p-5 max-w-sm mx-auto">
                <div className="text-center">
                    <HiExclamation className="w-16 h-16 text-red-500 mx-auto" />
                    <h2 className="text-xl font-semibold mt-4">Confirm Deletion</h2>
                    <p className="text-gray-600 mt-2">Are you sure you want to delete this item?</p>
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        onClick={onDelete}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded mr-2"
                    >
                        Delete
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-green-500 hover:bg-green-600 text-primary font-semibold px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteModal;