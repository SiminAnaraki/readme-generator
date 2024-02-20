// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = '';

  if (data.license === 'Apache License 2.0') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)';
  } else if (data.license === 'GNU General Public License v3.0') {
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (data.license === 'MIT License') {
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (data.license === 'BSD 2-Clause "Simplified" License') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  } else if (data.license === 'BSD 3-Clause "New" or "Revised" License') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (data.license === 'Boost Software License 1.0') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (data.license === 'Creative Commons Zero v1.0 Universal') {
      licenseBadge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (data.license === 'Eclipse Public License 2.0') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://www.eclipse.org/legal/epl-2.0/)';
  } else if (data.license === 'GNU Affero General Public License v3.0') {
      licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  } else if (data.license === 'GNU Lesser General Public License v2.0') {
      licenseBadge = '[![License: LGPL v2.0](https://img.shields.io/badge/License-LGPL%20v2.0-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.0)';
  } else if (data.license === 'GNU Lesser General Public License v2.1') {
      licenseBadge = '[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1)';
  } else if (data.license === 'Mozilla Public License 2.0') {
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (data.license === 'The Unlicense (No License)') {
      licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  }
  
  return `${licenseBadge}
# ${data.title}
  
## Description
  ${data.description}

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## License
This project is licensed under the ${data.license} License.

## Contributing 
  ${data.contributing}

## Tests
  ${data.tests}

## Questions
[My github](https://github.com/${data.githubUsername} "github page")

If you have any questions, please don't hesitate to ask.[${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
