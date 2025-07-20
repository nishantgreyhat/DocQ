# DocQ - Doctor-Patient Queue Management System

DocQ is a React-based web application designed to manage doctor-patient queues in clinics and hospitals. It helps reduce waiting time confusion by allowing patients to view their position in the queue and ensures secure doctor registration using an admin-controlled system.

---

## 🧠 Project Workflow

### Landing Page
- A clean home screen where users are asked:  
  **“Who You Are?”**
- Two options:
  - **Login as Patient**
  - **Login as Assistant (Doctor Side)**

---

## 👨‍⚕️ Doctor/Assistant Side

### 1. Doctor Registration Page
- Doctors can register with the following details:
  - Full Name
  - Clinic Photo or Logo
  - Degrees or Qualifications
  - **Admin Password** (to prevent fake registrations)

> ✅ Only doctors with the correct admin password can complete the registration process.

---

### 2. Doctor Dashboard
- After successful login, doctors can:
  - View current patient queue
  - Accept or reject new patient requests
  - Mark patients as "consulted" or "skipped"
  - See total patients for the day

---

## 🧑‍💼 Patient Side

> 🔐 **Patient login is currently optional** for simplicity.

### 1. Select a Doctor
- Patients see a list of available doctors with:
  - Name
  - Clinic image
  - Qualifications

### 2. Join the Queue
- Patients can enter:
  - Name
  - Contact number (optional)
- A **Token Number / Queue Number** is **immediately generated**.
- The token will be:
  - **Slightly opaque or blurred**
  - On **hover or click**, a tooltip/message appears:
    > ⏳ *"Waiting for assistant/doctor to verify your request..."*
- This creates a sense of progress while reminding patients that verification is pending.

### 3. Verification by Clinic Assistant
- The assistant or doctor verifies and accepts the patient.
- Once verified, the token becomes fully visible and moves to the **active queue**.

### 4. View Queue Status
- Patients can now see:
  - Number of patients ahead
  - Estimated wait time (future feature)
  - A real-time status update if implemented


### 2. Join the Queue
- Patients can enter:
  - Name
  - Contact number (optional)
- They are added to the **pending queue**.

### 3. Verification by Clinic Assistant
- The assistant or doctor verifies and accepts the patient.
- Only verified patients appear in the **active queue**.

### 4. View Queue Status
- Patients can see:
  - Total patients ahead of them
  - Estimated waiting time (future feature)

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS (recommended)
- **Backend**: (To be added - Supabase or Express)
- **Deployment**: Vercel (for frontend)

---

## 💡 Future Features (Suggestions)

- Patient login with OTP or email
- Real-time queue updates using WebSockets or polling
- Daily analytics for doctors
- Separate Assistant login for managing queue without exposing doctor credentials
- Dark mode UI

---

## 🧪 Local Setup

```bash
git clone https://github.com/Sumit031202/DocQ.git
cd DocQ
npm install
npm run dev

