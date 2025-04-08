
## 🧑‍🏫 PART 2: MENTOR MODULE
![Main Page](public/mainPage.png)


### ✨ Features for Mentors

- 🔐 Mentor Signup/Login with OTP
![signup-login Page](public/signup.png)
- 👤 Create & update detailed mentor profile
![create update Profile Page](public/createUpdatedProfile.png)
- 🛠 Add expertise, skills, achievements, and availability
![Add expertise, skills, achievements etc..](public/addProfileData.png)
- 📆 View and manage booked appointments
![View and manage booked appointments](public/bookedAppointments.png)

### 📂 Folder Structure (Relevant for Mentors)

```
src/
├── pages/
│   ├── EditMentorProfile.jsx
│   ├── MentorHomePage.jsx
│   ├── MentorProfile.jsx
|   |── MyAppointment.jsx
|   |── Room.jsx  # for video call
├── components/
│   └── CreateJob.jsx
│   └── LoginSigup.jsx
│   └── Navbar.jsx
│   └── OtpInput.jsx
│   └── MentorLandingPage.jsx
│   └── MyAppointmentCard.jsx
│   └── FAQSection.jsx
│   └── TestimonialPage.jsx
├── components/
│   └── AppointmentContext.jsx
│   └── AuthContext.jsx
│   └── MentorProfileContext.jsx

```

### 🧪 Sample Mentor Workflow

1. **Signup/Login** and verify your email.
2. Fill in your **mentor profile**: expertise, experience, skills, availability, and social links.
3. **Receive bookings** from mentees.
4. View upcoming sessions and **manage appointments**.
5. See mentee reviews and **build your profile credibility**.

---

## 🔧 Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **API Calls**: Axios
- **State Management**: React Context API
- **Payments**: Razorpay Integration
- **Notifications**: React Toastify

---

## 🚀 Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/ursarathi-frontend.git
   cd ursarathi-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` File**
   ```env
   REACT_APP_API_BASE_URL=http://localhost:4000/api/v1
   REACT_APP_RAZORPAY_KEY=your_razorpay_key
   ```

4. **Run the App**
   ```bash
   npm start
   ```

5. Visit: `http://localhost:3000`

---

## 🤝 Contributing

We welcome contributions for UI improvements, bug fixes, or new features. Just fork the repo, make your changes, and submit a pull request.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE)

---

## 🙌 Special Thanks

Thanks to all mentors and mentees for being a part of the URSARATHI community and making knowledge sharing accessible!

---
