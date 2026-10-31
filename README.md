# Lodge App

Website for The Lodge in Blackfoot, Idaho, available for overnight stays, weddings and events.

## What's here (v0 shell)

- **Home** (`/`): hero, key stats, highlights, photo preview, events call-to-action
- **The Home** (`/the-home`): description, full gallery, rooms, amenities
- **Weddings & Events** (`/events`): event offerings plus an inquiry link
- **Reserve** (`/reserve`): reservation request form (stay or event) with validation.
  On submit it opens the guest's email app with the request pre-filled, addressed
  to `contactEmail` in the config.

All property content (name, text, stats, amenities, photos, pricing) lives in
`src/config/property.ts`.

The site is static and is published to **GitHub Pages** automatically on every push
(`.github/workflows/pages.yml`). There's no backend yet, so no stored bookings and no payments.
The property's street address is intentionally not kept in this public repo.

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
