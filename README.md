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
│   ├── 01_Basics/
│   │   ├── 229_Basic_test.spec.ts
│   │   └── 230_Test_Annotations.spec.ts
│   ├── 02_first_tests/
│   │   ├── 231_First_verify_running.spec.ts
│   │   ├── 232_BCP.spec.ts
│   │   ├── 233_BCP_MultipleContext.spec.ts
│   │   ├── 234_BCP_MultiplePages.spec.ts
│   │   ├── 235_TEST_I_PW.spec.ts
│   │   ├── 236_BCP_TEST_PW.spec.ts
│   │   └── 237_BCP_OptionsTest.spec.ts
│   ├── 03_Locators_Commands/
│   │   ├── 238_LS.spec.ts
│   │   └── 239_Project_VWO_login.spec.ts
│   ├── 04_Session_Storage/
│   ├── 05_Allure_Reporting/
│   ├── 06_Multiple_Element_/
│   ├── 07_WebTables/
│   ├── 08_Web_Select_Frames_Iframe/
│   ├── 09_Frame_Iframe/
│   ├── 10_Keyboard_Hover_Drag_Drop/
│   ├── 11_JS_Alerts/
│   ├── 12_Handle_SVG/
│   ├── 13_Shadow_DOM/
│   ├── 14_FileUpload/
│   ├── 15_File_Download/
│   ├── 16_Scroll_toElement/
│   ├── 17_Expect_Assertions/
│   ├── 18_Test_hooks/
│   ├── 19_Data_Driven_Testing/
│   ├── 20_Page_Object_Model/
│   ├── 21_Fixture/
│   ├── 22_Misc_Concepts/
│   ├── 23_Advance_Framework/
│   ├── Projects/
│   └── example.spec.ts           # Sample Playwright tests
├── playwright.config.ts           # Playwright configuration
├── package.json                   # Node.js dependencies
├── package-lock.json              # Locked dependency versions
├── README.md                      # Project documentation
└── .gitignore                     # Git ignore rules
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

## Topics Covered

The `tests/` directory is organized into topic-based folders covering:
1. **Basics** - Playwright fundamentals and test annotations
2. **First Tests** - Writing your first tests, browser context & page management, and test options
3. **Locators & Commands** - Finding and interacting with elements, including a real-world VWO login project
4. **Session Storage** - Handling browser storage
5. **Allure Reporting** - Test reporting integration
6. **Multiple Elements** - Working with multiple elements
7. **WebTables** - Table interactions
8. **Web Select & Frames** - Dropdowns and frame handling
9. **Frame & Iframe** - Advanced iframe handling
10. **Keyboard, Hover, Drag & Drop** - Complex interactions
11. **JS Alerts** - Handling JavaScript dialogs
12. **Handle SVG** - Working with SVG elements
13. **Shadow DOM** - Shadow DOM interactions
14. **File Upload** - Uploading files
15. **File Download** - Downloading files
16. **Scroll to Element** - Scrolling operations
17. **Expect Assertions** - Assertions and validations
18. **Test Hooks** - Setup and teardown hooks
19. **Data Driven Testing** - Parameterized tests
20. **Page Object Model** - POM design pattern
21. **Fixture** - Playwright fixtures
22. **Misc Concepts** - Miscellaneous topics
23. **Advance Framework** - Advanced framework concepts
24. **Projects** - Real-world project examples

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
