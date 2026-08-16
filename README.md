# Learn Playwright Fundamentals 2x

This repository contains Playwright test automation examples and fundamentals for end-to-end testing.

## Overview

Playwright is a powerful automation library for browser testing. This project demonstrates the core concepts and capabilities of Playwright for testing web applications across multiple browsers.

## Features

- **Cross-browser Testing**: Run tests on Chromium, Firefox, and WebKit
- **Parallel Execution**: Tests run in parallel for faster feedback
- **HTML Reporting**: Built-in HTML test reports for easy result analysis
- **Allure Reporting**: Integrated Allure reports for rich test analytics
- **Custom Reporter**: Optional custom reporter support via environment flag
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
│   │   ├── 239_Project_VWO_login.spec.ts
│   │   ├── 240_Xpath.spec.ts
│   │   ├── 241_Project3_signup_VWO.spec.ts
│   │   ├── 242_Project_3_Signup_VWO_PW_Locator.spec.ts
│   │   ├── 243_PW_Command.spec.ts
│   │   ├── 244_Refere_PW.spec.ts
│   │   ├── 245_GetByRole_PW.spec.ts
│   │   └── 246_PressSeq.spec.ts
│   ├── 04_Session_Storage/
│   │   ├── 247_Sessionstorage.spec.ts
│   │   └── 249_TestVWODashboard_NoCustomReport.spec.ts
│   ├── 05_Allure_Reporting/
│   │   └── 249_TestVWODashboard_CustomReporter.spec.ts
│   ├── 06_Multiple_Element_/
│   │   ├── 250_Multi_element.spec.ts
│   │   └── 251_Multi_Element_Direct.spec.ts
│   ├── 07_WebTables/
│   │   ├── 252_WebTables_Dynamic_Xpath.spec.ts
│   │   ├── 253_WebTable_Dynamic.spec.ts
│   │   ├── 254_Filter_PageLoc.spec.ts
│   │   ├── 255_WebTable_Xapth.spec.ts
│   │   ├── 256_WebTable_Xapth_Pagination.spec.ts
│   │   ├── 257_WebTable_Xapth_Pagination.spec.ts
│   │   └── 258_WebTable_Xapth_Pagination_Fn.spec.ts
│   ├── 08_Web_Select_Frames_Iframe/
│   │   ├── 259_Select.spec.ts
│   │   ├── 260_Custom_DD_Select.spec.ts
│   │   └── 261_Advance_Select_Pro.spec.ts
│   ├── 09_Frame_Iframe/
│   │   ├── 262_Iframe.spec.ts
│   │   ├── 263_frameSet.spec.ts
│   │   └── 264_Iframe_part2.spec.ts
│   ├── 10_Keyboard_Hover_Drag_Drop/
│   │   ├── 265_Keyboard.spec.ts
│   │   ├── 266_SpiceJet_Hover.spec.ts
│   │   ├── 267_Drag_Drop.spec.ts
│   │   ├── 268_Advance_Drag_Drop.spec.ts
│   │   └── 269_Context_Menu.spec.ts
│   ├── 11_JS_Alerts/
│   │   └── 270_JS.spec.ts
│   ├── 12_Handle_SVG/
│   │   ├── 271_SVG.spec.ts
│   │   ├── 272_SVG_Practice.spec.ts
│   │   └── 273_Advance_SVG.spec.ts
│   ├── 13_Shadow_DOM/
│   │   └── 274_Shadow_DOM.spec.ts
│   ├── 14_FileUpload/
│   │   ├── 275_File_Upload.spec.ts
│   │   └── 276_Multiple_File_Upload.spec.ts
│   ├── 15_File_Download/
│   │   └── 277_File_Download.spec.ts
│   ├── 16_Scroll_toElement/
│   │   └── 278_ScrollToView.spec.ts
│   ├── 17_Expect_Assertions/
│   │   ├── 279_Expect.spec.ts
│   │   ├── 280_Expect.spec.ts
│   │   ├── 281_Expect.spec.ts
│   │   ├── 282_Project.spec.ts
│   │   └── 283_Expect.cheatsheet.md
│   ├── 18_Test_hooks/
│   │   ├── 285_Chrome_Arg_List.md
│   │   └── 286_Test_Hook_Cheatsheet.md
│   ├── 19_Data_Driven_Testing/
│   ├── 20_Page_Object_Model/
│   ├── 21_Fixture/
│   ├── 22_Misc_Concepts/
│   ├── 23_Advance_Framework/
│   ├── Projects/
│   └── example.spec.ts           # Sample Playwright tests
├── Utils/
│   └── Customreporter.ts         # Custom test reporter
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

