import { Radio } from 'antd';
import Modal from 'antd/lib/modal/Modal';

interface props {
  isVisible: boolean;
  setIsVisible: any;
}

export const AddSessionModal = ({ isVisible, setIsVisible }: props) => {
  const handleOk = () => {
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <Modal
      title="Add New Session"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={700}
    >
      <p>type:</p>
      <Radio.Group name="test" style={{ display: 'inline' }}>
        <Radio value={1}>Lecture</Radio>
        <Radio value={2}>Tutorial</Radio>
        <Radio value={3}>Lab</Radio>
      </Radio.Group>
    </Modal>
  );
};
