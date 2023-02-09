export default function Modal({ setOpenModal, children }) {
    const closeModal = () => {
        setOpenModal(false);
    };
    return (
        <div
            className='overlay'
            onClick={(e) => {
                e.stopPropagation();
                closeModal(e);
            }}
        >
            <div
                className='modal-body'
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                {children}
            </div>
        </div>
    );
}
