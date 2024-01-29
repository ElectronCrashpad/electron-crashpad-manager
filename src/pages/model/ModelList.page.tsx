import { Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { trim } from '../../utils/format';
import PlayerService from '../../services/player/index';
import CharacterService from '../../services/character/index';
import { name, account, password } from "../../components/columns/player";
import TableManagePage from '../../components/tables/TableManagePage.component';
import TransferModal from '../../components/modals/TransferModal.component';
import React, { useEffect } from 'react';

const PlayerPage: React.FC = () => {
    const [characterTransferModalVisible, setCharacterTransferModalVisible] = React.useState<boolean>(false);
    const [characterTransferModalData, setCharacterTransferModalData] = React.useState<{ key: string; title: string; }[]>([]);
    const [characterTransferModalTargetKeys, setCharacterTransferModalTargetKeys] = React.useState<string[]>([]);
    const [currentPlayer, setCurrentPlayer] = React.useState<PlayerAPI.IPlayerEntity | null>(null);

    const onCharacterConfigure = (record: PlayerAPI.IPlayerEntity) => {
        PlayerService.PlayerController.getCharacterByPlayerId(record.id!).then((characters) => {
            setCharacterTransferModalTargetKeys(characters.map((item) => item.id!.toString()));
            setCharacterTransferModalVisible(true);
            setCurrentPlayer(record);
        });
    };

    useEffect(() => {
        CharacterService.CharacterController.getPage({
            page: 1,
            size: 9999
        }).then(({ data }) => {
            setCharacterTransferModalData(data.map((item) => ({
                key: item.id!.toString(),
                title: item.name!
            })));
        });
    }, []);

    return (
        <>
            <TableManagePage
                columns={[
                    ...name,
                    ...account,
                    ...password
                ]}
                name="玩家"
                searchMethod={(params = {}, sort) => {
                    const { current, pageSize, ...rest } = params;
                    const restParams = rest as PlayerAPI.IPlayerQuery & PlayerAPI.IPlayerEntity;

                    if (restParams.name) restParams.nameLike = trim(restParams.name);

                    return PlayerService.PlayerController.getPage({
                        page: current,
                        size: pageSize,
                        order: sort.order,
                        sort: sort.field && trim(sort.field),
                        query: restParams
                    });
                }}
                createMethod={async (value) => {
                    try {
                        await PlayerService.PlayerController.add(value as PlayerAPI.IPlayerEntity);
                        return true;
                    } catch (error) {
                        message.error((error as BaseAPI.IError).message);
                        throw error;
                    }
                }}
                updateMethod={async (value, { id }) => {
                    await PlayerService.PlayerController.update(id, value);
                    return true;
                }}
                deleteMethod={async ({ id }) => {
                    try {
                        await PlayerService.PlayerController.discard(id);
                        return true;
                    } catch (error) {
                        if (error instanceof Error) message.error(error.message);
                        throw error;
                    }
                }}
                operateNode={(record: PlayerAPI.IPlayerEntity) => {
                    return (
                        <Dropdown menu={{
                            items: [{
                                key: '1',
                                label: '角色配置',
                                onClick: () => {
                                    onCharacterConfigure(record);
                                }
                            }]
                        }}>
                            <a onClick={(e) => e.preventDefault()}>
                                更多
                                <DownOutlined />
                            </a>
                        </Dropdown>
                    );
                }}
            />
            <TransferModal
                title="角色配置"
                visible={characterTransferModalVisible}
                onCancel={() => {
                    setCharacterTransferModalVisible(false);
                }}
                onOk={(targetKeys) => {
                    PlayerService.PlayerController.configCharacter(
                        currentPlayer!.id!,
                        {characterIds: targetKeys.map((item) => parseInt(item))}
                    ).then(() => {
                        message.success('配置成功');
                        setCharacterTransferModalVisible(false);
                    });
                }}
                transferData={characterTransferModalData}
                transferTargetKeys={characterTransferModalTargetKeys}
                transferTitles={['全部角色', '已配置角色']}
            />
        </>
    );
};

export default PlayerPage;