import './modal.css'
import TrashIcon from './TrashIcon';
const DeleteModal = ({onDelete, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
      <TrashIcon size={'2x'}/>
        <h2 className='h2'>Are you sure you want to delete?</h2>
        <div className="button-container">
          <button type='submit' onClick={onDelete}>Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

