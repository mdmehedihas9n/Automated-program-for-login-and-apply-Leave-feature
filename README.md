# Automated-program-for-login-and-apply-Leave-feature

🧾 README – OrangeHRM Apply Leave Automation (Playwright + JavaScript)

📋 Project Overview:

This project automates the “Apply Leave” functionality of the OrangeHRM demo site using the Playwright framework with JavaScript.
It performs login, navigates to the Leave → Apply page, fills out the form, submits the request, and validates expected results.

🌐 Test Application Details

Application URL: https://opensource-demo.orangehrmlive.com/

Login Credentials:

Username: Admin
Password: admin123

Test Focus:

Login functionality
Leave module: Apply Leave workflow
Validation and success message check

💻 Test Script Overview: – apply-leave.spec.js

🔍 Test Cases Automated:

1. Login + Apply Leave (Positive)

Logs in using valid credentials

Navigates to Leave → Apply

Selects a leave type, dates, and applies successfully

Verifies success toast message

2. Apply Leave with Empty Fields (Negative)

Attempts to submit without filling the form

Verifies “Required” validation message

📊 Expected Test Results:

Test Name	Expected Outcome

✅ Login and Apply Leave	Displays “Successfully Applied” message

❌ Apply Leave with Empty Fields	Shows validation “Required” message
