"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click";

export function EventsCard({ onAddToCart }) {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base">
                      {active.description}
                    </motion.p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        <strong>Location:</strong> {active.location}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      <strong>Price:</strong> {active.price}
                    </p>
                  </div>

                  <motion.button
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => onAddToCart(active)}
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-md hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-400 cursor-pointer"
                    >
                      {active.ctaText}
                    </motion.button>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul
        className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top" />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
      
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
    {
      description: "cozy pet",
      title: "Pet Event",
      src: "/Cozy Pet Store Scene.jpeg",
      ctaText: "BookNow",
      location: "Downtown Pet Center, San Francisco, CA",
      price: "$15",
      content: () => (
        <p>
          Experience the joy of bonding with adorable furry companions at our cozy Pet Event. Whether you're a lifelong pet lover
          or considering adopting for the first time, this event offers hands-on interaction with cats, dogs, and small animals
          in a warm, welcoming setting. Learn about proper pet care, meet trainers, and enjoy live grooming demonstrations.
          Families and kids are especially welcome to explore the fun activities, games, and giveaways tailored for animal
          enthusiasts.
        </p>
      ),
    },
    {
      description: "Campinig",
      title: "Cammping Event",
      src: "/Dramatic Mountainous Tent Under Night Sky.jpeg",
      ctaText: "BookNow",
      location: "Ridgecrest Campgrounds, Rocky Mountain National Park, CO",
      price: "$40",
      content: () => (
        <p>
          Embark on a thrilling outdoor adventure at our Camping Event nestled in the heart of the wilderness. Set against a 
          backdrop of starry skies and rugged mountains, this event is perfect for both beginners and seasoned campers. Join
          guided hikes, survival skill workshops, bonfire storytelling sessions, and stargazing tours. It's a chance to unplug 
          from the digital world and reconnect with nature in an unforgettable experience.
        </p>
      ),
    },
    {
      description: "Musical",
      title: "Music Event",
      src: "/Dynamic Live Concert with Pyrotechnics.jpeg",
      ctaText: "BookNow",
      location: "Grand Arena, Las Vegas, NV",
      price: "$65",
      content: () => (
        <p>
          Get ready for a night of unforgettable rhythm and melodies at our Music Event! This live concert brings together some
          of the most talented performers across genres, from soulful ballads to electrifying rock anthems. Expect a visually
          stunning show with lights, pyrotechnics, and top-notch acoustics. Whether you're a casual listener or a passionate
          music aficionado, this experience will leave your heart beating to the sound of live music.
        </p>
      ),
    },
    {
      description: "Gamming",
      title: "Worlds Event",
      src: "/Focused Gamers at Gaming Cafe.jpeg",
      ctaText: "BookNow",
      location: "Silicon Valley Gaming Arena, CA",
      price: "$30",
      content: () => (
        <p>
          Dive into the heart of esports and digital entertainment at the Worlds Gaming Event. Compete in high-stakes
          tournaments, witness top-tier gameplay, and explore the latest in VR and gaming tech. Meet streamers, developers,
          and fellow enthusiasts in a high-energy environment designed for gamers by gamers. With interactive zones, cosplay 
          showcases, and exclusive merchandise, this event is a celebration of everything gaming.
        </p>
      ),
    },
    {
      description: "Musical HIgh Energy",
      title: "Music High Event",
      src: "/High-Energy Music Concert_upscayl_2x_upscayl-standard-4x.png",
      ctaText: "BookNow",
      location: "Pulse Nightclub, Miami, FL",
      price: "$50",
      content: () => (
        <p>
          Prepare to feel the bass and move with the beat at our Music High Event—an electrifying concert packed
          with nonstop energy. Featuring world-renowned DJs, live performances, synchronized light shows, and heart-thumping
          sound, this event is designed to elevate your vibe. Perfect for those who live for the thrill of dance floors, this
          night will keep you on your feet and your spirit soaring.
        </p>
      ),
    },
    {
      description: "Art & Drawing",
      title: "Art Event",
      src: "/Modern Art Gallery.jpeg",
      ctaText: "BookNow",
      location: "Loft Gallery, Brooklyn, NY",
      price: "$25",
      content: () => (
        <p>
          Step into a world of creativity and inspiration at our Art Event, showcasing works from emerging and established artists.
          Explore captivating exhibits of modern paintings, sculpture, digital art, and more. Participate in live art demonstrations,
          interactive installations, and artist Q&A sessions. Whether you're an art collector or an admirer, this event invites you to
          celebrate visual expression in all its forms.
        </p>
      ),
    },
    {
      description: "Artist Workspace",
      title: "Artist Workspace Event",
      src: "/Artists Workspace.jpeg",
      ctaText: "BookNow",
      location: "Studio 19, Downtown Los Angeles, CA",
      price: "$35",
      content: () => (
        <p>
          Discover the process behind the masterpiece at the Artist Workspace Event. Gain exclusive access to working
          studios and watch creatives bring their visions to life. From sketching and painting to sculpting and digital
          design, this immersive event offers workshops, open studio tours, and mentoring sessions. It's an inspiring 
          space for artists and art lovers to connect, create, and collaborate.
        </p>
      ),
    },
    {
      description: "Party",
      title: "Party Event",
      src: "/Mysterious DJ at Work.jpeg",
      ctaText: "BookNow",
      location: "Rooftop Terrace, Chicago, IL",
      price: "$45",
      content: () => (
        <p>
          The ultimate night out awaits you at our Party Event! Featuring an elite lineup of DJs, immersive light shows,
          and themed dance floors, this party is a haven for nightlife lovers. Dress to impress, bring your energy, and
          dance the night away in a vibrant atmosphere filled with music, drinks, and unforgettable moments. It's not just
          a party—it's a celebration of life.
        </p>
      ),
    },
    {
      description: "Seminar Listening",
      title: "Seminar Event",
      src: "/Seminar Audience Scene.jpeg",
      ctaText: "Booknow",
      location: "Conference Hall A, London, UK",
      price: "£20",
      content: () => (
        <p>
          Engage your intellect and broaden your horizons at the Seminar Event, featuring distinguished
          speakers from diverse fields. This event offers a rich lineup of lectures, panel discussions,
          and interactive Q&A sessions on topics ranging from technology and health to entrepreneurship 
          and global issues. Ideal for professionals, students, and lifelong learners alike.
        </p>
      ),
    },
    {
      description: "Best Cars Collection",
      title: "Cars Event",
      src: "/Snow-covered Car in Wintery Forest at Night.jpeg",
      ctaText: "Booknow",
      location: "Auto Exposition Center, Stuttgart, Germany",
      price: "€30",
      content: () => (
        <p>
          Feast your eyes on the ultimate showcase of engineering and design at the Cars Event. Featuring a curated
          collection of classic, luxury, and concept vehicles, this event is a paradise for auto enthusiasts. Learn
          about the evolution of automotive technology, meet industry experts, and enjoy test drives and engine rev-ups.
          From muscle cars to futuristic EVs, it’s an experience that fuels your passion for speed and style.
        </p>
      ),
    },
    {
      description: "Cooking Comptation",
      title: "Cooking Event",
      src: "/Sunlit Street Food Bazaar.jpeg",
      ctaText: "Booknow",
      location: "Culinary Plaza, Barcelona, Spain",
      price: "€25",
      content: () => (
        <p>
          Indulge your taste buds and witness culinary magic at the Cooking Event. Top chefs and aspiring cooks go head-to-head
          in thrilling cooking competitions across cuisines. Enjoy live tastings, cooking demonstrations, food styling workshops,
          and local delicacies from pop-up stalls. Whether you’re a foodie or a kitchen pro, this event is a feast for the senses.
        </p>
      ),
    },
    {
      description: "Yoga Couching Session",
      title: "Yoga Event",
      src: "/Tranquil Yoga Session in Serene Illuminated Studio.jpeg",
      ctaText: "Booknow",
      location: "Zen Studio, Cairo, Egypt",
      price: "EGP 200",
      content: () => (
        <p>
          Reconnect with your body, mind, and soul at the Yoga Event. Set in a peaceful studio space,
          this event features guided yoga sessions, mindfulness workshops, breathwork techniques, and holistic wellness discussions.
          Led by experienced instructors, it caters to all levels—from curious beginners to advanced yogis. Find your center,
          embrace stillness, and leave feeling renewed.
        </p>
      ),
    },
    {
      description: "Famiely Journey",
      title: "Famiely Event",
      src: "/Twilight Festival at the Historic Cathedral Square.jpeg",
      ctaText: "Booknow",
      location: "Cathedral Square, Prague, Czech Republic",
      price: "CZK 350",
      content: () => (
        <p>
          Make cherished memories with your loved ones at our Family Event! Enjoy a day packed with fun activities for all
          ages including games, storytelling, music, food stalls, and themed performances. With a warm and welcoming atmosphere, 
          it’s the perfect setting to relax, laugh, and bond with your family. Special zones for kids, crafts, and parent relaxation
          areas ensure everyone has a wonderful time.
        </p>
      ),
    },
    {
      description: "Under Water Diving",
      title: "Diving Event",
      src: "/Underwater Paradise and Tropical Landscape.jpeg",
      ctaText: "Booknow",
      location: "Coral Reef Dive Center, Great Barrier Reef, Australia",
      price: "AUD 80",
      content: () => (
        <p>
          Plunge into a world of aquatic wonder at the Diving Event. Explore vibrant coral reefs, swim with marine life,
          and experience the thrill of underwater exploration through guided dives and snorkeling adventures. Ideal for certified
          divers and curious beginners alike, the event includes expert instruction, safety briefings, and access to premium gear.
          Discover the beauty beneath the waves.
        </p>
      ),
    },
    {
      description: "Champions Finals",
      title: "Sport Event",
      src: "/Vibrant Stadium Celebration.jpeg",
      ctaText: "Booknow",
      location: "National Stadium, Tokyo, Japan",
      price: "¥5000",
      content: () => (
        <p>
          Witness the intensity of competition and the spirit of victory at the Sport Event's Championship Finals.
          This high-energy spectacle brings together top athletes from across the region for a day of action-packed matches
          and fierce rivalry. From breathtaking plays to emotional celebrations, every moment is a testament to dedication,
          teamwork, and athletic excellence. Join fans in cheering for glory!
        </p>
      ),
    },
  ];
