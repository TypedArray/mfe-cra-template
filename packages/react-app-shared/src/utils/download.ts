/**
 * 下载文件
 *
 * @param url 文件地址
 */
export default function download(url: string) {
  // @ts-ignore
  const location = window.location;
  let newUrl =
    'https:' === location.protocol && url.startsWith('http:')
      ? url.replace(/^http:/, 'https:')
      : url;
  const el = document.createElement('a');
  el.setAttribute('href', newUrl);
  el.setAttribute('download', '');
  el.style.display = 'none';
  document.body.appendChild(el);
  el.click();
  document.body.removeChild(el);
}
