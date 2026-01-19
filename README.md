# GST Billing & Invoicing Application

A full-stack GST billing and invoicing CRUD application designed to simplify customer, product, and invoice management for businesses. The system supports GST-compliant invoice generation, PDF and Excel export, and Excel-based customer import.

---

## 🚀 Features

### 📄 Invoice Management

* Create, edit, and manage invoices
* Generate GST-compliant invoice slips
* Export invoices as **PDF**
* Support for CGST, SGST, and IGST
* Multiple invoices export in a single PDF

### 👥 Customer Management

* Create and edit customer records
* Import customers from **Excel files**
* Export customer data to **PDF** and **Excel**

### 📦 Product Management

* Create and edit products
* Associate products with invoices
* Automatic calculations for totals and GST

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* JavaScript
* Material UI

**Backend:**

* Laravel
* RESTful APIs

**Database:**

* SQL (MySQL)

**Other Tools & Libraries:**

* html2pdf.js (PDF generation)
* Excel import/export utilities

---

## 📂 Project Structure (Overview)

```
/frontend
  ├── components
  ├── pages
  ├── services
/backend
  ├── controllers
  ├── models
  ├── routes
/database
  ├── migrations
```

---

## ⚙️ Installation & Setup

### Backend (Laravel)

```bash
composer install
php artisan migrate
php artisan serve
```

### Frontend (React)

```bash
npm install
npm start
```

---

## 📌 Usage

1. Add customers manually or import via Excel
2. Create and manage products
3. Generate invoices for customers
4. Export invoices and customer data as PDF or Excel

---

## 🎯 Project Outcome

This application provides a reliable, user-friendly GST billing system that automates invoice generation, simplifies record management, and improves business efficiency.

---

## 📜 License

This project is for learning and demonstration purposes.
