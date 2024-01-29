import { trim } from '../../utils/format';
import ClientServer from '../../services/client/index';
import { name, version, ver, platform, osarch } from "../../components/columns/client";
import TableManagePage from '../../components/tables/TableManagePage.component';
import StackViewModal from './components/StackViewModal';
import { useState } from 'react';

const CrashpadListPage: React.FC = () => {
    const [isStackViewModalOpen, setIsStackViewModalOpen] = useState<boolean>(false);
    const [currentStackContentInView, setCurrentStackContentInView] = useState<string>('');

    const handleStackViewModalClose = () => setIsStackViewModalOpen(false);

    return (
        <>
            <TableManagePage
                columns={[
                    ...name,
                    ...version,
                    ...ver,
                    ...platform,
                    ...osarch
                ]}
                name="崩溃记录"
                searchMethod={async (params = {}, sort) => {
                    const { current, pageSize, ...rest } = params;
                    const restParams = rest as ClientAPI.ICrashpadQuery & ClientAPI.ICrashpadEntity;

                    return ClientServer.ClientController.getPage({
                        page: current,
                        size: pageSize,
                        order: sort.order,
                        sort: sort.field && trim(sort.field),
                        query: restParams
                    });
                }}
                operateNode={(record: PlayerAPI.IPlayerEntity) => {
                    return (
                        <a
                            onClick={() => {
                                record.id && (ClientServer.ClientController.analysisCrashpadById(record.id).then((result) => {
                                    setCurrentStackContentInView(result);
                                    setIsStackViewModalOpen(true);
                                }));
                            }}
                        >
                            崩溃分析
                        </a>
                    );
                }}
            />
            <StackViewModal title='崩溃分析' isOpen={isStackViewModalOpen} handleClose={handleStackViewModalClose} stackContent={currentStackContentInView} />
        </>
    );
};

export default CrashpadListPage;