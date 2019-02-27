'use strict';

require('./lib/core');

if (impress.isMaster) {
  const unittestsPath = api.path.join(__dirname, 'unittests');

  impress.on('testsFinished', errors => {
    if (errors) {
      impress.shutdown(1);
      return;
    }

    api.fs.readdir(unittestsPath, (err, files) => {
      if (err) {
        console.error(err);
        impress.shutdown(1);
        return;
      }

      const unittests = api.test.test('Impress unittests');

      files.forEach(name => {
        const path = api.path.join(unittestsPath, name);
        const testFn = require(path);
        unittests.test(name, testFn);
      });

      unittests.on('done', () => {
        impress.shutdown(unittests.success ? 0 : 1);
      });
    });
  });
}

impress.start();
