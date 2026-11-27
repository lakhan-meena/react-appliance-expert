export const site = {
  name: "Appliance Expert",
  slogan: "We Fix It, You Enjoy It!",
  phoneDisplay: "+91 9993595840",
  phoneTel: "tel:+919993595840",
  whatsapp: "https://wa.me/919993595840",
  email: "support.applianceexpert@gmail.com",
  address: "Vijay Nagar, Indore",
  hours: "7 AM – 9 AM, every day",
  tagline:
    "Doorstep repair in Indore for air conditioners, refrigerators, washing machines, microwaves, and LED TVs. We check the fault at home and tell you the cost before any work starts.",
  whyIntro: "One local team for the appliances that keep an Indore home running.",
  copyright: "©Copyright 2026 All Rights Reserved by Appliance Expert",
  city: "Indore",
  rating: { score: "4.8", label: "Average of the Indore notes shown on this page" },
  reasons: [
    { title: "Indore home visits", body: "The technician comes to your flat or house. You do not need to carry a fridge, washer, or TV anywhere." },
    { title: "Cost before work", body: "After a look at the appliance, you hear what is wrong and what it will take to fix it. Work starts only after you agree." },
    { title: "Parts you can see", body: "If a part needs changing, it is shown and named first. Nothing is fitted quietly in the background." },
    { title: "Five appliances, one call", body: "Cooling, laundry, kitchen ovens, and LED screens are booked on the same number." },
    { title: "Morning slots", body: "Visits run from 7 AM to 9 AM, including Sunday." },
    { title: "Same fault, call us back", body: "If the problem we just repaired shows up again soon after the visit, phone the same number and we will look at it again." },
  ],
  aboutPoints: [
    "Workshop base in Vijay Nagar, Indore",
    "Visits only inside Indore",
    "Fault and price explained before repair",
    "AC, fridge, washer, microwave, and LED TV",
  ],
  stats: [
    { value: "Indore", label: "The only city we cover, so the drive stays short." },
    { value: "5 lines", label: "Cooling, refrigeration, laundry, microwave, and LED TV." },
  ],
  homeReviews: [
    { quote: "Booked an AC visit in Palasia. They named the fault, quoted the gas, and the room was cool before the evening.", name: "Meera Joshi", area: "Palasia", stars: 5 },
    { quote: "Washer in Rajendra Nagar was shaking the whole bathroom. Same-day visit, and they did not start until I agreed the part.", name: "Ankit Soni", area: "Rajendra Nagar", stars: 5 },
    { quote: "Side-by-side fridge was cooling on one side only. Clear explanation, then the repair.", name: "Kavita Rao", area: "Bhawarkua", stars: 4 },
    { quote: "LED had sound and no picture. The technician tested it at home instead of asking us to haul the TV out.", name: "Rohan Dixit", area: "Scheme 54", stars: 5 },
    { quote: "Microwave in Vijay Nagar stopped heating. Quick visit, and they left the oven running a test cycle.", name: "Sneha Patel", area: "Vijay Nagar", stars: 5 },
  ],
}

