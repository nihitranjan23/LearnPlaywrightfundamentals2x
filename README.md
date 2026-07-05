# Learn Playwright Fundamentals 2x

This repository contains Playwright test automation examples and fundamentals for end-to-end testing.

## Overview

Playwright is a powerful automation library for browser testing. This project demonstrates the core concepts and capabilities of Playwright for testing web applications across multiple browsers.

## Features

- **Cross-browser Testing**: Run tests on Chromium, Firefox, and WebKit
- **Parallel Execution**: Tests run in parallel for faster feedback
- **HTML Reporting**: Built-in HTML test reports for easy result analysis
- **Retry Logic**: Automatic retries on CI environments for flaky test handling
- **Trace Collection**: Captures traces on first retry to debug failures

## Project Structure

```
LearnPlaywrightfundamentals2x/
├── tests/
│   └── example.spec.ts          # Sample Playwright tests
├── playwright.config.ts          # Playwright configuration
├── package.json                  # Node.js dependencies
├── package-lock.json             # Locked dependency versions
└── .gitignore                    # Git ignore rules
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nihitranjan23/LearnPlaywrightfundamentals2x.git
   cd LearnPlaywrightfundamentals2x
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (visible browser)
```bash
npx playwright test --headed
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run a specific test file
```bash
npx playwright test tests/example.spec.ts
```

### Run with UI mode (interactive debugging)
```bash
npx playwright test --ui
```

## Viewing Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Configuration

The `playwright.config.ts` file contains the test configuration:
- **testDir**: `./tests` - Location of test files
- **fullyParallel**: `true` - Run tests in parallel
- **retries**: `2` (on CI) - Retry failed tests
- **reporter**: `html` - Generate HTML reports
- **projects**: Chromium, Firefox, WebKit browsers

## Sample Tests

The `tests/example.spec.ts` file includes:
1. **Page Title Test**: Verifies that the Playwright.dev homepage contains "Playwright" in the title
2. **Navigation Test**: Clicks the "Get started" link and verifies the Installation heading is visible

## Useful Links

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)

## Contributing

Feel free to submit issues or pull requests to improve the test examples and documentation.

## License

ISC
