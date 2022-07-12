// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }else if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if (license === "IBM"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents (Optional)

- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contribution](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## License

${renderLicenseBadge(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}    

## Credits

${data.credits}

## Contributions

${data.contribute}

## Tests

${data.tests}

## Questions

${data.questions}
`;
}

module.exports = generateMarkdown;
