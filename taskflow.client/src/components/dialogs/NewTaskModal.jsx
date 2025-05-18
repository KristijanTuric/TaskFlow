import { DefaultForm } from '../../styles/Form.style';
import { ModalOverlay, Modal } from '../../styles/Div.style';
import CustomButton from '../CustomButton';
import { Plus, Flag, Calendar, Repeat, Tray, Check } from "@phosphor-icons/react";

export default function NewTaskModal({ onClose }) {
    return (
        <ModalOverlay className="modal-overlay">
            <Modal className="modal">
                <DefaultForm>
                    <input type="text" placeholder="Task name"></input>

                    <div>
                        <CustomButton title="Due date" icon={<Calendar size={20} />} />
                        <CustomButton title="Priority" icon={<Flag size={20} />} />
                        <CustomButton title="Repeat" icon={<Repeat size={20} />} />
                    </div>

                    <div>
                        <CustomButton title="Category" icon={<Tray size={20} />} />
                        <CustomButton title="Add task" icon={<Check size={20} />} type="submit" onClick={ onClose } />
                    </div>           
                </DefaultForm>
            </Modal>
        </ModalOverlay>
    );
}