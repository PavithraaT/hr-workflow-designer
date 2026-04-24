# 🧩 HR Workflow Designer (React Flow Case Study)

## 📌 Overview

The **HR Workflow Designer** is a visual workflow builder built using **React + React Flow**.  
It allows users to design, connect, and simulate HR process workflows such as onboarding, approvals, and task automation in a drag-and-drop interface.

This project is a frontend engineering prototype designed to demonstrate system design thinking, state management, and workflow-based UI architecture.

---

## 🚀 Live Demo

👉 https://hr-workflow-react.netlify.app/

---

## 🧱 Features

### 🎨 Workflow Canvas
- Drag-and-drop workflow builder using React Flow
- Supports multiple node types:
  - Start Node
  - Task Node
  - Approval Node
  - End Node
- Connect nodes using edges to define workflow structure

---

### ✏️ Node Editing
- Click on a node to edit its label
- Real-time updates reflected on the canvas
- Controlled component-based form handling

---

### 🗑️ Node Management
- Add nodes dynamically
- Delete selected nodes
- Maintain consistent graph state

---

### ▶️ Workflow Simulation
- Simulates workflow execution based on created nodes
- Validates presence of:
  - Start node
  - End node
- Displays execution flow in sequence format

---

## 🧠 Tech Stack

- React (Vite)
- React Flow
- JavaScript (ES6+)
- CSS (inline styling)

---

## 🏗️ Architecture

The project follows a **component-based architecture**:

- **App.tsx**
  - Central state management for nodes and edges
- **React Flow Canvas**
  - Handles graph rendering and interactions
- **Sidebar Controls**
  - Node creation and workflow actions
- **Node Editor Panel**
  - Handles dynamic node updates

State is managed using React hooks:
- `useState`
- `useNodesState`
- `useEdgesState`

---

## 🔄 Workflow Logic

- Nodes are created and connected visually
- Workflow simulation validates structure
- Execution is displayed as a sequential flow

(Current implementation is a frontend simulation, not a backend execution engine.)

---

## 📦 Installation & Run Locally

```bash id="install"
npm install
npm run dev

Then open:

http://localhost:5173

## 📸 Screenshots
Main Workflow Canvas:
<img width="940" height="486" alt="image" src="https://github.com/user-attachments/assets/46d1bdd0-5e25-48b5-8b1e-10cd9af52b3b" />

Node Editing Panel:
<img width="230" height="153" alt="image" src="https://github.com/user-attachments/assets/af6b704f-78dd-4d9c-aeb8-2dbcd7e2d13d" />

Workflow Example:
<img width="940" height="550" alt="image" src="https://github.com/user-attachments/assets/8507d07b-925c-4ac0-b411-01e7ba4872de" />

Live running flow:
<img width="940" height="503" alt="image" src="https://github.com/user-attachments/assets/0156ba33-7fc8-4467-b3aa-8d5962cca9a5" />
<img width="830" height="358" alt="image" src="https://github.com/user-attachments/assets/f09650f4-6ae9-44b1-82ea-d633572ea2c8" />



## 🎯 Key Learnings
Building graph-based UI systems using React Flow
Managing complex state (nodes + edges)
Designing scalable UI architecture
Simulating workflow execution logic
Component-driven frontend system design

## 🚀 Future Improvements
Graph-based execution engine (DFS/BFS traversal)
Step-by-step workflow animation
Backend integration (PostgreSQL / APIs)
Workflow persistence
Undo/Redo functionality
Role-based node configurations

## 📌 Notes
This is a frontend-only prototype
Focus is on UI architecture and workflow modeling
Designed as a zero-to-one engineering case study


👨‍💻 Author
Built as part of a Full Stack Engineering Intern case study. 