export const services = [
  {
    slug: "ac-repair",
    nav: "AC Repair",
    name: "AC Repair",
    image: "/images/split-ac.jpg",
    blurb: "Split and window units, plus fitting a new indoor unit. Gas, cleaning, and cooling faults are handled at home.",
    reviewKicker: "Indore cooling notes",
    reviewTitle: "Air conditioners back on a steady cool",
    offerings: [
      { name: "Split AC Repair", image: "/images/split-ac.jpg", summary: "Low cooling, water drip, odd noise, and gas top-up for wall-mounted split units.", tags: ["Split units", "At home"] },
      { name: "Window AC Repair", image: "/images/window-ac.jpg", summary: "Deep clean, fan and cooling checks, and gas refill for window machines.", tags: ["Window units", "Cleaning"] },
      { name: "AC Fitting", image: "/images/ac-install.jpg", summary: "New indoor unit mounting, copper line, and a first-run check so the room actually cools.", tags: ["New fit", "First run"] },
    ],
    reviews: [
      { quote: "The split unit in our Palasia flat was blowing warm air. They found a slow leak, filled the gas, and the room cooled the same evening.", name: "Meera Joshi", area: "Palasia", stars: 5 },
      { quote: "Window AC was rattling. The visit was tidy and they told me the fan cost before opening the cabinet.", name: "Imran Qureshi", area: "Sudama Nagar", stars: 5 },
      { quote: "New split fit in Vijay Nagar. Bracket, drain, and the first cool-down were done in one visit.", name: "Nidhi Chouhan", area: "Vijay Nagar", stars: 4 },
    ],
  },
  {
    slug: "fridge-repair",
    nav: "Fridge Repair",
    name: "Fridge Repair",
    image: "/images/double-door-fridge.jpg",
    blurb: "Single-door, double-door, and side-by-side refrigerators. Cooling, gas, and compressor checks at your kitchen.",
    reviewKicker: "Kitchen cooling notes",
    reviewTitle: "Fridges holding temperature again",
    offerings: [
      { name: "Double Door Fridge Repair", image: "/images/double-door-fridge.jpg", summary: "Freezer frost, weak fridge cooling, gas charge, and compressor checks on double-door models.", tags: ["Double door", "At home"] },
      { name: "Single Door Fridge Repair", image: "/images/single-door-fridge.jpg", summary: "Cooling loss and gas refill for compact single-door refrigerators.", tags: ["Single door", "Gas refill"] },
      { name: "Side by Side Fridge Repair", image: "/images/side-by-side-fridge.jpg", summary: "Wide side-by-side cabinets: uneven cooling, ice maker faults, and compressor service.", tags: ["Side by side", "Both doors"] },
    ],
    reviews: [
      { quote: "Our side-by-side was cold on the left and warm on the right. They balanced it and explained the fan fault before changing anything.", name: "Kavita Rao", area: "Bhawarkua", stars: 4 },
      { quote: "Double-door freezer had become a block of ice. After the visit, both compartments settled overnight.", name: "Harsh Malviya", area: "Scheme 78", stars: 5 },
      { quote: "Small single-door in the office pantry stopped cooling. Gas was refilled the same afternoon.", name: "Pooja Jain", area: "MG Road", stars: 5 },
    ],
  },
  {
    slug: "washing-machine-repair",
    nav: "Washing Machine",
    name: "Washing Machine Repair",
    image: "/images/front-load.jpg",
    blurb: "Front load, top load, and twin-tub machines. Drum noise, spin, drain, and timer faults repaired at home.",
    reviewKicker: "Laundry notes",
    reviewTitle: "Wash cycles running clean again",
    offerings: [
      { name: "Front Load Repair", image: "/images/front-load.jpg", summary: "Door lock, drum noise, drain pump, and control board faults on front-load washers.", tags: ["Front load", "At home"] },
      { name: "Top Load Repair", image: "/images/top-load.jpg", summary: "Spin failure, lid switch, and panel faults on top-load machines.", tags: ["Top load", "Spin and drain"] },
      { name: "Semi-Automatic Repair", image: "/images/semi-automatic.jpg", summary: "Twin-tub washer and dryer tubs, timer, and motor checks.", tags: ["Twin tub", "Timer"] },
    ],
    reviews: [
      { quote: "Front load in Rajendra Nagar was thumping on spin. They levelled it and replaced a worn shock, and the noise stopped.", name: "Ankit Soni", area: "Rajendra Nagar", stars: 5 },
      { quote: "Top load would fill and then sit. The drain path was blocked. They showed me the part before fitting it.", name: "Ritu Sharma", area: "Sapna Sangeeta", stars: 5 },
      { quote: "Twin-tub timer had died. The semi-automatic was washing again before lunch.", name: "Farhan Sheikh", area: "Khajrana", stars: 4 },
    ],
  },
  {
    slug: "microwave-repair",
    nav: "Microwave",
    name: "Microwave Repair",
    image: "/images/solo-microwave.jpg",
    blurb: "Solo, grill, and convection ovens that will not heat, spark, or hold a setting.",
    reviewKicker: "Kitchen notes",
    reviewTitle: "Ovens heating the way they should",
    offerings: [
      { name: "Solo Microwave Repair", image: "/images/solo-microwave.jpg", summary: "No heat, buzzing, or a dead keypad on simple solo ovens.", tags: ["Solo", "Heating"] },
      { name: "Grill Microwave Repair", image: "/images/grill-microwave.jpg", summary: "Grill element, sparking, and uneven browning on grill models.", tags: ["Grill", "Element"] },
      { name: "Convection Microwave Repair", image: "/images/convection-microwave.jpg", summary: "Convection fan, sensor, and heating faults on larger oven models.", tags: ["Convection", "Sensor"] },
    ],
    reviews: [
      { quote: "Solo oven turned but the food stayed cold. They traced it to the high-voltage side and had dinner possible again the same night.", name: "Sneha Patel", area: "Vijay Nagar", stars: 5 },
      { quote: "Grill mode had stopped browning. The element was swapped and they tested a short cycle in front of me.", name: "Aditya Verma", area: "Palasia", stars: 4 },
      { quote: "Convection microwave showed an error and would not start. The visit was calm and the price was agreed first.", name: "Lakshmi Nair", area: "Bengali Square", stars: 5 },
    ],
  },
  {
    slug: "led-tv-repair",
    nav: "LED TV",
    name: "LED TV Repair",
    image: "/images/led-tv.jpg",
    blurb: "Blank screens, lines, sound with no picture, and wall-mount fitting for LED televisions.",
    reviewKicker: "Screen notes",
    reviewTitle: "LED sets with a picture again",
    offerings: [
      { name: "LED TV Repair", image: "/images/led-tv.jpg", summary: "No display, vertical lines, sound without a picture, and power faults on LED TVs.", tags: ["LED panel", "At home"] },
      { name: "Smart LED Service", image: "/images/smart-led.jpg", summary: "Smart TVs that boot to a logo, lose Wi-Fi, or restart during a show.", tags: ["Smart TV", "Startup"] },
      { name: "Wall Mount and Setup", image: "/images/led-mount.jpg", summary: "Bracket fitting, cable dress, and a first power-on after the screen is on the wall.", tags: ["Wall mount", "Setup"] },
    ],
    reviews: [
      { quote: "The LED in our hall had sound and a black screen. They carried a test board, confirmed the fault, and the picture returned.", name: "Rohan Dixit", area: "Scheme 54", stars: 5 },
      { quote: "Smart TV kept restarting. After the visit it stayed on through a full match.", name: "Ayesha Khan", area: "Vijay Nagar", stars: 5 },
      { quote: "We bought a screen without a mount. They fixed the bracket level and hid the cables.", name: "Mohit Tiwari", area: "Bhawarkua", stars: 4 },
    ],
  },
]

