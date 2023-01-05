// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if(license === 'Apache License 2.0') {
        return `![Apache license 2.0](https://img.shields.io/badge/license-Apache%202.0-brightgreen)`;
    } else if(license === 'MIT') {
        return `![MIT License](https://img.shields.io/badge/MIT-badge-blue)`;
    } else if(license === 'GPLv2') {
        return `![GNU General Public License v2.0](https://img.shields.io/badge/GPLv2-badge-orange)`
    } else { 
        return '';
    }
};

// Function that returns the license link
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
    return licenseLink;
};

// Function that returns the license section of README
function renderLicenseSection(license) {
    if(license === 'None') {
        return '';
    } else {
        // If there is a license, it will be displayed in the license section
        return `This project is licensed under: ${license}`;
    }
};
function insertToc(tableOfContents) {
    if(tableOfContents === true) {
        return `
## Table of Contents: (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
        
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributors](#Contributors)
- [License](#License)
- [Questions](#Questions)`
    } else {
        return ''
    }
};

// Function to generate markdown for README
function generateMarkdown(data) {

return `# ${data.Title}

${renderLicenseBadge(data.License)} 

${insertToc(data.tableOfContents)}

## Installation

### Follow the steps to properly use the app!
${data.Installation}

## Usage

${data.Usage}

## License
${renderLicenseSection(data.License)}

## Contributors

${data.Contributing}

## Questions
### Contact Information:
If you have any questions, contact me!
Email: ${data.Email}
Github: https://github.com/${data.GitHub}

`;

};

// Exporting functions
module.exports = generateMarkdown;
