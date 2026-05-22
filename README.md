<div align="center">

# ✅ Tasks API — Node.js CRUD with CSV Import

**A RESTful API built with pure Node.js for complete task management, featuring bulk import via CSV file.**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](https://opensource.org/licenses/ISC)

</div>

---

## 📋 About the Project

**Tasks API** is a backend challenge project that implements a complete **CRUD (Create, Read, Update, Delete)** system for task management using **pure Node.js** — no Express, no frameworks, just the native HTTP module.

The standout feature is a **CSV bulk import routine** that reads a `.csv` file and automatically creates multiple tasks via async iteration, using the `csv-parse` library.

> 🎯 Built as part of the **Rocketseat Ignite Node.js** track — focused on understanding core Node.js fundamentals before moving to frameworks.

---

## ✨ Features

- ✅ Create tasks with auto-generated `id`, `created_at`, `updated_at`, and `completed_at`
- 📋 List all tasks with optional filtering by `title` and `description`
- ✏️ Update task `title` and/or `description` by ID
- 🗑️ Delete tasks by ID
- 🔄 Toggle task completion status (`completed_at`)
- 📥 **Bulk import tasks from a CSV file** using async iteration
- ⚠️ ID validation on all routes — returns descriptive error if not found
- 💾 JSON file-based persistence (`db.json`)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js (native HTTP) | Server and routing — no frameworks |
| JavaScript ES Modules | `import/export` syntax (`"type": "module"`) |
| [csv-parse](https://csv.js.org/) | CSV file parsing with async iterator |
| JSON file (`db.json`) | Lightweight local data persistence |

---

## 📁 Project Structure

```
TasksAPI/
├── src/
│   ├── server.js         # HTTP server and route handling
│   ├── database.js       # JSON file persistence layer
│   ├── routes.js         # Route definitions
│   ├── middlewares/
│   │   └── json.js       # Body parser middleware
│   └── utils/
│       └── build-route-path.js  # Regex route matcher
├── import-csv.js         # CSV bulk import script
├── tasks.csv             # Sample CSV file for import
├── db.json               # Local database (auto-generated)
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ installed

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Felpesc/TasksAPI.git

# 2. Navigate to the project folder
cd TasksAPI

# 3. Install dependencies
npm install

# 4. Start the server
node src/server.js
```

The server will start at `http://localhost:3333`.

---

## 📡 API Routes

### `POST /tasks`
Creates a new task.

**Request body:**
```json
{
  "title": "Study Node.js",
  "description": "Complete the Ignite challenge"
}
```

---

### `GET /tasks`
Lists all tasks. Supports optional query filters.

```
GET /tasks?search=Node
GET /tasks?title=Study&description=Ignite
```

---

### `PUT /tasks/:id`
Updates the `title` and/or `description` of a task.

**Request body:**
```json
{
  "title": "Updated title",
  "description": "Updated description"
}
```

---

### `DELETE /tasks/:id`
Removes a task by ID. Returns `404` if not found.

---

### `PATCH /tasks/:id/complete`
Toggles the task completion status.
- If `completed_at` is `null` → sets to current date
- If already completed → resets to `null`

---

## 📥 CSV Bulk Import

To import multiple tasks at once, run the import script:

```bash
node import-csv.js
```

The script reads `tasks.csv` and sends a `POST /tasks` request for each row using async iteration.

**Expected CSV format:**
```csv
title,description
Task 01,Description of Task 01
Task 02,Description of Task 02
Task 03,Description of Task 03
```

---

## 📌 Key Learnings

- Building an HTTP server and custom router **without any framework**
- Implementing middleware for JSON body parsing in raw Node.js
- Using **async iterators** with `csv-parse` for file processing
- Persisting data to a JSON file as a lightweight database
- Regex-based dynamic route matching (e.g. `/tasks/:id`)
- Handling query string filters natively

---

<div align="center">

Developed by [Felipe Siqueira Campos](https://github.com/Felpesc) · [Portfolio](https://felipecampos.dev.br) · [LinkedIn](https://linkedin.com/in/felipesiqueiracampos)

</div>
