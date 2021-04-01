(function () {
  const execSync = require('child_process').execSync;
  require('../src');



  describe('api.basic test', () => {
    test('nx.fileMd5 should equal md5 cmd in osx', function () {
      var shellMd5 = execSync('md5 -q README.md').toString().trim();
      expect(shellMd5).toBe(nx.fileMd5('README.md'));
    });
  });
})();
