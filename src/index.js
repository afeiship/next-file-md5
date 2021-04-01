(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var crypto = require('crypto');
  var fs = require('fs');

  nx.fileMd5 = function (inFilePath) {
    var buffer = fs.readFileSync(inFilePath);
    var fsHash = crypto.createHash('md5');
    fsHash.update(buffer);
    return fsHash.digest('hex');
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fileMd5;
  }
})();