export function findService(slug) {
  return services.find((item) => item.slug === slug)
}

export const pages = {
  terms: {
    title: "Terms & Conditions",
    summary: "How a booking with Appliance Expert works.",
    updated: "November 9, 2026",
    intro: "These notes apply when you call, message, or book a home visit with Appliance Expert in Indore. If you use the site or ask us to come over, you are agreeing to them.",
    sections: [
      { heading: "1. What we repair", paragraphs: ["We repair and fit air conditioners, refrigerators (including side-by-side models), washing machines, microwave ovens, and LED televisions. A visit is offered inside Indore only, and only when a technician and the right part are available."] },
      { heading: "2. Booking", paragraphs: ["Please share a working phone number, the Indore address, and what the appliance is doing. A time we give is a window, not a stopwatch. Traffic, an earlier job, or a missing part can move it. Please keep the appliance reachable and the work area safe."] },
      { heading: "3. Price and payment", paragraphs: ["The technician inspects first. The amount can change once the fault is clear, because labour and parts differ. We tell you the figure before repair work starts. Payment is due when that visit's work is finished, unless we have agreed something else in writing or on the call."] },
      { heading: "4. Parts and a return visit", paragraphs: ["Parts may be new, matched, or refurbished, and we say which one before fitting it. A later visit covers the same fault we just repaired. It does not cover a new fault, a drop, misuse, a power surge, water damage, or ordinary wear."] },
      { heading: "5. Your side of the visit", paragraphs: ["Please move personal items away from the appliance and mention any leak, burning smell, or earlier repair. We can refuse a job that is unsafe."] },
      { heading: "6. Limits", paragraphs: ["Appliance Expert is not liable for indirect loss, lost recordings on a TV, or damage that was already present, caused by another repair, or outside our control."] },
      { heading: "7. Cancelling", paragraphs: ["Tell us as soon as you need to move or cancel a slot. If the technician is already travelling or at the door, a visit charge can apply."] },
      { heading: "8. This website", paragraphs: ["Pages describe the kind of work we do. They are not a diagnosis. Prices and timing can change, and only the visit confirms the fault."] },
      { heading: "9. Talk to us", paragraphs: ["Call +91 9993595840, WhatsApp the same number, or email support.applianceexpert@gmail.com. The desk is at Vijay Nagar, Indore."] },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    summary: "What we keep when you ask for a repair in Indore.",
    updated: "November 9, 2026",
    intro: "Appliance Expert keeps only what we need to reach you and to do the repair. We do not sell your details.",
    sections: [
      { heading: "1. What we collect", paragraphs: ["Your name, phone number, email if you send one, the Indore address, the appliance, and the fault you describe. The site may also see basic browser data such as the page you opened."] },
      { heading: "2. Why we use it", paragraphs: ["To schedule the visit, send the technician, reply on WhatsApp or email, and improve how the site reads. We do not use it for unrelated marketing."] },
      { heading: "3. Who sees it", paragraphs: ["The person coming to your home sees the address and the fault. We may also share a detail if the law requires it. We do not rent or sell the list."] },
      { heading: "4. Cookies", paragraphs: ["A cookie may remember a session on this site. You can block cookies in the browser. The pages will still describe the services."] },
      { heading: "5. How long and how safely", paragraphs: ["We keep booking notes while they are useful for a return visit or a receipt, then drop them. No online transfer is perfectly sealed, so please avoid sending passwords or card numbers in a chat."] },
      { heading: "6. Children", paragraphs: ["The service is for adults booking a home repair. We do not knowingly collect a child's details."] },
      { heading: "7. Your ask", paragraphs: ["You can ask what we hold, ask for a correction, or ask us to delete it. Email support.applianceexpert@gmail.com or call +91 9993595840."] },
      { heading: "8. Updates", paragraphs: ["If this note changes, the new text and date will be on this page."] },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    summary: "What this website does and does not promise.",
    updated: "November 9, 2026",
    intro: "The pages are a guide to Appliance Expert's Indore repair visits. They are not a remote diagnosis.",
    sections: [
      { heading: "1. Not a DIY guide", paragraphs: ["Do not open a live appliance from something you read here. Gas, mains voltage, and a microwave's high-voltage parts are unsafe without the right tools. Call a technician."] },
      { heading: "2. Results vary", paragraphs: ["Two machines with the same symptom can need different work. An old appliance may not be worth repairing. We say so after looking at it."] },
      { heading: "3. Brand names", paragraphs: ["Any brand name you mention on a call belongs to its owner. Appliance Expert is an independent repair desk in Vijay Nagar. We are not the manufacturer's own service centre."] },
      { heading: "4. Site details", paragraphs: ["We correct the site when we can. Timing, parts, and prices still change, and the visit is what counts."] },
      { heading: "5. Other websites", paragraphs: ["A link leaving this site is only a convenience. We do not control that page."] },
      { heading: "6. Liability", paragraphs: ["To the extent the law allows, Appliance Expert is not liable for indirect or consequential loss from using the website or from a repair, including lost recordings, spoilt food, or a missed booking."] },
      { heading: "7. Contact", paragraphs: ["Questions: support.applianceexpert@gmail.com or +91 9993595840. Office: Vijay Nagar, Indore."] },
    ],
  },
}
