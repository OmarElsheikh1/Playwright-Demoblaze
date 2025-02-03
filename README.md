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
