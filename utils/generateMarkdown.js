// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Badge for GitHub](https://img.shields.io/github/languages/top/${data.username}/${data.title}?style=flat&logo=appveyor) 

## Description

${data.description}

## Table of Content

* Installation
* Usage
* License
* Contributing
* Tests
* Questions

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributors

${data.contributors}

## Test

${data.test}

## Any Questions?

* github.com/${data.username}
* ${data.email}
`;
}

module.exports = generateMarkdown;
