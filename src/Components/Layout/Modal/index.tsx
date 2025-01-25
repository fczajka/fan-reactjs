import { useState, useEffect } from 'react';
import Logic from './Logic';
import Modal from './Modal';
import { handleModal } from '../../../helpers/helpers';

function WrapperModal() {
  const [showModal, setShowModal] = useState<boolean>(true);

  const isModalClosed = localStorage.getItem('modal');

  useEffect(() => {
    handleModal(isModalClosed, setShowModal);
  }, [isModalClosed]);

  return showModal ? (
    <Logic>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Logic>
  ) : null;
}

export default WrapperModal;
