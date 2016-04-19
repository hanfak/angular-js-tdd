exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/todoFeatures.js'],
  baseUrl: 'http://localhost:8080'
}
