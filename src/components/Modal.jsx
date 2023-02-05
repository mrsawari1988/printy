export default function Modal({ openModal }) {
    if (!openModal) {
        return null;
    }
    return (
        <div className='overlay'>
            <div className='modal-body'>
                <div className='modal-header'>
                    <h3>this is a modal</h3>
                </div>
                <div className='modal-content'>
                    <label>this is file name</label>
                    <select name='printers' id='printers'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                    <input type='text' name='copies' />
                    <button>save</button>
                </div>
                <div className='modal-footer'>
                    <h4>this is footer</h4>
                </div>
            </div>
        </div>
    );
}
