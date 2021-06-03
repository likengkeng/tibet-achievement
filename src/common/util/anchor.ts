export const jumpToContent = (className: string) => {
  const jump = document.getElementsByClassName(className);
  const header = document.getElementsByClassName('tibet-achievement-header');
  const headerHeight = (header[0] as any).style.position === 'fixed' ? 0 : 68;
  // 获取需要滚动的距离
  const total = (jump[0] as any)?.offsetTop - headerHeight;
  window.scrollTo(0, total);
}
