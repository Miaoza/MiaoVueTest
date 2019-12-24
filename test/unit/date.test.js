/*
 * @Author: Nianko
 * @Date: 2019-12-02 11:39:50
 * @Last Modified by: Nianko
 * @Last Modified time: 2019-12-24 17:12:09
 */

// const {
//   pad,
//   MiaozaDate
// } = require('@/lib/utils/date');
import MiaozaDate from "@/lib/utils/date";

// console.log(new MiaozaDate())

test("get right year value", () => {
  const date1 = new MiaozaDate();
  const date2 = new MiaozaDate(new Date());
  const date3 = new MiaozaDate("2018-12-12");
  expect(date1.getYear()).toBe(2019);
  expect(date2.getYear()).toBe(2019);
  expect(date3.getYear()).toBe(2018);
  expect(date1.getYear("zh")).toBe("2019年");
  expect(date2.getYear("zh")).toBe("2019年");
  expect(date3.getYear("zh")).toBe("2018年");
});
test("get right month value", () => {
  const date1 = new MiaozaDate();
  const date2 = new MiaozaDate(new Date());
  const date3 = new MiaozaDate("2018-03-12");
  expect(date1.getMonth()).toBe(12);
  expect(date2.getMonth()).toBe(12);
  expect(date3.getMonth()).toBe(3);
});
test("get right month label value", () => {
  const date1 = new MiaozaDate();
  const date2 = new MiaozaDate(new Date());
  const date3 = new MiaozaDate("2018-03-12");
  expect(date1.geFormateMonth("zh")).toBe("十二月");
  expect(date2.geFormateMonth("zh")).toBe("十二月");
  expect(date3.geFormateMonth("zh")).toBe("三月");
  expect(date1.geFormateMonth()).toBe("12月");
  expect(date2.geFormateMonth()).toBe("12月");
  expect(date3.geFormateMonth()).toBe("03月");
});
test("get right date value", () => {
  const now = new Date().getDate();
  const date1 = new MiaozaDate();
  const date2 = new MiaozaDate(new Date());
  const date3 = new MiaozaDate("2018-03-12");
  expect(date1.getDate()).toBe(now);
  expect(date2.getDate()).toBe(now);
  expect(date3.getDate()).toBe(12);
});
test("get right date label value", () => {
  const now = new Date().getDate();
  const nowStr = now < 10 ? "0" + now : now;
  const date1 = new MiaozaDate();
  const date2 = new MiaozaDate(new Date());
  const date3 = new MiaozaDate("2018-03-12");
  expect(date1.getFormateDate()).toBe(`${nowStr}日`);
  expect(date2.getFormateDate()).toBe(`${nowStr}日`);
  expect(date3.getFormateDate()).toBe("12日");
  // expect(date1.geFormateMonth('num')).toBe('12月');
  // expect(date2.geFormateMonth('num')).toBe('12月');
  // expect(date3.geFormateMonth('num')).toBe('03月');
});
test("get right hour value", () => {
  const now = new Date().getHours();
  const date1 = new MiaozaDate();
  const date2 = new MiaozaDate(new Date());
  const date3 = new MiaozaDate("2018-03-12 07:12:32");
  expect(date1.getHour()).toBe(now);
  expect(date2.getHour()).toBe(now);
  expect(date3.getHour()).toBe(7);
});
test("get right hour formate value", () => {
  const now = new Date().getHours();
  const nowStr = now < 10 ? "0" + now : now;
  const date1 = new MiaozaDate();
  const date2 = new MiaozaDate(new Date());
  const date3 = new MiaozaDate("2018-03-12 07:12:32");
  expect(date1.getFormateHour()).toBe(`${nowStr}时`);
  expect(date2.getFormateHour()).toBe(`${nowStr}时`);
  expect(date3.getFormateHour()).toBe("07时");
});
