application.state.data.car = {
  name: 'name',
  speed: 0
};

if (api.cluster.isWorker) {

  if (impress.nodeId === 'C1N2' || impress.nodeId === 'C1N3') {

    setInterval(function() {
      application.state.inc('car.speed', 2, '5s');
    }, api.impress.random(1000, 2000));

    setInterval(function() {
      application.state.dec('car.speed', 1, '6s');
    }, api.impress.random(2000, 3000));

    setInterval(function() {
      application.state.inc('car.speed', 3, '7s');
    }, api.impress.random(1000, 3000));

    setInterval(function() {
      application.state.dec('car.speed', 2, '8s');
    }, api.impress.random(2000, 4000));

    setInterval(function() {
      application.state.set('car.name', 'nameOne', '5s');
    }, api.impress.random(1000, 5000));

    setInterval(function() {
      application.state.set('car.name', 'nameTwo', '7s');
    }, api.impress.random(2000, 6000));

  }

  /*
  application.state.subscribe('car.speed', function(path, value, remote) {
    console.log('State subscribe in: ' + impress.nodeId + ' path=' + path + ', value=' + value + ', remote=' + remote);
  });

  application.state.watch('car', function(path, value, remote) {
    console.log('State watch in: ' + impress.nodeId + ' path=' + path + ', value=' + value + ', remote=' + remote);
  });
  */

  setInterval(function() {
    console.log('Data: ' + impress.nodeId + ' ' + JSON.stringify(application.state.data.car));
  }, 10000);

}
