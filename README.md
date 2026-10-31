# Lodge App

Website for renting the family home in Blackfoot, Idaho for overnight stays, weddings and events.

## What's here (v0 shell)

- **Home** (`/`): hero, key stats, highlights, photo preview, events call-to-action
- **The Home** (`/the-home`): description, full gallery, rooms, amenities
- **Weddings & Events** (`/events`): event offerings plus an inquiry link
- **Reserve** (`/reserve`): reservation request form (stay or event) with validation
- **API**: `POST /api/reservations` (create request), `GET /api/availability` (blocked dates)

All property content (name, text, stats, amenities, photos, pricing) lives in
`src/config/property.ts`.

Reservations are kept **in memory** for now and reset on restart. No payments yet.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Roadmap

1. Real photos and copy
2. Persist reservations in a database, plus an admin view to confirm or decline them
3. Email notifications to the host and guest
4. Availability calendar that blocks booked dates
5. Payments and deposits (Stripe)
6. Sync with Airbnb/VRBO calendars (iCal)
