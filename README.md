# Rahul & Riya — Royal Wedding Digital Invitation Website
**An Ultra-Premium, Cinematic & Bespoke Destination Wedding Experience**

A bespoke, royal, editorial, and responsive wedding invitation website designed for **Rahul & Riya**, celebrating their nuptials at **The Oberoi Udaivilas, Udaipur, Rajasthan**.

---

## ✨ Features & Architecture

### 1. 💌 Cinematic Opening Experience
* **Royal Wax Seal**: Monogram seal ("R & R") with a rotating ornamental ring.
* **Imperial Calligraphy**: "Together with their families / Rahul & Riya / Request the honour of your presence".
* **"Open Royal Invitation" Action**: Unlocks the website with a smooth curtain fade and automatically begins the royal raga ambiance.

### 2. 🏛️ Fullscreen Cinematic Hero Section
* **Lake Palace Backdrop**: Subtle Ken Burns atmospheric movement.
* **Canvas Golden Dust**: Procedural golden particles drifting upwards.
* **Luxury Editorial Typography**: Cinzel Decorative, Cormorant Garamond, Pinyon Script, and Montserrat.
* **Glassmorphic Metadata Badge**: Live display of Date, Time, and Destination.
* **Animated Scroll Indicator**: "Begin The Journey".

### 3. ⏳ Live Working Countdown
* **Real-time Counter**: Days, Hours, Minutes, and Seconds calculated dynamically.
* **Editorial Typographic Cards**: Deep emerald backdrop with champagne gold borders.
* **Zero State**: Graceful transition to *"The celebration has begun! Shubh Vivah!"*.

### 4. 💍 The Couple ("A Celebration of Love")
* **Rahul Sharma (The Groom)** & **Riya Verma (The Bride)**.
* Asymmetric editorial portraits with gold arch borders.
* Heartfelt biographical stories, personal quotes, and social handles.

### 5. 📜 Our Love Story (Editorial Storytelling Timeline)
* **Chapter I**: *How We Met* — A cozy cafe in Hauz Khas.
* **Chapter II**: *The First Chapter* — The Ghats of Varanasi.
* **Chapter III**: *A Beautiful Journey* — The valleys of Kashmir.
* **Chapter IV**: *The Beginning of Forever* — The proposal on Lake Pichola, Udaipur.

### 6. 📸 Premium Photo Gallery & Interactive Lightbox
* Filterable categories: **All, Portraits, Romantic, Candid, Details, Traditions**.
* Masonry-style layout (portrait, landscape, square).
* Fullscreen interactive Lightbox with image zoom, caption, photo counter, keyboard controls (`Esc`, `←`, `→`), and touch swipe.

### 7. 🎞️ Highlight Carousel ("A Tapestry of Moments")
* Cinematic photo showcase with auto-play, pause on hover/touch, navigation arrows, and pagination dots.

### 8. 🪔 Itinerary of Joy (Events Schedule)
* **Haldi & Phoolon Ki Holi** (Dec 10, Morning) — *Sun-drenched Yellows & Floral Whites*
* **Mehendi Ki Raat** (Dec 10, Evening) — *Emerald Greens & Pastel Shararas*
* **Royal Sangeet & Musical Soiree** (Dec 11, Night) — *Indo-Western Tuxedos & Lehengas*
* **The Sacred Muhurtham & Pheras** (Dec 12, Twilight) — *Regal Indian Heritage Ivory & Gold*
* **The Grand Royal Reception** (Dec 13, Night) — *Black Tie & Evening Couture*
* **Interactive "Add to Cal" Button**: Generates a one-click Google Calendar invite with dates, venue, and descriptions.

### 9. 📍 The Sanctuary (Venue & Location)
* Detailed breakdown of **The Oberoi Udaivilas, Lake Pichola, Udaipur**.
* Embedded interactive Google Map and "Get Directions" navigation.

### 10. ✉️ Kindly RSVP (Interactive Form)
* Guest Full Name, Email, Phone/WhatsApp, Guest Count.
* Attendance choices (*Joyfully Accept* vs *Regretfully Decline*).
* Ceremony selection checkboxes.
* Dietary preferences (Pure Vegetarian, Jain, Vegan, Gluten-Free, Non-Veg).
* Warm wishes & message text area.
* Field validation, loading state, golden confetti celebration, and local persistence.

### 11. 🛎️ Everything You Need to Know (Guest Concierge)
* Dedicated tiles for: Dress Code, Palace Accommodations, Airport Transfers, Valet & Royal Lake Ferries, 24x7 Concierge Desk, and Gift Guidance.

### 12. ❓ Wedding FAQ (Accordion)
* Smooth expandable FAQ accordion covering attire, arrival time, parking, plus-ones, childcare, and emergency contacts.

### 13. 🎵 Royal Music & Atmosphere
* Built-in **Web Audio API Procedural Sitar & Tanpura Raga Synthesizer** (requires no external audio files, operates offline, avoids broken audio links).
* Option to link any external MP3 file in `js/config.js`.
* Unobtrusive header toggle with animated sound wave equalizer.

### 14. 🧭 Floating Luxury Navigation
* Translucent glassmorphism navbar on scroll with active section spy and mobile off-canvas drawer.

---

## 🎨 Color Palette & Typography

* **Deep Emerald Green**: `#061913`, `#0b2b22`, `#11382d`
* **Champagne Gold**: `#c5a059`, `#fae8b6`, `#b88f3e`
* **Warm Ivory**: `#FAF7F2`, `#F2ECE3`
* **Blush Rose**: `#F9EBEA`
* **Subtle Charcoal**: `#151b18`
* **Fonts**: *Cinzel Decorative*, *Cormorant Garamond*, *Pinyon Script*, *Montserrat*

---

## ⚙️ How to Customize / Edit Details

All wedding details are centralized in `js/config.js`. You can change:
* Couple names & biographies
* Wedding date, time, and countdown target
* Hotel name, address, and Google Maps URL
* Story chapters, dates, and images
* Event titles, dress codes, times, and venues
* Gallery and carousel photos
* FAQ questions & answers
* Concierge phone and email
