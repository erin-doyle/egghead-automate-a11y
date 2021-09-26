const WebDriver = require('selenium-webdriver');
const AxeBuilder = require('@axe-core/webdriverjs');

const driver = new WebDriver.Builder().forBrowser('chrome').build();

driver.get('localhost:3000/login').then(() => {
    new AxeBuilder(driver)
        .analyze()
            .then((results) => {
                let report = '';
                const { testEnvironment, timestamp, violations } = results;

                report += 'Login Accessibility Report\n';
                report += `run at ${timestamp}\n`;
                report += `in ${testEnvironment.userAgent}\n\n`;

                report += 'VIOLATIONS:\n';
                violations.forEach((violation) => {
                    report += `${violation.impact}: ${violation.help}\n`;
                    report += `${violation.helpUrl}\n`;

                    violation.nodes.forEach((node) => {
                        report += `    Element: ${node.html}\n`;
                        report += `        ${node.failureSummary}\n\n`;
                    });
                });

                console.log(report);
            })
            .catch((error) => {
                console.error(error);
            });
});
