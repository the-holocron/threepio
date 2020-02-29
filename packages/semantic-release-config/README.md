# Semantic Release Config [![npm](https://img.shields.io/npm/v/@theholocron/semantic-release-config?color=red)](https://www.npmjs.com/package/@theholocron/semantic-release-config) [![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=the-holocron/semantic-release-config)](https://dependabot.com)

A [Semantic Release configuration](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration) for releasing code within the Galaxy.

## Installation

```bash
npm install --save-dev @theholocron/semantic-release-config
```

## Table of Contents

- [Usage](#usage)
- [Rules](#how-we-release-code)
- [Changelog](#how-we-track-changes)
- [Versioning](#how-we-version)
- [Contribution](#how-to-contribute)
- [Support](#where-to-find-suport)
- [License](#license)

## Usage

In your project `package.json` add the following:

```json
{
  "release": {
    "extends": "@theholocron/semantic-release-config",
    "branch": "master"
  },
}
```

## How We Release Code

We use the following plugins within the [Semantic Release](https://semantic-release.gitbook.io/) ecosystem:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/github`](https://github.com/semantic-release/github)
- [`@semantic-release/git`](https://github.com/semantic-release/git)

This allows us to:

- Provide an informative [git](https://github.com/semantic-release/git) commit message for the release commit that does not trigger continuous integration and conforms to the [conventional commits specification](https://www.conventionalcommits.org/) (e.g., `"chore(release): 1.2.3 [skip ci]\n\nnotes"`).
- Create a tarball that gets uploaded with each [GitHub release](https://github.com/semantic-release/github).
- Publish the same tarball to [npm](https://github.com/semantic-release/npm).
- Commit the version change in `package.json`.
- Create or update a [CHANGELOG](https://github.com/semantic-release/changelog) file.

### Configuration

Ensure that your CI configuration has the following **_secret_** environment variables set:

- [`GH_TOKEN`](https://github.com/settings/tokens) with [`public_repo`](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) access.
- [`NPM_TOKEN`](https://docs.npmjs.com/cli/token)
- [`NODE_AUTH_TOKEN`](https://docs.npmjs.com/cli/token)

See above for each plugins documentation for required installation and configuration steps.

### GitHub workflows

If you're [configuring a GitHub workflow](https://help.github.com/en/articles/configuring-a-workflow) you might want to do a test build matrix first and then publish only if those tests succeed across all environments. The following will do just that, immediately after something is merged into `master`.

```yml
name: Node CI

on:
  push:
    branches:
      - master

jobs:
  test:
    name: Test on node ${{ matrix.node }} and ${{ matrix.os }}

    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        node: [8, 10, 12]
        os:
          - ubuntu-latest
          - windows-latest
          - macOS-latest

    steps:
      - name: Preserve line endings
        run: git config --global core.autocrlf false
      - name: Checkout
        uses: actions/checkout@v1
      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node }}
      - name: Install & test/cover
        run: npm ci && npm run cover
        env:
          CI: true

  release:
    name: npm publish / GitHub release
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v1
      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 12
          registry-url: https://registry.npmjs.org/
      - name: Install
        env:
          CI: true
        run: npm ci
      - name: Build
        if: success()
        run: npm run build
      - name: Semantic Release
        if: success()
        env:
          GH_TOKEN: ${{ secrets.GH_TOKEN }}
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: npx semantic-release
```

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

</details>

## Where to Find Support [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

Looking to talk to someone or need some help? Please read our [support guidelines](../../.github/SUPPORT.md).

## License [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

©2020 GNU General Public License v3. See [LICENSE](../../LICENSE.md) for specifics.
