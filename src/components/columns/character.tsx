import AvatarUpload from "@/components/AvatarUpload";
import { ProColumns } from "@ant-design/pro-components";
import { Avatar, Badge, Space, Tag, message } from "antd";
import CharacterService from "@/services/character";

export const name: ProColumns<CharacterAPI.ICharacterVO>[] = [{
    title: '名称',
    dataIndex: 'name',
    render: (_, record) => (<Space>
        <Avatar src={ `/api/file/character-avatar/${record.avatarUrl}` } />
        { record.name }
    </Space>)
}, {
    title: '头像',
    dataIndex: 'avatarUrl',
    valueType: 'avatar',
    hideInTable: true,
    hideInSearch: true,
    renderFormItem: (_, { type, defaultRender, ...rest }, form) => (
        <AvatarUpload
            defaultImageUrl={form.getFieldValue('avatarUrl')}
            directory="/api/file/character-avatar/"
            updateRequest={async ({
                file,
                filename
            }) => {
                return await CharacterService.CharacterController.uploadCharacterAvatar(file);
            }}
            onUploadFailed={(error) => {
                message.error(error.message);
            }}
            onUploadSucess={(url) => {
                form.setFieldsValue({ avatarUrl: url });
            }}
        />
    )
}];

export const healthPoints: ProColumns<CharacterAPI.ICharacterVO>[] = [{
    title: '生命值',
    dataIndex: 'healthPoints',
    valueType: 'digit'
}];

export const skills: ProColumns<CharacterAPI.ICharacterVO>[] = [{
    title: '技能',
    dataIndex: 'skills',
    hideInSearch: true,
    hideInForm: true,
    render: (_, record) => (<Space>{
        record.skills.map((skill, index) => {
            return <Avatar key={ index } src={ skill.iconUrl } />
        })
    }</Space>)
}];

export const tags: ProColumns<CharacterAPI.ICharacterVO>[] = [{
    title: '标签',
    dataIndex: 'tags',
    hideInSearch: true,
    render: (_, record) => (<Space>{
        record.tags.split(',').map((tag, index) => {
            return <Tag key={ index }>{ tag }</Tag>
        })
    }</Space>)
}];

export const description: ProColumns<CharacterAPI.ICharacterVO>[] = [{
    title: '描述',
    dataIndex: 'description',
    valueType: 'textarea',
    hideInSearch: true,
    hideInTable: true
}];