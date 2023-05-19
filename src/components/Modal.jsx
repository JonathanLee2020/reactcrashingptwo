import "./Modal.css"

function Modal ({title, keep, end, closeModal}) {
    return (
    <div>
        <div className="modal">
            <p className="modal__title">{title}</p>
            <div className="modal__buttons">
                <button className="btn btn__cancel" onClick={closeModal}>{keep}</button>
                <button className="btn" onClick={closeModal}>{end}</button>
            </div>
        </div>
        <div className="backdrop" />
    </div>
    )
}

export default Modal;