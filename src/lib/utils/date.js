/*
 * @Author: Nianko
 * @Date: 2019-12-02 11:40:16
 * @Last Modified by: Nianko
 * @Last Modified time: 2019-12-24 17:20:26
 */

/**
 * 格式化日期时间数字
 * @param {string|number} num
 */
function _padNum(num) {
  const str = `0${num}`;
  const len = str.length;
  return len > 2 ? str.substr(len - 2, len) : str;
}

class MiaozaDate {
  constructor(date) {
    this.date =
      date instanceof Date ? date : !!date ? new Date(date) : new Date();
  }
  // 获取年份
  getYear(lang) {
    const year = this.date.getFullYear();
    return lang === "zh" ? `${year}年` : year;
  }
  // 获取月份
  getMonth() {
    return this.date.getMonth() + 1;
  }
  // 格式化月份
  geFormateMonth(lang) {
    const months = [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月"
    ];
    return lang === "zh"
      ? months[this.date.getMonth()]
      : `${_padNum(this.getMonth())}月`;
  }
  // 获取日期
  getDate() {
    return this.date.getDate();
  }
  // 获取日期
  getFormateDate(lang) {
    return lang === "zh"
      ? this.date.getDate()
      : `${_padNum(this.date.getDate())}日`;
  }
  // 获取小时
  getHour() {
    return this.date.getHours();
  }
  // 格式化小时
  getFormateHour() {
    return `${_padNum(this.getHour())}时`;
  }
  // 获取分钟
  getMinute() {
    return this.date.getMinutes();
  }
  // 格式化分钟
  getFormateMinute() {
    return `${_padNum(this.getMinute())}分`;
  }
  // 获取秒
  getSecond() {
    return this.date.getSeconds();
  }
  // 格式化秒
  getFormateSecond() {
    return `${_padNum(this.getSecond())}秒`;
  }
  // 获取星期
  getWeek() {
    return this.date.getDay();
  }
  /**
   *
   * @param {string} weeType [en|zh]
   */
  getFormateWeek(weeType = "en") {
    const week =
      type === "zh"
        ? ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
        : ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    return week[this.date.getDay()];
  }
  // 获取指定月的天数
  getDays() {
    const date = new Date(this.getYear(), this.getMonth(), 0);
    return date.getDate();
  }
  // 获取时间戳
  getTimeStamp() {
    return this.date.getTime();
  }
  // 格式化时间
  formateTime(timeType = "second") {
    const h = _padNum(this.getHour());
    const m = _padNum(this.getMinute());
    const s = _padNum(this.getSecond());
    return timeType === "second" ? `${h}:${m}:${s}` : `${h}:${m}`;
  }
  // 格式化日期
  formateDate(gap = "-", week = false) {
    const y = _padNum(this.getYear());
    const M = _padNum(this.getMonth());
    const d = _padNum(this.getDate());
    const h = _padNum(this.getHour());
    const day = `${y}${gap}${M}${gap}${d}`;
    return week ? `${day} ${this.getFormateWeek()}` : `${day}`;
  }
  // 格式化日期时间
  formateTimeDate(gap = "-", timeType = "second", week = false) {
    const y = _padNum(this.getYear());
    const M = _padNum(this.getMonth());
    const d = _padNum(this.getDate());
    const h = _padNum(this.getHour());
    const day = `${y}${gap}${M}${gap}${d}`;
    const time =
      timeType === "hour"
        ? _padNum(this.getHour())
        : this.formateTime(timeType);
    return week ? `${day} ${time} ${this.getFormateWeek()}` : `${day} ${time}`;
  }
}

module.exports = MiaozaDate;
