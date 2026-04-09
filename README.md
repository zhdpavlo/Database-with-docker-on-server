# Database-with-docker-on-server
## PostgreSQL + Node.js Table Viewer

This project demonstrates how to display data from a PostgreSQL database on a simple HTML page using Node.js and Docker Compose.

---
## 🛠️ Prerequisites

- Docker  
- Docker Compose  
- Basic knowledge of SQL, JavaScript, and HTML  

---

## ⚙️ How to Run

1. Make sure `init.sql` contains the table `public.gemeinde` and some sample data:

```sql
CREATE TABLE public.gemeinde (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO public.gemeinde (id, name, email) VALUES
(1, 'Xenofon', 'xg@treelogics.de'),
(2, 'Pavlo', 'pszhd01@gmail.com'),
(3, 'Judith', 'judith@gmail.com'),
(4, 'Anna', 'anna@gmail.com');
```

## 2. Build and start containers:
```docker-compose up -d --build```
## 3. Check that the containers are running:
```docker ps```

You should see two or three containers:
PostgreSQL (db)
Node.js backend (node-backend)
(Optional) Apache (apache) if used

## 4. Open your browser and go to:
*http://localhost:3000/data*

## 5. You will see the table data in JSON format.

To view it in a table format, open frontend/index.html in your browser (you can open it directly or use a local HTTP server). The page fetches the data from Node.js and renders it as a table.


# Summary

### This setup provides a simple full-stack example:

- **PostgreSQL → stores the data**
- **Node.js → backend API server (/data)**
- **HTML + JS → renders data as a table in the browser**