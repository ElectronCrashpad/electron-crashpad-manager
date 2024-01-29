import * as SkillController from './SkillController';

enum SkillTypeEnum {
    /** 主动 */ ACTIVE = 'Active',
    /** 被动 */ PASSIVE = 'Passive',
}

enum SkillCostTypeEnum {
    /** 魔法值 */ MP = 'mp',
    /** 生命值 */ HP = 'hp',
    /** 怒气值 */ RP = 'rp',
}

export default {
    SkillTypeEnum,
    SkillCostTypeEnum,
    SkillController
};