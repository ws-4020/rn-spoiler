module.exports = {
  preset: 'jest-expo',
  // __mocks__ディレクトリをjestディレクトリ内に配置したいので、ルートディレクトリにjestを設定しています。
  roots: ['<rootDir>', 'jest'],
  setupFiles: ['<rootDir>/jest/setup/react-navigation.js'],
  // 変更のあったファイルがわかりやすいように、テストファイルの横にスナップショットファイルが配置されるようにしています。
  snapshotResolver: '<rootDir>/jest/snapshotResolver.js',
};
