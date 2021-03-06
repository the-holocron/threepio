# Webpack Config [![npm](https://img.shields.io/npm/v/@theholocron/webpack-config?color=red)](https://www.npmjs.com/package/@theholocron/webpack-config)

A [Webpack configuration](https://webpack.js.org/configuration/) for developing and bundling libraries locally within the Galaxy.

## Installation

```bash
npm install --save-dev @theholocron/webpack-config
```

## Table of Contents

- [Usage](#usage)
- [Rules](#how-we-configure-our-bundles)
- [Changelog](#how-we-track-changes)
- [Versioning](#how-we-version)
- [Contribution](#how-to-contribute)
- [Support](#where-to-find-suport)
- [License](#license)

## Usage

In Storybook:

```js
// your app's webpack.config.js
const custom = require('@theholocron/webpack-config');

module.exports = async ({ config, mode }) => {
    return { 
        ...config, 
        module: { 
            ...config.module, 
            rules: custom.module.rules 
        } 
    };
};
```

In an application:

```js
const common = require('@theholocron/webpack-config');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = Object.assign(
    {},
    common,
    {
        devServer: {
            port: 3000,
        },
        mode: 'development',
        externals: [{
            window: 'window',
        }],
        plugins: common.plugins.concat(
            new WriteFilePlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development'),
            }),
        ),
    },
);
```

## How We Configure Bundles

Currently, this configuration is to provide a [custom Webpack setup for Storybook](https://storybook.js.org/docs/configurations/custom-webpack-config/).  Within it we use:

- `babel-loader` to transpile our JS.
- `raw-loader` to handle Markdown for importing our documentation.
- `style-loader`, `css-loader`, `postcss-loader` and `sass-loader` to use `dart-sass` for SCSS transpilation.

Our [`postcss-config`](../postcss-config#readme) is added to use `autoprefixer` and `postcss-flexbugs-fixes`.

## How We Track Changes [![Keep a Changelog](https://img.shields.io/badge/Keep%20a%20Changelog-1.0.0-orange)](https://keepachangelog.com/en/1.0.0/)

This project uses a [CHANGELOG](./CHANGELOG.md) and [GitHub releases](https://help.github.com/en/github/administering-a-repository/about-releases) which contains a curated, chronologically ordered list of notable changes for each version of a project. [Read more about changelogs](https://keepachangelog.com/en/1.0.0/).

## How We Version [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

We use [SemVer](https://semver.org/) for its versioning providing us an opt-in approach to releases. This means we add a version number according to the spec, as you see below. So rather than force developers to consume the latest and greatest, they can choose which version to consume and test any newer ones before upgrading. Please the read the spec as it goes into further detail.

Given a version number **MAJOR.MINOR.PATCH**, increment the:

- **MAJOR** version when you make incompatible API changes.
- **MINOR** version when you add functionality in a backward-compatible manner.
- **PATCH** version when you make backward-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the **MAJOR.MINOR.PATCH** format.

## How to Contribute [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Have a bug or a feature request? Looking to contribute to advance the project? Read our [contribution guide](./github/CONTRIBUTING.md) or [maintenance guide](./.github/MAINTAINING.md) first in order to understand how we do things around here. Or you could look at some of our other guides below:

<details>
  <summary><strong>How do I…</strong> (click to expand)</summary>

- [Ask or Say Something?](../../.github/SUPPORT.md)
    - [Request Support](../../.github/SUPPORT.md#request-support)
    - [Report an Error or Bug](../../.github/SUPPORT.md#report-an-error-or-bug)
    - [Request a Feature](../../.github/SUPPORT.md#request-a-feature)
- [Make Something?](../../.github/CONTRIBUTING.md)
    - [Setup the Project](../../.github/CONTRIBUTING.md#get-started)
    - [Create an Issue](../../.github/CONTRIBUTING.md#creating-a-good-issue)
    - [Create a Feature Request](../../.github/CONTRIBUTING.md#create-a-good-feature-request)
    - [Contribute Documentation](../../.github/CONTRIBUTING.md#contribute-to-documentation)
    - [Contribute Code](../../.github/CONTRIBUTING.md#create-a-pull-request)
    - [Join the Team](../../.github/CONTRIBUTING.md#join-the-team)
- [Manage Something](../../.github/MAINTAINING.md)
    - [Provide Support on Issues](../../.github/MAINTAINING.md#provide-support-on-issues)
    - [Label Issues](../../.github/MAINTAINING.md#label-issues)
    - [Clean Up Issues and PRs](../../.github/MAINTAINING.md#clean-up-issues-and-prs)
    - [Create a Pull Request](../../.github/MAINTAINING.md#create-a-pull-request)
    - [Review Pull Requests](../../.github/MAINTAINING.md#review-pull-requests)
    - [Merge Pull Requests](../../.github/MAINTAINING.md#merge-pull-requests)
    - [Tag a Release](../../.github/MAINTAINING.md#tag-a-release)
    - [Release a Version](../../.github/MAINTAINING.md#release-a-version)

</details>

## Where to Find Support [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

Looking to talk to someone or need some help? Please read our [support guidelines](../../.github/SUPPORT.md).

## License [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

©2020 GNU General Public License v3. See [LICENSE](../../LICENSE.md) for specifics.
