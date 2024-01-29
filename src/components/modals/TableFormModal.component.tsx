import { Modal } from 'antd';
import React, { PropsWithChildren } from 'react';

interface TableFormModalProps {
    title: string;
    modalVisible: boolean;
    onCancel: () => void;
  }

const TableFormModal: React.FC<PropsWithChildren<TableFormModalProps>> = (props) => {
    const { modalVisible, onCancel } = props;

    return (
        <Modal
            destroyOnClose
            title={ props.title }
            width={ 420 }
            open={ modalVisible }
            onCancel={ () => onCancel() }
            footer={ null }
        >
            {props.children}
        </Modal>
    );
};

export default TableFormModal;