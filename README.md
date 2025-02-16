# 🚀 Demoblaze Playwright Automation  

Automated test suite for [Demoblaze](https://www.demoblaze.com/) using **Playwright** with **TypeScript**.  

---

## 📌 Project Overview  

This project automates key user interactions on the **Demoblaze e-commerce platform** using **Playwright**.  
It follows the **Page Object Model (POM) design pattern** for better test maintainability and scalability.  

✅ **Technologies Used:**  
- **Playwright** for UI Automation  
- **Node.js + TypeScript**  
- **Page Object Model (POM)**

---
## ✨ What's New: POM Design Pattern Added

The Page Object Model (POM) is now fully implemented in this project. Each significant page of the application is represented by a class that encapsulates the locators and methods for interacting with that page. This improves test organization, reduces code duplication, and enhances readability.

Key Benefits of POM:
Reusability: Methods and locators are centralized, making them easy to reuse across test cases.
Readability: Tests are easier to understand as they focus on what is being tested, not how.
Maintainability: Changes to the UI can be handled by updating the respective page class, without modifying individual test cases.

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
