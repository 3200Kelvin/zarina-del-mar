export function addStyle(currentScript) {
    const scriptUrl = currentScript.src;
    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('type', 'text/css');
    style.setAttribute('href', scriptUrl.replace('.js', '.css'));
    document.head.appendChild(style);
}