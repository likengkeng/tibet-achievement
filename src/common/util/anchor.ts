export const jumpToContent = (className: string) => {
  const jump = document.getElementsByClassName(className) || [{}];
  // 获取需要滚动的距离
  const total = (jump[0] as any).offsetTop;
  // Chrome
  document.body.scrollTop = total;
  // Firefox
  document.documentElement.scrollTop = total;
  // Safari
  // @ts-ignore
  window.pageYOffset = total;
}
