import { ProColumns } from "@ant-design/pro-components";
import { Avatar, Input, Select, Space, Upload, message } from "antd";
import EffectService from "@/services/effect";
import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import AvatarUpload from "@/components/AvatarUpload";

export const name: ProColumns<EffectAPI.IEffectEntity>[] = [{
    title: '名称',
    dataIndex: 'name',
    valueType: 'text',
    render: (_, record) => (<Space>
        <Avatar src={`/api/file/effect-icon/${record.iconUrl}`} />
        {record.name}
    </Space>)
}, {
    title: '图标',
    dataIndex: 'iconUrl',
    valueType: 'avatar',
    hideInTable: true,
    hideInSearch: true,
    renderFormItem: (_, { type, defaultRender, ...rest }, form) => (
        <AvatarUpload
            defaultImageUrl={form.getFieldValue('iconUrl')}
            directory="/api/file/effect-icon/"
            updateRequest={async ({
                file,
                filename
            }) => {
                return await EffectService.EffectController.uploadEffectIcon(file);
            }}
            onUploadFailed={(error) => {
                message.error(error.message);
            }}
            onUploadSucess={(url) => {
                form.setFieldsValue({ iconUrl: url });
            }}
        />
    )
}];

export const type: ProColumns<EffectAPI.IEffectEntity>[] = [{
    title: '类型',
    dataIndex: 'type',
    valueType: 'select',
    valueEnum: {
        [EffectService.EffectTypeEnum.BUFF]: { text: '增益' },
        [EffectService.EffectTypeEnum.DEBUFF]: { text: '减益' },
        [EffectService.EffectTypeEnum.DAMAGE]: { text: '伤害' },
        [EffectService.EffectTypeEnum.HEAL]: { text: '治疗' },
        [EffectService.EffectTypeEnum.OTHER]: { text: '其他' },
        [EffectService.EffectTypeEnum.RECOVER]: { text: '恢复' },
        [EffectService.EffectTypeEnum.RESIST]: { text: '抵抗' },
        [EffectService.EffectTypeEnum.SHIELD]: { text: '护盾' },
        [EffectService.EffectTypeEnum.SUMMON]: { text: '召唤' },
        [EffectService.EffectTypeEnum.TRANSFORM]: { text: '变形' },
        [EffectService.EffectTypeEnum.TRIGGER]: { text: '触发' },
    },
}];

export const target: ProColumns<EffectAPI.IEffectEntity>[] = [{
    title: '目标',
    dataIndex: 'target',
    valueType: 'select',
    valueEnum: {
        [EffectService.EffectTargetEnum.SELF]: { text: '自己' },
        [EffectService.EffectTargetEnum.ENEMY]: { text: '敌人' },
        [EffectService.EffectTargetEnum.ALLY]: { text: '友方' },
        [EffectService.EffectTargetEnum.ALL]: { text: '所有' },
        [EffectService.EffectTargetEnum.RANDOM]: { text: '随机' },
        [EffectService.EffectTargetEnum.OTHER]: { text: '其他' },
    },
}];