import { ProColumns } from "@ant-design/pro-components";
import { Avatar, Space, message } from "antd";
import SkillService from "@/services/skill";
import AvatarUpload from "@/components/AvatarUpload";

export const name: ProColumns<SkillAPI.ISkillEntity>[] = [{
    title: '名称',
    dataIndex: 'name',
    valueType: 'text',
    render: (_, record) => (<Space>
        <Avatar src={`/api/file/skill-icon/${record.iconUrl}`} />
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
            directory="/api/file/skill-icon/"
            updateRequest={async ({
                file,
                filename
            }) => {
                return await SkillService.SkillController.uploadSkillIcon(file);
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

export const type: ProColumns<SkillAPI.ISkillEntity>[] = [{
    title: '类型',
    dataIndex: 'type',
    valueType: 'select',
    valueEnum: {
        [SkillService.SkillTypeEnum.ACTIVE]: { text: '主动' },
        [SkillService.SkillTypeEnum.PASSIVE]: { text: '被动' },
    },
}];
