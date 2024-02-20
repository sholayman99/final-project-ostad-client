import React from 'react';
import {Modal} from "react-responsive-modal";
import {HiExclamation} from "react-icons/hi";

const UpdateModal = ({ isOpen, onClose, onUpdate }) => {
    return (
        <Modal open={isOpen} onClose={onClose} center>
            <div className="p-5 max-w-sm mx-auto">
                <div className="text-center">
                    <HiExclamation className="w-16 h-16 text-red-500 mx-auto" />
                    <h2 className="text-xl font-semibold mt-4">Confirm Update</h2>
                    <p className="text-gray-600 mt-2">Are you sure you want to update this item?</p>
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        onClick={onUpdate}
                        className="bg-green-400 hover:bg-green-600 text-primary font-semibold px-4 py-2 rounded mr-2"
                    >
                        Update
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 hover:bg-gray-400 text-primary font-semibold px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default UpdateModal;