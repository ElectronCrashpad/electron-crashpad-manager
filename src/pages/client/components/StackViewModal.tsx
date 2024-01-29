import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'antd';
import * as monaco from 'monaco-editor';

const StackViewModal: React.FC<{
    isOpen: boolean;
    handleClose: () => void;
    stackContent: string;
    title: string;
}> = (props) => {
    const stackViewRef = useRef<HTMLDivElement>(null);

    const [stackViewEditer, setStackViewEditer] = useState<monaco.editor.IStandaloneCodeEditor>();

    useEffect(() => {
        if (stackViewRef.current && props.isOpen) {
            if (stackViewEditer) {
                stackViewEditer.setScrollTop(0);
                stackViewEditer.setValue(props.stackContent);
            } else {
                setStackViewEditer(monaco.editor.create(stackViewRef.current, {
                    value: props.stackContent,
                    readOnly: true
                }));
            }
        }
    }, [props.stackContent]);

    return (
        <Modal
            title={props.title}
            open={props.isOpen}
            onOk={props.handleClose}
            onCancel={props.handleClose}
            cancelButtonProps={{
                style: { display: 'none' }
            }}
            width={window.innerWidth * 0.66}
            styles={{ body: { height: '66vh' } }}
            style={{ top: '4vh' }}
        >
            <div ref={stackViewRef} style={{ height: '100%' }}></div>
        </Modal>
    );
};

export default StackViewModal;