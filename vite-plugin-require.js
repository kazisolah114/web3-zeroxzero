export default function VitePluginRequire() {
  return {
    name: 'vite-plugin-require',
    transform(code) {
      return {
        code: code.replace(/require\s*\(['"](.+?)['"]\)/g, "import('$1')"),
        map: null,
      };
    },
  };
}
