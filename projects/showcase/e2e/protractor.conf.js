// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
	  './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare: function() {
	// Setting the window size
	var width = 1280;
	var height = 1024;
	browser.driver.manage().window().setSize(width, height);
	browser.manage().timeouts().implicitlyWait(15000);

	  require('ts-node').register({
		  project: require('path').join(__dirname, './tsconfig.json')
	  });
	  var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

	  jasmine.getEnv().addReporter(new SpecReporter({
		  spec:
			  { displayStacktrace: true} }));
  }
};
