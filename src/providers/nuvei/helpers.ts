export async function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) {
      resolve();
      return;
    }

    const scriptElem = Object.assign(document.createElement('script'), {
      type: 'text/javascript',
      defer: true,
      src,
      onerror: (e: unknown) => {
        reject(e);
      },
    });
    scriptElem.onload = () => {
      resolve();
    };
    document.body.appendChild(scriptElem);
  });
} 
