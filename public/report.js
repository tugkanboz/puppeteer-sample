const reporter = require('cucumber-html-reporter')

const options = {
  theme: 'bootstrap',
  jsonFile: 'public/cucumber_report.json',
  output: 'public/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
}

reporter.generate(options)
