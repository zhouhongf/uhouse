export interface CityGroup {
    letter: string;
    names: string[];
}

export const city_filter = (opt: string[], value: string): string[] => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().includes(filterValue));
};

export const houseTypeData = [
    { value: '商品房' },
    { value: '商住两用房' },
    { value: '联排别墅' },
    { value: '独栋别墅' },
    { value: '沿街商铺' },
    { value: '非沿街商铺' },
    { value: '办公楼' },
    { value: '厂房' },
    { value: '小产权房' },
    { value: '经济适用房' },
    { value: '限价房' },
    { value: '房改房' },
    { value: '危改房' },
    { value: '宅基地/自建房' },
    { value: '军产房' },
    { value: '其他类型房产' },
];

export const annualIncomeData = [
    { value: '小于等于12万' },
    { value: '大于12万小于等于24万' },
    { value: '大于24万小于等于40万' },
    { value: '大于40万小于等于60万' },
    { value: '大于60万小于等于80万' },
    { value: '大于80万小于等于120万' },
    { value: '大于120万小于等于200万' },
    { value: '大于200万' },
];

export const idTypeData = [
    { value: '银行人员' },
    { value: '民营企业主' },
    { value: '个体工商户' },
    { value: '公务员/事业单位员工' },
    { value: '大型国企员工' },
    { value: '上市企业员工' },
    { value: '普通企业员工' },
    { value: '无固定职业' },
    { value: '其他' },
];

export const loanTypeData = [
    { value: '抵押贷款' },
    { value: '信用贷款' },
    { value: '按揭贷款' },
    { value: '担保贷款' },
];

export const loanVouchModeData = [
    { value: '抵押' },
    { value: '质押' },
    { value: '保证' },
    { value: '信用' },
];

export const houseStatusData = [
    { value: '抵押' },
    { value: '出租' },
    { value: '闲置' },
    { value: '按揭' },
];

export const companySizeData = [
    { value: '主板上市企业' },
    { value: '非主板上市企业' },
    { value: '大型企业' },
    { value: '中型企业' },
    { value: '小型企业' },
];

export const companyTypeData = [
    { value: '国有企业' },
    { value: '民营企业' },
    { value: '个体工商户' },
    { value: '外资企业' },
    { value: '中外合资企业' },
];

export const proportionData = [
    { value: '小于等于10%' },
    { value: '大于10%小于等于20%' },
    { value: '大于20%小于等于30%' },
    { value: '大于30%小于等于40%' },
    { value: '大于40%小于等于50%' },
    { value: '大于50%小于等于60%' },
    { value: '大于60%小于等于70%' },
    { value: '大于70%小于等于80%' },
    { value: '大于80%小于等于90%' },
    { value: '大于90%小于等于100%' },
];

export const paymentTypeData = [
    { value: '现金支付' },
    { value: '现金支票' },
    { value: '转账汇款' },
    { value: '银票' },
    { value: '商票' },
    { value: '国内信用证' },
    { value: '国际信用证' },
    { value: '微信支付' },
    { value: '支付宝支付' },
    { value: '其他支付' },
];

export const paymentTermData = [
    { value: '小于等于10天' },
    { value: '大于10天小于等于30天' },
    { value: '大于30天小于等于45天' },
    { value: '大于45天小于等于60天' },
    { value: '大于60天小于等于90天' },
    { value: '大于90天小于等于180天' },
    { value: '大于180天小于等于365天' },
    { value: '大于365天' }
];

export const bankTypeData = [
    { value: '银行' },
    { value: '信用社' },
    { value: '小贷公司' },
    { value: '典当公司' },
    { value: '担保公司' },
    { value: '投资公司' },
    { value: '其他机构' },
];

export const creditLevelData = [
    { value: '普通' },
    { value: '铜牌' },
    { value: '银牌' },
    { value: '金牌' },
    { value: '次级' },
];

export const unFulfillLoanPrimaryReasonData = [
    { value: '可贷款额度不匹配' },
    { value: '年化综合利率不匹配' },
    { value: '贷款期限不匹配' },
    { value: '增加担保条件' },
    { value: '其他原因' },
];


// 以下为 房产板块 的内容
export const houseServiceTypeData = [
    { value: '住宅' },
    { value: '商业' },
    { value: '办公' },
    { value: '工业' },
    { value: '农业' },
];

export const landTypeOfficialData = [
    { value: '划拨' },
    { value: '出让' },
    { value: '集体' },
];

export const landUsageOfficialData = [
    { value: '城镇住宅用地' },
    { value: '农村宅基地' },
];

export const houseTypeOfficialData = [
    { value: '房屋（构筑物）所有权' },
    { value: '其他所有权' },
];

export const houseUsageOfficialData = [
    { value: '住宅' },
    { value: '成套住宅' },
    { value: '非成套住宅' },
    { value: '非居住' },
    { value: '非居住用房' },
    { value: '非住宅' },
    { value: '一般住宅' },
    { value: '别墅' },
    { value: '公寓' },
    { value: '工业' },
    { value: '商业' },
];

export const ownerTypeData = [
    { value: '单独所有' },
    { value: '共同所有' },
    { value: '按份共有' },
    { value: '其他共有' },
];

export const evaluatePurposeData = [
    { value: '按揭抵押' },
    { value: '贷款抵押' },
    { value: '其他抵押' },
    { value: '司法鉴定' },
    { value: '拆迁征收' },
    { value: '资产评估' },
    { value: '税额鉴定' },
    { value: '其他' },
];

export const evaluateCompanyData = [
    { value: 'XXX房地产评估有限公司' },
    { value: 'YYY房地产评估有限公司' },
    { value: 'ZZZ房地产评估有限公司' },
];

