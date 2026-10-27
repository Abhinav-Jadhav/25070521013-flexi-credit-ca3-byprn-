# FLEXI — Flexible Appointment Booking

A full-stack appointment booking app built with React, Express, Node.js, and MongoDB. Customers browse services, choose an available slot, book appointments, and manage bookings. Staff can manage services and bookings.

## Requirements
- Node.js 18+
- MongoDB Community Server or MongoDB Atlas
- npm

MongoDB Compass is a GUI for your database; it does not run the database server. Connect it with the same URI configured in `server/.env`.

## Run locally
1. Copy `server/.env.example` to `server/.env` and set `MONGODB_URI`.
2. In one terminal: `cd server`, `npm install`, `npm run seed`, `npm run dev`.
3. In a second terminal: `cd client`, `npm install`, `npm run dev`.
4. Open `http://localhost:5173`. API runs at `http://localhost:5000`.

Seed adds sample services only when the collection is empty. The Manage bookings view supports status updates and adding services. The demo admin view is open and has no authentication.

## API
`GET /api/health`, `GET|POST /api/services`, `PATCH|DELETE /api/services/:id`, `GET /api/availability?date=YYYY-MM-DD&serviceId=...`, `GET|POST /api/bookings`, `PATCH /api/bookings/:id/status`, `DELETE /api/bookings/:id`.

Availability is checked against each service's working days and hours. Confirmed bookings are checked for time overlap before MongoDB storage.
