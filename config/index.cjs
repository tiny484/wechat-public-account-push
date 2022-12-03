/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxd142407bda8c0349',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c8873f80dd0a5a6096886aae010475c9',

  PROVINCE: '江苏',
  CITY: '南京',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'Tiny',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oI7L86k1GVJuOUB3vg0EvijK7BRw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'V3f8Ca98J4rzkrXBhJfSTRx37GO2JrE6NaFJc_PwPCQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-15',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1997', date: '10-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '相识纪念日', year: '2013', date: '12-08',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2018-08-12' }
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
//   CALLBACK_TEMPLATE_ID: '4YoX2KjNHyAwYmOAoWYpw8g-wfhbHmRxkNrqJlKY49I',

  CALLBACK_USERS: [
    {
      name: 'Tiny',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oI7L86k1GVJuOUB3vg0EvijK7BRw',
    }
  ],

}

module.exports = USER_CONFIG

