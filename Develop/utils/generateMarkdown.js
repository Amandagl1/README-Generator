// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge = '';
    if(license === 'Apache license 2.0') {
        licenseBadge = `![Apache license 2.0]()`;
    } else if(license === 'MIT') {
        licenseBadge = `[MIT License]()`;
    } else if(license === 'GPLv2') {
        licenseBadge = `[GNU General Public License v2.0]()`
    } else licenseBadge = '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = '';
    if(license === 'Apache license 2.0') {
        licenseLink = 'https://img.shields.io/badge/apache%20license%202.0-badge-brightgreen';
    } else if (license === 'MIT') {
        licenseLink = 'https://img.shields.io/badge/MIT-badge-blue';
    } else if (license === 'GNU General Public License v2.0') { 
        licenseLink = 'https://img.shields.io/badge/GPLv2-badge-orange';
    } else {
        licenseLink = '';
    }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    // let licenseSection = '';
    // if(license === )
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.Title}
  
## Table of Contents: (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#Questions)

## Installation

### Follow the steps to properly use the app!
${data.Installation}

## Usage

### ${data.Usage}

## License
### ${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseBadge(data.license)}

## Contributors
${data.Contributing}

## Questions
### Contact Information:
If you have any questions, contact me!
Email: ${data.Email}
Github: https://github.com/${data.GitHub}

`;

};

module.exports = generateMarkdown;
