/**
 * ====================================================================
 * WEDDING INVITATION CONFIGURATION
 * Rahul & Riya — Royal Wedding Celebration
 * ====================================================================
 * All key details of the wedding can be customized right here!
 * Update dates, venues, links, love stories, and photos in one single file.
 */

const WEDDING_CONFIG = {
  // Couple Information
  groom: {
    name: "Rahul",
    fullName: "Rahul Sharma",
    title: "The Groom",
    bio: "An architect of dreams with a calm demeanour and an adventurous spirit. He believes that the greatest journeys begin with an unexpected smile.",
    instagram: "@rahul_destiny",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  bride: {
    name: "Riya",
    fullName: "Riya Verma",
    title: "The Bride",
    bio: "A soul composed of art, literature, and grace. With an infectious laughter and boundless warmth, she brings warmth and light to every room she enters.",
    instagram: "@riya_elegance",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  },

  // Main Wedding Event Details
  weddingDate: "December 12, 2026",
  weddingTime: "06:00 PM IST",
  countdownTarget: "2026-12-12T18:00:00", // ISO 8601 format for accurate countdown
  
  venue: {
    name: "The Oberoi Udaivilas",
    subtitle: "A Regal Sanctuary on Lake Pichola",
    city: "Udaipur, Rajasthan, India",
    fullAddress: "Badi-Gorela-Mulla Talai Rd, Haridas Ji Ki Magri, Udaipur, Rajasthan 313001",
    googleMapsUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.026402431782!2d73.67086887596041!3d24.588267978107936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5621422ab73%3A0xe21262dca9b50b7e!2sThe%20Oberoi%20Udaivilas%2C%20Udaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    photo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
  },

  // Love Story Timeline
  story: [
    {
      chapter: "Chapter I",
      title: "How We Met",
      date: "Autumn 2021",
      location: "A Cozy Cafe in Hauz Khas",
      description: "It began with a shared umbrella on a rainy evening and an accidental cup of spiced chai. What was meant to be a polite fifteen-minute introduction turned into four hours of endless conversations about art, dreams, and old Hindi poetry.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80"
    },
    {
      chapter: "Chapter II",
      title: "The First Chapter",
      date: "Spring 2022",
      location: "The Ghats of Varanasi",
      description: "Amid the golden lamps of the evening aarti and the gentle ripples of the river, we realized that home wasn't a place, but a person. In that sacred moment of silence, two distinct paths quietly merged into one.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80"
    },
    {
      chapter: "Chapter III",
      title: "A Beautiful Journey",
      date: "Winter 2024",
      location: "Mountains of Kashmir",
      description: "Surrounded by snow-capped peaks and quiet pine forests, every shared laugh, late-night drive, and quiet reassurance deepened our conviction. We learned each other's silences and celebrated every little triumph together.",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80"
    },
    {
      chapter: "Chapter IV",
      title: "The Beginning of Forever",
      date: "Valentine's Eve 2026",
      location: "Lake Pichola, Udaipur",
      description: "Under a canopy of starlight with traditional flutes echoing over the tranquil waters, Rahul got down on one knee. With tears of joy and a heart full of certainty, Riya said 'Forever'.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Wedding Events Timeline
  events: [
    {
      id: "haldi",
      title: "Haldi & Phoolon Ki Holi",
      subtitle: "A Splash of Sunlit Joy & Golden Blessings",
      date: "Thursday, December 10, 2026",
      time: "10:30 AM – 02:00 PM",
      venue: "The Suryavanshi Courtyard, Udaivilas",
      dressCode: "Sun-drenched Yellows & Floral Whites",
      description: "Traditional turmeric rituals adorned with fragrant marigold blossoms, live dhol rhythms, and joyful festive laughter.",
      icon: "sun",
      tag: "Day 01"
    },
    {
      id: "mehendi",
      title: "Mehendi Ki Raat",
      subtitle: "Intricate Henna Strains & Folk Melodies",
      date: "Thursday, December 10, 2026",
      time: "05:00 PM – 09:30 PM",
      venue: "The Crescent Lawns, Udaivilas",
      dressCode: "Emerald Greens, Mint & Pastel Shararas",
      description: "An evening of intricate henna artistry, fragrant jasmine garlands, bangle bar, and soul-stirring Rajasthani folk songs.",
      icon: "feather",
      tag: "Day 01"
    },
    {
      id: "sangeet",
      title: "Royal Sangeet & Musical Soiree",
      subtitle: "A Starry Night of Music, Dance & Glamour",
      date: "Friday, December 11, 2026",
      time: "07:00 PM Onwards",
      venue: "Grand Ballroom & Royal Terrace",
      dressCode: "Indo-Western Tuxedos & Shimmering Lehengas",
      description: "Spectacular family dance performances, live acoustic band, signature artisanal cocktails, and dancing under the stars.",
      icon: "music",
      tag: "Day 02"
    },
    {
      id: "wedding",
      title: "The Sacred Muhurtham & Pheras",
      subtitle: "The Union of Two Destinies",
      date: "Saturday, December 12, 2026",
      time: "04:30 PM – Baraat | 06:30 PM – Vows",
      venue: "The Lakeside Royal Mandap, Udaivilas",
      dressCode: "Regal Indian Heritage / Royal Ivory & Rose Gold",
      description: "Royal Baraat arrival by royal vintage cars, varmala amidst floating candles on Lake Pichola, followed by Vedic rituals around the holy fire.",
      icon: "ring",
      tag: "The Big Day"
    },
    {
      id: "reception",
      title: "The Grand Royal Reception",
      subtitle: "A Banquet to Celebrate Love & New Beginnings",
      date: "Sunday, December 13, 2026",
      time: "07:30 PM Onwards",
      venue: "The Palace Pavilions & Banquets",
      dressCode: "Black Tie & Regal Evening Couture",
      description: "An opulent gala dinner with imperial culinary experiences, champagne toasts, jazz quartet, and celebratory memories.",
      icon: "wine",
      tag: "Grand Finale"
    }
  ],

  // Gallery Images
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      caption: "In your eyes, I found my eternity.",
      category: "Portraits",
      aspect: "portrait"
    },
    {
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
      caption: "Hand in hand, entering the palace of dreams.",
      category: "Candid",
      aspect: "landscape"
    },
    {
      url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80",
      caption: "Intricate details of royal heritage couture.",
      category: "Details",
      aspect: "square"
    },
    {
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
      caption: "A whisper of promise under golden chandeliers.",
      category: "Romantic",
      aspect: "portrait"
    },
    {
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
      caption: "Sunset glow across the tranquil palace lake.",
      category: "Destination",
      aspect: "landscape"
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      caption: "Smiles that need no words.",
      category: "Candid",
      aspect: "square"
    },
    {
      url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
      caption: "Gold foil bands of sacred commitment.",
      category: "Details",
      aspect: "portrait"
    },
    {
      url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
      caption: "Stealing a quiet moment before the grand celebration.",
      category: "Romantic",
      aspect: "landscape"
    },
    {
      url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
      caption: "The grace and serenity of royal Indian traditions.",
      category: "Traditions",
      aspect: "portrait"
    }
  ],

  // Carousel Highlight Photos
  carousel: [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
      title: "The Regal Proposal",
      subtitle: "Lakeside at Dusk, Udaipur"
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
      title: "Eternal Devotion",
      subtitle: "A Sacred Promise of Companionship"
    },
    {
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=85",
      title: "A Tapestry of Heritage",
      subtitle: "Celebrating in the City of Lakes"
    },
    {
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=85",
      title: "Two Families, One Heart",
      subtitle: "United in Love & Blessings"
    }
  ],

  // Guest Information / Concierge Guide
  guestInfo: [
    {
      title: "Dress Code & Attire",
      description: "We invite you to celebrate in royal elegance. Traditional Indian attire or elegant western formal wear is cherished for all ceremonies. Please refer to individual event cards for color palettes.",
      icon: "sparkles"
    },
    {
      title: "Palace Accommodations",
      description: "Complimentary luxury royal suites have been reserved for all our guests at The Oberoi Udaivilas and Trident Udaipur from Dec 10 to Dec 14. Your personalized room allocation will be shared upon arrival.",
      icon: "hotel"
    },
    {
      title: "Flights & Airport Transfers",
      description: "Maharana Pratap Airport (UDR) is located 45 minutes from the venue. Chauffeur-driven luxury cars will be awaiting your arrival at the terminal. Kindly share your flight itinerary via the RSVP form.",
      icon: "plane"
    },
    {
      title: "Valet & Lake Ferries",
      description: "Dedicated valet parking is accessible at the Palace Gate. Guests staying across the lake can also enjoy private royal boat transfers to and from the Mandap throughout the celebrations.",
      icon: "boat"
    },
    {
      title: "Wedding Concierge Desk",
      description: "Our dedicated guest hospitality team is at your beck and call 24x7 for styling, salon appointments, childcare assistance, and sightseeing requests.",
      icon: "phone"
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "What should we wear for each function?",
      a: "Each ceremony has a distinct palette! We celebrate Haldi in bright sunshine yellows, Mehendi in shades of jade and mint, Sangeet in glamorous cocktail sparkle, the Wedding in regal heritage ivory and royal pinks, and the Reception in black tie or royal evening couture."
    },
    {
      q: "What time should we plan to arrive in Udaipur?",
      a: "We recommend arriving by morning or early afternoon on Thursday, December 10, 2026, so you can check into your palace suite and refresh before the sunset Mehendi soiree."
    },
    {
      q: "Is parking and transport arranged at the venue?",
      a: "Yes, dedicated 24x7 chauffeur transfers between Udaipur airport/railway station and the hotels are fully arranged. Complimentary valet parking is available at all venues."
    },
    {
      q: "Can we bring our little ones / children?",
      a: "Children are very dear to our hearts! A specialized royal kids' play lounge with certified attendants, entertainment, and child-friendly menus will be provided throughout the evening functions."
    },
    {
      q: "Are there vegetarian or specific dietary arrangements?",
      a: "Yes, our master chefs will curate comprehensive vegetarian, Jain, vegan, and gluten-free multi-cuisine delicacies. Please mention any allergies in your RSVP note."
    },
    {
      q: "Who can we contact if we need any assistance during the festivities?",
      a: "Please feel free to connect with our Wedding Concierge desk anytime at +91 98765 43210 or email concierge@rahulandriya.com."
    }
  ],

  // Music Settings
  music: {
    enabled: true,
    title: "Din Shagna Da & Sitar Reverie",
    artist: "Royal Sitar & Shehnai Ensemble",
    // Can be an external URL or fallback to built-in Web Audio synthesis
    externalMp3Url: "" // Leave empty to use the built-in ambient raga acoustic synthesizer!
  },

  // RSVP Form Configuration
  rsvp: {
    deadline: "November 20, 2026",
    confirmationEmail: "rsvp@rahulandriya.com",
    conciergePhone: "+91 98765 43210",
    successHeading: "We Rejoice in Your Acceptance!",
    successMessage: "Thank you for gracing our special journey with your love and presence. We count down the moments until we celebrate together under the Udaipur starlight."
  }
};

// Export to window
if (typeof window !== "undefined") {
  window.WEDDING_CONFIG = WEDDING_CONFIG;
}