### Run with custom reporter enabled
```bash
$env:USE_CUSTOM_REPORTER="true"; npx playwright test
```

## Viewing Reports

### HTML Report
After running tests, view the HTML report:
```bash
npx playwright show-report
```

### Allure Report
Generate and view the Allure report:
```bash
npx allure serve allure-results
```

## Configuration

The `playwright.config.ts` file contains the test configuration:
- **testDir**: `./tests` - Location of test files
- **fullyParallel**: `true` - Run tests in parallel
- **retries**: `2` (on CI) - Retry failed tests
- **headless**: `false` - Run tests in visible browser windows by default
- **reporter**: 
  - `allure-playwright` - Generate Allure reports in `allure-results`
  - Custom reporter (`Utils/Customreporter.ts`) when `USE_CUSTOM_REPORTER=true`
- **projects**: Chromium (Firefox and WebKit commented out)

## Topics Covered

The `tests/` directory is organized into topic-based folders covering:
1. **Basics** - Playwright fundamentals and test annotations
2. **First Tests** - Writing your first tests, browser context & page management, and test options
3. **Locators & Commands** - Finding and interacting with elements, including a real-world VWO login project
4. **Session Storage** - Handling browser storage and session-based VWO dashboard tests
5. **Allure Reporting** - Test reporting integration with Allure and custom reporter examples
6. **Multiple Elements** - Working with multiple elements and direct element handling
7. **WebTables** - Table interactions, dynamic XPath, filters, pagination, and functional pagination handling
8. **Web Select & Frames** - Dropdowns and frame handling: standard select options, custom dropdown interactions, and advanced searchable/multi-select/creatable/async select boxes
9. **Frame & Iframe** - Frame and iframe interactions including nested frames and framesets
10. **Keyboard, Hover, Drag & Drop** - Keyboard actions, hover interactions, drag & drop, context menus, and advanced drag-drop
11. **JS Alerts** - JavaScript dialog handling and alerts
12. **Handle SVG** - SVG element interactions and advanced SVG handling
13. **Shadow DOM** - Shadow DOM element interactions
14. **File Upload** - Single and multiple file uploads including buffer-based uploads
15. **File Download** - Handling file downloads with Playwright
16. **Scroll to Element** - Scrolling elements into view
17. **Expect Assertions** - Comprehensive assertion reference with interview cheatsheet
18. **Test Hooks** - Chrome/Chromium command-line arguments reference
19. **Data Driven Testing** - Parameterized tests *(upcoming)*
20. **Page Object Model** - POM design pattern *(upcoming)*
21. **Fixture** - Playwright fixtures *(upcoming)*
22. **Misc Concepts** - Miscellaneous topics *(upcoming)*
23. **Advance Framework** - Advanced framework concepts *(upcoming)*
24. **Projects** - Real-world project examples

## Sample Tests

The `tests/example.spec.ts` file includes:
1. **Page Title Test**: Verifies that the Playwright.dev homepage contains "Playwright" in the title
2. **Navigation Test**: Clicks the "Get started" link and verifies the Installation heading is visible

## Useful Links

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Allure Playwright Integration](https://allurereport.org/docs/playwright/)

## Contributing

Feel free to submit issues or pull requests to improve the test examples and documentation.

## License

ISC
