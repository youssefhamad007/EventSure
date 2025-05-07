"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Music Event",
    thumbnail: "/public/Dynamic Live Concert with Pyrotechnics.jpeg",
    description: <p>
    Get ready for a night of unforgettable rhythm and melodies at our Music Event! This live concert brings together some
    of the most talented performers across genres, from soulful ballads to electrifying rock anthems. Expect a visually
    stunning show with lights, pyrotechnics, and top-notch acoustics. Whether you're a casual listener or a passionate
    music aficionado, this experience will leave your heart beating to the sound of live music.
  </p>,
    price: "$65",
    city: "Grand Arena, Las Vegas, NV",
    bookingLink: "https://gomoonbeam.com/book"
  },
  {
    title: "Worlds Event",
    thumbnail: "/public/Focused Gamers at Gaming Cafe.jpeg",
    description: <p>
    Dive into the heart of esports and digital entertainment at the Worlds Gaming Event. Compete in high-stakes
    tournaments, witness top-tier gameplay, and explore the latest in VR and gaming tech. Meet streamers, developers,
    and fellow enthusiasts in a high-energy environment designed for gamers by gamers. With interactive zones, cosplay 
    showcases, and exclusive merchandise, this event is a celebration of everything gaming.
  </p>,
    price: "$30",
    city: "Silicon Valley Gaming Arena, CA",
    bookingLink: "https://cursor.so/book"
  },
  {
    title: "Art Event",
    thumbnail: "/public/Modern Art Gallery.jpeg",
    description: <p>
    Step into a world of creativity and inspiration at our Art Event, showcasing works from emerging and established artists.
    Explore captivating exhibits of modern paintings, sculpture, digital art, and more. Participate in live art demonstrations,
    interactive installations, and artist Q&A sessions. Whether you're an art collector or an admirer, this event invites you to
    celebrate visual expression in all its forms.
  </p>,
    price: "$25",
    city: "Loft Gallery, Brooklyn, NY",
  },
  {
    title: "Party Event",
    thumbnail: "/public/Mysterious DJ at Work.jpeg",
    description: <p>
    The ultimate night out awaits you at our Party Event! Featuring an elite lineup of DJs, immersive light shows,
    and themed dance floors, this party is a haven for nightlife lovers. Dress to impress, bring your energy, and
    dance the night away in a vibrant atmosphere filled with music, drinks, and unforgettable moments. It's not just
    a party—it's a celebration of life.
  </p>,
    price: "$45",
    city: "Rooftop Terrace, Chicago, IL",
  },
  {
    title: "Cars Event",
    thumbnail: "/public/Snow-covered Car in Wintery Forest at Night.jpeg",
    description: <p>
    Feast your eyes on the ultimate showcase of engineering and design at the Cars Event. Featuring a curated
    collection of classic, luxury, and concept vehicles, this event is a paradise for auto enthusiasts. Learn
    about the evolution of automotive technology, meet industry experts, and enjoy test drives and engine rev-ups.
    From muscle cars to futuristic EVs, it’s an experience that fuels your passion for speed and style.
  </p>,
    price: "€30",
    city: "Auto Exposition Center, Stuttgart, Germany",
  },
  {
    title: "Cooking Event",
    thumbnail: "/public/Sunlit Street Food Bazaar.jpeg",
    description: <p>
    Indulge your taste buds and witness culinary magic at the Cooking Event. Top chefs and aspiring cooks go head-to-head
    in thrilling cooking competitions across cuisines. Enjoy live tastings, cooking demonstrations, food styling workshops,
    and local delicacies from pop-up stalls. Whether you’re a foodie or a kitchen pro, this event is a feast for the senses.
  </p>,
    price: "€25",
    city: "Culinary Plaza, Barcelona, Spain",
  },
  {
    title: "Yoga Event",
    thumbnail: "/public/Tranquil Yoga Session in Serene Illuminated Studio.jpeg",
    description: <p>
    Reconnect with your body, mind, and soul at the Yoga Event. Set in a peaceful studio space,
    this event features guided yoga sessions, mindfulness workshops, breathwork techniques, and holistic wellness discussions.
    Led by experienced instructors, it caters to all levels—from curious beginners to advanced yogis. Find your center,
    embrace stillness, and leave feeling renewed.
  </p>,
    price: "EGP 200",
    city: "Zen Studio, Cairo, Egypt",
  },
  {
    title: "Famiely Event",
    thumbnail: "/public/Twilight Festival at the Historic Cathedral Square.jpeg",
    description: <p>
    Make cherished memories with your loved ones at our Family Event! Enjoy a day packed with fun activities for all
    ages including games, storytelling, music, food stalls, and themed performances. With a warm and welcoming atmosphere, 
    it’s the perfect setting to relax, laugh, and bond with your family. Special zones for kids, crafts, and parent relaxation
    areas ensure everyone has a wonderful time.
  </p>,
    price: "CZK 350",
    city: "Cathedral Square, Prague, Czech Republic",
  },
  {
    title: "Sport Event",
    thumbnail: "/public/Vibrant Stadium Celebration.jpeg",
    description: <p>
    Plunge into a world of aquatic wonder at the Diving Event. Explore vibrant coral reefs, swim with marine life,
    and experience the thrill of underwater exploration through guided dives and snorkeling adventures. Ideal for certified
    divers and curious beginners alike, the event includes expert instruction, safety briefings, and access to premium gear.
    Discover the beauty beneath the waves.
  </p>,
    price: "AUD 80",
    city: "Coral Reef Dive Center, Great Barrier Reef, Australia",
  },
  {
    title: "Artist Workspace Event",
    thumbnail: "/public/Artists Workspace.jpeg",
    description: <p>
    Discover the process behind the masterpiece at the Artist Workspace Event. Gain exclusive access to working
    studios and watch creatives bring their visions to life. From sketching and painting to sculpting and digital
    design, this immersive event offers workshops, open studio tours, and mentoring sessions. It's an inspiring 
    space for artists and art lovers to connect, create, and collaborate.
  </p>,
    price: "$35",
    city: "Studio 19, Downtown Los Angeles, CA",
  },
  {
    title: "Music High Event",
    thumbnail: "/public/High-Energy Music Concert_upscayl_2x_upscayl-standard-4x.png",
    description: <p>
    Prepare to feel the bass and move with the beat at our Music High Event—an electrifying concert packed
    with nonstop energy. Featuring world-renowned DJs, live performances, synchronized light shows, and heart-thumping
    sound, this event is designed to elevate your vibe. Perfect for those who live for the thrill of dance floors, this
    night will keep you on your feet and your spirit soaring.
  </p>,
    price: "$50",
    city: "Pulse Nightclub, Miami, FL",
  },
  {
    title: "Seminar Event",
    thumbnail: "/public/Seminar Audience Scene.jpeg",
    description: <p>
    Engage your intellect and broaden your horizons at the Seminar Event, featuring distinguished
    speakers from diverse fields. This event offers a rich lineup of lectures, panel discussions,
    and interactive Q&A sessions on topics ranging from technology and health to entrepreneurship 
    and global issues. Ideal for professionals, students, and lifelong learners alike.
  </p>,
    price: "£20",
    city: "Conference Hall A, London, UK",
  },
  {
    title: "Diving Event",
    thumbnail: "/public/Underwater Paradise and Tropical Landscape.jpeg",
    description: <p>
    Plunge into a world of aquatic wonder at the Diving Event. Explore vibrant coral reefs, swim with marine life,
    and experience the thrill of underwater exploration through guided dives and snorkeling adventures. Ideal for certified
    divers and curious beginners alike, the event includes expert instruction, safety briefings, and access to premium gear.
    Discover the beauty beneath the waves.
  </p>,
    price: "AUD 80",
    city: "Coral Reef Dive Center, Great Barrier Reef, Australia",
  },
  {
    title: "Pet Event",
    thumbnail: "/public/Cozy Pet Store Scene.jpeg",
    description: <p>
    Experience the joy of bonding with adorable furry companions at our cozy Pet Event. Whether you're a lifelong pet lover
    or considering adopting for the first time, this event offers hands-on interaction with cats, dogs, and small animals
    in a warm, welcoming setting. Learn about proper pet care, meet trainers, and enjoy live grooming demonstrations.
    Families and kids are especially welcome to explore the fun activities, games, and giveaways tailored for animal
    enthusiasts.
              </p>,
    price: "$20",
    city: "Portland",
  },
  {
    title: "Campinig",
    thumbnail: "/public/Dramatic Mountainous Tent Under Night Sky.jpeg",
    description:<p>
    Embark on a thrilling outdoor adventure at our Camping Event nestled in the heart of the wilderness. Set against a 
    backdrop of starry skies and rugged mountains, this event is perfect for both beginners and seasoned campers. Join
    guided hikes, survival skill workshops, bonfire storytelling sessions, and stargazing tours. It's a chance to unplug 
    from the digital world and reconnect with nature in an unforgettable experience.
            </p> ,
    price: "$65",
    city: "Boulder",
  },
];