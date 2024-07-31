module.exports = {
    default: {
      require: ['src/steps/*.ts'],
      format: ['html:reports/cucumber-report.html'],
      publishQuiet: true,
    },
  };