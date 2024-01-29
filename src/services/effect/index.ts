import * as EffectController from './EffectController';

/**
     * 效果类型枚举
     */
enum EffectTypeEnum {
    /** 增益 */ BUFF = 'buff',  
    /** 减益 */ DEBUFF = 'debuff', 
    /** 伤害 */ DAMAGE = 'damage',  
    /** 治疗 */ HEAL = 'heal',  
    /** 恢复 */ RECOVER = 'recover',  
    /** 抵抗 */ RESIST = 'resist',  
    /** 护盾 */ SHIELD = 'shield',  
    /** 召唤 */ SUMMON = 'summon',  
    /** 变身 */ TRANSFORM = 'transform',  
    /** 触发 */ TRIGGER = 'trigger',  
    /** 其他 */ OTHER = 'other'  
};

/**
 * 效果目标枚举
 */
enum EffectTargetEnum {
    /** 自己 */ SELF = 'self',
    /** 敌人 */ ENEMY = 'enemy',
    /** 盟友 */ ALLY = 'ally',
    /** 所有 */ ALL = 'all',
    /** 随机 */ RANDOM = 'random',
    /** 其他 */ OTHER = 'other'
}

export default {
    EffectController,
    EffectTypeEnum,
    EffectTargetEnum
};
