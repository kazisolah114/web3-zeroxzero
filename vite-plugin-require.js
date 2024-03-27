export default function VitePluginRequire() {
    return {
      name: 'vite-plugin-require',
      transform(code) {
        return {
          code: code.replace(/require\(['"](.+?)['"]\)/g, "import('$1')"),
          map: null,
        };
      },
    };
  }
  