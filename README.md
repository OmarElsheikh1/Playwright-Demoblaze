# 🚀 Demoblaze Playwright Automation  

Automated test suite for [Demoblaze](https://www.demoblaze.com/) using **Playwright** with **TypeScript**.  

> **Note:** The Page Object Model (POM) design pattern has not yet been implemented in this commit, but it will be included in future updates.

---

## 📌 Project Overview  

This project automates key user interactions on the **Demoblaze e-commerce platform** using **Playwright**.  
It follows the **Page Object Model (POM) design pattern** for better test maintainability and scalability.  

✅ **Technologies Used:**  
- **Playwright** for UI Automation  
- **Node.js + TypeScript**  
- **Page Object Model (POM)**
  
  > **Note:** POM not yet used.

---
## ⚠️ Note on Page Object Model (POM) Implementation

The Page Object Model (POM) design pattern has not yet been implemented in this commit due to time constraints, but it will be included in future updates.

### Planned Implementation of POM
Once implemented, the POM design pattern will be used to structure the automation tests by creating separate page classes for each significant page or component in the web application. These page classes will encapsulate the locators and actions (methods) associated with those pages, providing a cleaner, more maintainable test code.

For example:
- A class for the **login page** will have methods for filling in the username and password and submitting the form.
- A class for the **home page** will have methods for navigating to different sections of the website.
- Additional classes for other pages, such as product pages, checkout pages, etc., will each have their own methods to interact with the elements on those pages.

---
## ⚙️ Best Practices & Guidelines  

### Factors of a Good/Stable XPath:
- **Number of nodes:** Aim for an XPath with a low number of nodes to ensure quicker and more reliable element identification.
- **Number of attributes:** Prefer XPaths with a minimal number of attributes to avoid complexity.
- **Stability of values:** Use attributes with stable and predictable values, avoiding dynamic or frequently changing ones.
- **Using index sparingly (Automation Hell):** Avoid over-reliance on indexes for element selection, as they can lead to brittle and flaky tests.
- **Avoid using class equals (especially with multiple classes), use class contains instead:** When selecting elements by class, prefer the `contains` method to accommodate class variations or additional classes.
- **Maps to business requirements:** Ensure the XPath is aligned with the application's structure and business logic.
- **Do not use text to identify elements in a website that supports multiple languages:** This will make your tests fail when the text changes based on language preferences.

---

## 📝 Rules of Test Structure  

### **Test Cases:**
- **Test class per module:** Organize test cases into separate classes based on the application's modules (e.g., user login, product purchase).
- **One test method per test case:** Each test method should be focused on a single test scenario.
- **Before/After method for setup/teardown:** Use `beforeAll` or `beforeEach` for setup and `afterAll` or `afterEach` for teardown to ensure clean test environments.
- **Test case should start with navigation:** Each test should begin with navigating to the necessary page or URL.
- **Test case should end with assertion:** Every test should conclude with one or more assertions to verify the expected outcomes.
- **[Test cases should be independent]:** Each test case should be able to run independently without relying on the execution of other test cases.

### **Test Scenarios:**
- **Test package per module:** Group related test scenarios into packages based on the application's modules.
- **Test class per scenario:** Organize test classes to represent distinct test scenarios (e.g., login functionality, checkout process).
- **Before/After class for setup/teardown:** Use `beforeAll` or `afterAll` to handle setup/teardown at the class level.
- **Navigation in the before class:** Navigation should ideally be handled in the `beforeAll` or `beforeEach` methods for efficiency.
- **Test case should end with assertion:** Similar to test cases, each test scenario should conclude with assertions to verify behavior.
- **[Test cases should be dependent]:** In some scenarios, test cases may depend on each other (e.g., login tests before accessing a user profile). However, aim for minimal interdependency.

---

## 📝 Test Scenarios  

| #  | Test Scenario                                      | Status |
|----|--------------------------------------------------|--------|
| 1  | User can **register** with valid data           | ✅      |
| 2  | User can **log in** with valid credentials      | ✅      |
| 3  | User can **log out**                             | ✅      |
| 4  | Successfully **purchase an Apple Monitor 24**   | ✅      |

---

## 📂 Project Structure  

📦 Demoblaze-Playwright-Automation ┣ 📂 tests # Test cases ┣ 📂 pages # Page Object Model files ┣ 📂 reports # Test reports & artifacts ┣ 📄 playwright.config.ts # Playwright configuration ┣ 📄 package.json # Dependencies & scripts ┣ 📄 README.md # Project documentation



---

## 🛠 Setup & Installation  

### 1️⃣ Prerequisites  
Ensure you have the following installed:  
- [Node.js](https://nodejs.org/) (LTS recommended)  
- [Git](https://git-scm.com/)  
- Package Manager (**npm** or **yarn**)  

### 2️⃣ Clone the Repository  
```sh
git clone https://github.com/OmarElsheikh1/Playwright-Demoblaze.git
cd Playwright-Demoblaze
```

### 3️⃣ Install Dependencies  
```sh
npm install
```

### 4️⃣ Run Tests
To execute all test cases, run:

```sh
npx playwright test
```

To open Playwright's Test UI:

```sh
npx playwright test --ui
```

To run tests in headed mode (visual execution):

```sh
npx playwright test --headed
```

---

## 📊 Test Reports & Debugging
- Playwright Trace Viewer is enabled for debugging.
- Reports are stored in the reports/ directory.
To generate a detailed HTML report, run:

```sh
npx playwright show-report
```

---

## 📹 Video Demonstration
🔗 ([Test Execution Video](https://drive.google.com/file/d/1B7ZJ2XAng1B3nTCDNNZ18inL_0DN2eUy/view?usp=drive_link))


## 📧 Contact
For any inquiries, feel free to reach out:
📩 Omar Elsheikh – ([LinkedIn](https://www.linkedin.com/in/omar-elsheikh1999/))
