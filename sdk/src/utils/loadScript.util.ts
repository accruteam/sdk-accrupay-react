const loadScript = (src: string) =>
  new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = Object.assign(document.createElement("script"), {
      type: "text/javascript",
      defer: true,
      src,
      onerror: (e: Error) =>
        reject(new Error(`Failed to load script ${src}: ${String(e)}`)),
    });
    script.onload = () => {
      resolve();
    };
    document.body.appendChild(script);
  });

export { loadScript };
