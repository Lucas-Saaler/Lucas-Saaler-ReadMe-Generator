// Picks the license badge based on choice. Returns empty string if none are chosen
function renderLicenseBadge(license) {
  if (license === "Apache"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }else if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if (license === "IBM"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }else{
    return ""
  }
}

// Generates the contents of the README file, uses template literal to fill in user inputs
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
