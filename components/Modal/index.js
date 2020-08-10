/*import styled from 'styled-components';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const TitleModal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;



const CommonModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle} className="note-madal" centered>
      <TitleModal onClick={props.toggle}>
        <h5>{props.title}</h5>
        <button type="button" style={{outline: 'none'}} className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </TitleModal>
      <ModalBody>
        {props.children}
      </ModalBody>
    </Modal>
  )
}

export default CommonModal;
*/
