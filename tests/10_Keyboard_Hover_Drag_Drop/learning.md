# Playwright Keyboard, Mouse & Core Functions Reference

## Table of Contents
1. [Quick Cheat Sheet](#quick-cheat-sheet)
2. [Keyboard Functions](#keyboard-functions)
3. [Mouse Functions](#mouse-functions)
4. [Core Playwright Functions](#core-playwright-functions)
5. [Page Functions](#page-functions)
6. [Locator Functions](#locator-functions)
7. [Assertion Functions](#assertion-functions)

---

## Quick Cheat Sheet

### Essential One-Liners

```typescript
// Navigation
await page.goto('https://example.com');
await page.reload();
await page.goBack();
await page.goForward();

// Locators
page.locator('css');
page.getByText('text');
page.getByRole('button');
page.getByTestId('id');
page.getByLabel('label');
page.getByPlaceholder('placeholder');

// Interactions
await page.click('selector');
await page.fill('input', 'value');
await page.selectOption('select', 'option');
await page.check('checkbox');
await page.uncheck('checkbox');
await page.hover('element');
await page.dragAndDrop('#src', '#dst');

// Keyboard
await page.keyboard.press('Enter');
await page.keyboard.press('Control+a');
await page.keyboard.type('Hello');
await page.keyboard.down('Shift');
await page.keyboard.up('Shift');

// Mouse
await page.mouse.click(100, 200);
await page.mouse.dblclick(100, 200);
await page.mouse.down();
await page.mouse.up();
await page.mouse.move(100, 200);
await page.mouse.wheel(0, 500);

// Assertions
await expect(locator).toBeVisible();
await expect(locator).toBeHidden();
await expect(locator).toHaveText('text');
await expect(locator).toContainText('text');
await expect(locator).toHaveValue('value');
await expect(locator).toBeChecked();
await expect(locator).toBeEnabled();
await expect(page).toHaveTitle('Title');
await expect(page).toHaveURL(/regex/);

// Waits
await page.waitForSelector('selector');
await page.waitForLoadState('networkidle');
await page.waitForURL('**/url');
await page.waitForResponse('**/api');

// Frames
const frame = page.frameLocator('iframe');
await frame.locator('button').click();

// Dialogs
page.on('dialog', async dialog => {
  if (dialog.type() === 'confirm') await dialog.accept();
  else await dialog.dismiss();
});

// Screenshots
await page.screenshot({ path: 'page.png' });
await locator.screenshot({ path: 'el.png' });

// Evaluate
await page.evaluate(() => document.title);
await page.evaluate(el => el.innerText, await page.locator('div').elementHandle());
```

### Modifier Key Shortcuts Reference

| Action | Syntax |
|--------|--------|
| Select All | `Control+a` |
| Copy | `Control+c` |
| Paste | `Control+v` |
| Cut | `Control+x` |
| Undo | `Control+z` |
| Redo | `Control+Shift+z` |
| Save | `Control+s` |
| Find | `Control+f` |
| New Tab | `Control+t` |
| Close Tab | `Control+w` |
| Refresh | `F5` / `Control+r` |

### Common Mouse Patterns

| Pattern | Code |
|---------|------|
| Click | `await page.mouse.click(x, y)` |
| Right-click | `await page.mouse.click(x, y, { button: 'right' })` |
| Double-click | `await page.mouse.dblclick(x, y)` |
| Drag & Drop | `down() → move() → up()` |
| Scroll down | `await page.mouse.wheel(0, 500)` |
| Scroll up | `await page.mouse.wheel(0, -500)` |

### Lifecycle Hooks

```typescript
test.beforeAll(async () => { /* once before all tests */ });
test.afterAll(async () => { /* once after all tests */ });
test.beforeEach(async ({ page }) => { /* before each test */ });
test.afterEach(async ({ page }) => { /* after each test */ });
```

---

## Keyboard Functions

### Common Keyboard Keys

| Key | Description |
|-----|-------------|
| `Backspace` | Delete character before cursor |
| `Delete` | Delete character after cursor |
| `Enter` | Return/Enter key |
| `Escape` | Escape/ESC key |
| `Tab` | Tab key |
| `Space` | Spacebar |
| `ArrowUp` | Up arrow key |
| `ArrowDown` | Down arrow key |
| `ArrowLeft` | Left arrow key |
| `ArrowRight` | Right arrow key |
| `Home` | Home key |
| `End` | End key |
| `PageUp` | Page Up key |
| `PageDown` | Page Down key |
| `Insert` | Insert key |
| `F1` - `F12` | Function keys |
| `Control` | Ctrl key |
| `Alt` | Alt key |
| `Shift` | Shift key |
| `Meta` | Meta/Command/Windows key |
| `CapsLock` | Caps Lock key |
| `NumLock` | Num Lock key |
| `ScrollLock` | Scroll Lock key |
| `Pause` | Pause key |
| `ContextMenu` | Context menu key |
| `PrintScreen` | Print Screen key |
| `a` - `z` | Alphabet keys |
| `0` - `9` | Number keys |
| `!`, `@`, `#`, etc. | Special characters |

### Keyboard Methods

#### `page.keyboard.press(key)`
Simulates pressing and releasing a key.

```typescript
await page.keyboard.press('Enter');
await page.keyboard.press('Control+a');
await page.keyboard.press('Shift+Tab');
```

#### `page.keyboard.down(key)`
Simulates holding a key down.

```typescript
await page.keyboard.down('Shift');
await page.keyboard.down('Control');
```

#### `page.keyboard.up(key)`
Simulates releasing a held key.

```typescript
await page.keyboard.up('Shift');
await page.keyboard.up('Control');
```

#### `page.keyboard.type(text, options?)`
Types a string of characters, one by one.

```typescript
await page.keyboard.type('Hello World');
await page.keyboard.type('Hello', { delay: 100 });
```

#### `page.keyboard.insertText(text)`
Inserts text directly without simulating key presses.

```typescript
await page.keyboard.insertText('Hello World');
```

#### `page.keyboard.type()` with Modifier Keys

```typescript
// Select All
await page.keyboard.press('Control+a');

// Copy
await page.keyboard.press('Control+c');

// Paste
await page.keyboard.press('Control+v');

// Cut
await page.keyboard.press('Control+x');

// Undo
await page.keyboard.press('Control+z');

// Redo
await page.keyboard.press('Control+Shift+z');

// Save
await page.keyboard.press('Control+s');

// New Tab
await page.keyboard.press('Control+t');

// Close Tab
await page.keyboard.press('Control+w');

// Refresh
await page.keyboard.press('F5');
```

### Keyboard on Specific Elements

```typescript
// Fill input with keyboard simulation
await page.locator('#input').fill('text');

// Press key on focused element
await page.locator('#input').press('Enter');

// Press key with modifiers
await page.locator('#input').press('Control+a');
```

---

## Mouse Functions

### Mouse Buttons

| Button | Description |
|--------|-------------|
| `left` | Left mouse button (default) |
| `right` | Right mouse button |
| `middle` | Middle mouse button (scroll wheel click) |

### Mouse Methods

#### `page.mouse.click(x, y, options?)`
Clicks at a specific coordinate.

```typescript
await page.mouse.click(100, 200);
await page.mouse.click(100, 200, { button: 'right' });
await page.mouse.click(100, 200, { clickCount: 2 });
await page.mouse.click(100, 200, { delay: 100 });
```

#### `page.mouse.dblclick(x, y, options?)`
Double-clicks at a specific coordinate.

```typescript
await page.mouse.dblclick(100, 200);
await page.mouse.dblclick(100, 200, { button: 'left' });
```

#### `page.mouse.down(options?)`
Simulates pressing the mouse button down (mouse down).

```typescript
await page.mouse.down();
await page.mouse.down({ button: 'left' });
await page.mouse.down({ button: 'right' });
await page.mouse.down({ button: 'middle' });
await page.mouse.down({ clickCount: 2 });
```

#### `page.mouse.up(options?)`
Simulates releasing the mouse button (mouse up).

```typescript
await page.mouse.up();
await page.mouse.up({ button: 'left' });
await page.mouse.up({ button: 'right' });
await page.mouse.up({ button: 'middle' });
```

#### `page.mouse.move(x, y, options?)`
Moves the mouse cursor to coordinates.

```typescript
await page.mouse.move(100, 200);
await page.mouse.move(100, 200, { steps: 10 }); // Move in 10 steps
```

#### `page.mouse.wheel(deltaX?, deltaY?)`
Scrolls the mouse wheel.

```typescript
await page.mouse.wheel(0, 100);   // Scroll down
await page.mouse.wheel(0, -100);  // Scroll up
await page.mouse.wheel(100, 0);   // Scroll right
await page.mouse.wheel(-100, 0);  // Scroll left
```

### Drag and Drop

#### `page.dragAndDrop(source, target)`
Drags an element and drops it onto another.

```typescript
await page.dragAndDrop('#source', '#target');
```

#### Manual Drag and Drop with Mouse

```typescript
await page.locator('#draggable').hover();
await page.mouse.down();
await page.locator('#droppable').hover();
await page.mouse.up();
```

### Hover

```typescript
await page.locator('#element').hover();
await page.locator('#element').hover({ position: { x: 10, y: 20 } });
```

---

## Core Playwright Functions

### Test Functions (`@playwright/test`)

| Function | Description |
|----------|-------------|
| `test(title, fn)` | Define a test |
| `test.only(title, fn)` | Run only this test |
| `test.skip(title, fn)` | Skip this test |
| `test.fixme(title, fn)` | Mark as fixme (known failure) |
| `test.fail()` | Expect this test to fail |
| `test.slow()` | Mark test as slow (3x timeout) |
| `test.describe(title, fn)` | Group tests together |
| `test.describe.only(title, fn)` | Run only this describe group |
| `test.describe.skip(title, fn)` | Skip this describe group |
| `test.beforeAll(fn)` | Run before all tests in group |
| `test.afterAll(fn)` | Run after all tests in group |
| `test.beforeEach(fn)` | Run before each test |
| `test.afterEach(fn)` | Run after each test |
| `test.use(options)` | Override options for tests |
| `test.step(title, fn)` | Define a step within a test |
| `expect(value)` | Create an assertion |

### Page Lifecycle Functions

| Function | Description |
|----------|-------------|
| `page.goto(url, options?)` | Navigate to URL |
| `page.goBack(options?)` | Navigate back |
| `page.goForward(options?)` | Navigate forward |
| `page.reload(options?)` | Reload page |
| `page.close(options?)` | Close the page |
| `page.bringToFront()` | Bring page to front |
| `page.waitForLoadState(state?)` | Wait for load state |
| `page.waitForURL(url, options?)` | Wait for URL |
| `page.waitForEvent(event, options?)` | Wait for event |
| `page.pause()` | Pause execution (for debugging) |

### Interacting with Elements

| Function | Description |
|----------|-------------|
| `page.click(selector, options?)` | Click element |
| `page.dblclick(selector, options?)` | Double-click element |
| `page.fill(selector, value, options?)` | Fill input field |
| `page.clear(selector, options?)` | Clear input field |
| `page.focus(selector, options?)` | Focus element |
| `page.hover(selector, options?)` | Hover over element |
| `page.selectOption(selector, values, options?)` | Select option(s) |
| `page.check(selector, options?)` | Check checkbox |
| `page.uncheck(selector, options?)` | Uncheck checkbox |
| `page.setChecked(selector, checked, options?)` | Set checkbox state |
| `page.press(selector, key, options?)` | Press key on element |
| `page.type(selector, text, options?)` | Type text into element |
| `page.tap(selector, options?)` | Tap on element (touch) |
| `page.dragAndDrop(source, target, options?)` | Drag and drop |

### Scrolling

| Function | Description |
|----------|-------------|
| `page.scroll(x, y)` | Scroll to coordinates |
| `locator.scrollIntoViewIfNeeded()` | Scroll element into view |
| `page.evaluate(() => window.scrollTo(x, y))` | Scroll via JavaScript |
| `page.evaluate(() => window.scrollBy(x, y))` | Scroll by offset |

### Screenshots & PDFs

| Function | Description |
|----------|-------------|
| `page.screenshot(options?)` | Take page screenshot |
| `locator.screenshot(options?)` | Take element screenshot |
| `page.pdf(options?)` | Generate PDF (Chromium only) |
| `page.video()` | Access page video recording |

### Dialogs & Alerts

| Function | Description |
|----------|-------------|
| `page.on('dialog', handler)` | Handle dialogs |
| `dialog.accept(promptText?)` | Accept dialog |
| `dialog.dismiss()` | Dismiss dialog |
| `dialog.message()` | Get dialog message |
| `dialog.type()` | Get dialog type |

### Frames & Iframes

| Function | Description |
|----------|-------------|
| `page.frame(name)` | Get frame by name |
| `page.frameLocator(selector)` | Get frame locator |
| `page.frames()` | Get all frames |
| `page.mainFrame()` | Get main frame |
| `frame.locator(selector)` | Find element in frame |
| `frame.fill(selector, value)` | Fill input in frame |
| `frame.click(selector)` | Click in frame |
| `frame.goto(url)` | Navigate frame |

### Network & Requests

| Function | Description |
|----------|-------------|
| `page.route(url, handler)` | Intercept requests |
| `page.unroute(url, handler?)` | Remove route |
| `page.waitForRequest(url, options?)` | Wait for request |
| `page.waitForResponse(url, options?)` | Wait for response |
| `request.abort(errorCode?)` | Abort request |
| `request.continue(overrides?)` | Continue request |
| `request.fulfill(response)` | Fulfill request with mock |
| `response.status()` | Get response status |
| `response.json()` | Parse JSON response |
| `response.text()` | Get response text |
| `response.headers()` | Get response headers |

### Storage & Cookies

| Function | Description |
|----------|-------------|
| `page.context().cookies()` | Get all cookies |
| `page.context().addCookies(cookies)` | Add cookies |
| `page.context().clearCookies()` | Clear all cookies |
| `page.evaluate(() => localStorage)` | Access localStorage |
| `page.evaluate(() => sessionStorage)` | Access sessionStorage |

### Device & Viewport

| Function | Description |
|----------|-------------|
| `page.setViewportSize(size)` | Set viewport size |
| `page.viewportSize()` | Get viewport size |
| `page.setExtraHTTPHeaders(headers)` | Set HTTP headers |
| `page.setUserAgent(userAgent)` | Set user agent |
| `page.emulateMedia(params?)` | Emulate media |

### JavaScript Execution

| Function | Description |
|----------|-------------|
| `page.evaluate(fn, ...args)` | Execute JavaScript |
| `page.evaluateHandle(fn, ...args)` | Execute JS and return handle |
| `page.addInitScript(script)` | Add init script |
| `page.exposeFunction(name, fn)` | Expose function to page |
| `page.removeExposedFunction(name)` | Remove exposed function |

### Upload & Download

| Function | Description |
|----------|-------------|
| `page.on('download', handler)` | Handle downloads |
| `download.saveAs(path)` | Save download |
| `download.path()` | Get download path |
| `download.suggestedFilename()` | Get filename |
| `locator.setInputFiles(files)` | Upload files |
| `page.setInputFiles(selector, files)` | Upload files |

---

## Locator Functions

### Creating Locators

| Function | Description |
|----------|-------------|
| `page.locator(selector)` | CSS/XPath selector |
| `page.getByRole(role, options?)` | By ARIA role |
| `page.getByText(text, options?)` | By text content |
| `page.getByLabel(text, options?)` | By label text |
| `page.getByPlaceholder(text, options?)` | By placeholder |
| `page.getByAltText(text, options?)` | By alt text |
| `page.getByTitle(text, options?)` | By title attribute |
| `page.getByTestId(testId)` | By test ID |
| `page.getById(id)` | By element ID |

### Locator Actions

| Function | Description |
|----------|-------------|
| `locator.click(options?)` | Click |
| `locator.dblclick(options?)` | Double-click |
| `locator.fill(value, options?)` | Fill input |
| `locator.clear(options?)` | Clear input |
| `locator.press(key, options?)` | Press key |
| `locator.type(text, options?)` | Type text |
| `locator.hover(options?)` | Hover |
| `locator.focus()` | Focus |
| `locator.blur()` | Blur |
| `locator.check(options?)` | Check |
| `locator.uncheck(options?)` | Uncheck |
| `locator.setChecked(checked, options?)` | Set checked |
| `locator.selectOption(values, options?)` | Select option |
| `locator.scrollIntoViewIfNeeded()` | Scroll into view |
| `locator.screenshot(options?)` | Screenshot |
| `locator.tap(options?)` | Tap |
| `locator.dragTo(target, options?)` | Drag to target |
| `locator.dragTo(target, options?)` | Drag to target |
| `locator.setInputFiles(files, options?)` | Set input files |

### Locator Queries

| Function | Description |
|----------|-------------|
| `locator.all()` | Get all matching elements |
| `locator.count()` | Count matching elements |
| `locator.first()` | First element |
| `locator.last()` | Last element |
| `locator.nth(index)` | Nth element |
| `locator.filter(options?)` | Filter locator |
| `locator.and(locator)` | Intersection |
| `locator.or(locator)` | Union |
| `locator.not(locator?)` | Negation |
| `locator.locator(selector)` | Relative locator |
| `locator.frameLocator(selector)` | Frame within |
| `locator.getBy...()` | Relative getBy |

---

## Assertion Functions

### Basic Assertions

| Function | Description |
|----------|-------------|
| `expect(value).toBe(expected)` | Exact equality |
| `expect(value).toEqual(expected)` | Deep equality |
| `expect(value).toBeTruthy()` | Truthy check |
| `expect(value).toBeFalsy()` | Falsy check |
| `expect(value).toBeNull()` | Null check |
| `expect(value).toBeDefined()` | Defined check |
| `expect(value).toBeUndefined()` | Undefined check |
| `expect(value).toBeGreaterThan(n)` | Greater than |
| `expect(value).toBeGreaterThanOrEqual(n)` | Greater or equal |
| `expect(value).toBeLessThan(n)` | Less than |
| `expect(value).toBeLessThanOrEqual(n)` | Less or equal |
| `expect(value).toBeCloseTo(n, precision?)` | Close to number |
| `expect(value).toContain(item)` | Contains item |
| `expect(value).toHaveLength(n)` | Length check |
| `expect(value).toMatch(regex)` | Regex match |
| `expect(value).toMatchObject(obj)` | Partial match |
| `expect(fn).toThrow(error?)` | Throws error |

### Playwright Auto-Retrying Assertions

| Function | Description |
|----------|-------------|
| `expect(locator).toBeAttached()` | Element attached to DOM |
| `expect(locator).toBeChecked()` | Checkbox/radio checked |
| `expect(locator).toBeDisabled()` | Element disabled |
| `expect(locator).toBeEditable()` | Element editable |
| `expect(locator).toBeEmpty()` | Element empty |
| `expect(locator).toBeEnabled()` | Element enabled |
| `expect(locator).toBeFocused()` | Element focused |
| `expect(locator).toBeHidden()` | Element hidden |
| `expect(locator).toBeInViewport()` | Element in viewport |
| `expect(locator).toBeVisible()` | Element visible |
| `expect(locator).toContainText(text)` | Contains text |
| `expect(locator).toHaveAccessibleDescription(text)` | ARIA description |
| `expect(locator).toHaveAccessibleName(name)` | ARIA name |
| `expect(locator).toHaveAttribute(name, value?)` | Attribute check |
| `expect(locator).toHaveClass(class)` | Class check |
| `expect(locator).toHaveCount(count)` | Count check |
| `expect(locator).toHaveCSS(property, value)` | CSS check |
| `expect(locator).toHaveId(id)` | ID check |
| `expect(locator).toHaveJSProperty(property, value)` | JS property |
| `expect(locator).toHaveRole(role)` | ARIA role |
| `expect(locator).toHaveScreenshot()` | Screenshot match |
| `expect(locator).toHaveText(text)` | Exact text |
| `expect(locator).toHaveTitle(title)` | Page title |
| `expect(locator).toHaveURL(url)` | Page URL |
| `expect(locator).toHaveValue(value)` | Input value |
| `expect(locator).toHaveValues(values)` | Select values |
| `expect(page).toHaveTitle(title)` | Page title |
| `expect(page).toHaveURL(url)` | Page URL |
| `expect(response).toBeOK()` | Response OK |
| `expect(request).toBeFinished()` | Request finished |
| `expect(download).toBeFinished()` | Download finished |

### Negation (`.not`)

All assertions support `.not` for negation:

```typescript
await expect(locator).not.toBeVisible();
await expect(locator).not.toHaveText('text');
await expect(value).not.toBe(1);
```

### Soft Assertions

```typescript
await expect.soft(locator).toHaveText('text');
// Test continues even if assertion fails
```

---

## Common Keyboard Shortcut Combinations

| Shortcut | Playwright Syntax |
|----------|-------------------|
| Ctrl+A | `'Control+a'` |
| Ctrl+C | `'Control+c'` |
| Ctrl+V | `'Control+v'` |
| Ctrl+X | `'Control+x'` |
| Ctrl+Z | `'Control+z'` |
| Ctrl+Shift+Z | `'Control+Shift+z'` |
| Ctrl+S | `'Control+s'` |
| Ctrl+P | `'Control+p'` |
| Ctrl+F | `'Control+f'` |
| Ctrl+T | `'Control+t'` |
| Ctrl+W | `'Control+w'` |
| Ctrl+R / F5 | `'F5'` or `'Control+r'` |
| Alt+F4 | `'Alt+F4'` |
| Tab | `'Tab'` |
| Shift+Tab | `'Shift+Tab'` |
| Space | `'Space'` |
| Enter | `'Enter'` |
| Escape | `'Escape'` |
| Delete | `'Delete'` |
| Backspace | `'Backspace'` |

---

## Mouse Event Sequence Examples

### Click Sequence
```typescript
await page.mouse.move(100, 200);  // Move to position
await page.mouse.down();           // Mouse down (press)
await page.mouse.up();             // Mouse up (release)
```

### Right-Click Sequence
```typescript
await page.mouse.move(100, 200);
await page.mouse.down({ button: 'right' });
await page.mouse.up({ button: 'right' });
```

### Drag and Drop Sequence
```typescript
await page.mouse.move(100, 200);   // Move to source
await page.mouse.down();           // Press and hold
await page.mouse.move(300, 400);   // Drag to target
await page.mouse.up();             // Release
```

### Scroll with Mouse Wheel
```typescript
await page.mouse.move(500, 500);   // Move to scrollable area
await page.mouse.wheel(0, 500);     // Scroll down 500px
await page.mouse.wheel(0, -500);    // Scroll up 500px
```

---

## Useful Tips

- **Keyboard**: Use `page.keyboard.press()` for simple key presses, `page.keyboard.down()` + `page.keyboard.up()` for holding modifier keys
- **Mouse**: Use `page.mouse.down()` to hold mouse button and `page.mouse.up()` to release it
- **Touch**: Use `page.touchscreen.tap(x, y)` for mobile touch events
- **Waiting**: Use auto-retrying assertions (`expect().toBeVisible()`) instead of manual waits
- **Debugging**: Use `await page.pause()` to pause execution and inspect the page
