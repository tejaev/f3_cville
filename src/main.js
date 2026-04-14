const workouts = [
  {
    day: "Monday",
    time: "5:30 AM",
    ao: "Devil's Dice",
    style: "Bootcamp",
    location: "McIntire Skate Park",
  },
  {
    day: "Monday",
    time: "5:30 AM",
    ao: "Mall Rats",
    style: "Bootcamp",
    location: "Ting Pavilion",
  },
  {
    day: "Monday",
    time: "5:30 AM",
    ao: "Northside",
    style: "Bootcamp",
    location: "Hollymeade Elementary",
  },
  {
    day: "Tuesday",
    time: "5:30 AM",
    ao: "Westside",
    style: "Bootcamp",
    location: "Ivy Elementary",
  },
  {
    day: "Tuesday",
    time: "5:30 AM",
    ao: "PABRC",
    style: "Running",
    location: "Ting Pavilion",
  },
  {
    day: "Tuesday",
    time: "5:30 AM",
    ao: "Gotham",
    style: "Running",
    location: "Charlottesville High School Track",
  },
  {
    day: "Tuesday",
    time: "6:00 AM",
    ao: "Thunderdome",
    style: "Bootcamp",
    location: "The Rotunda",
  },
  {
    day: "Wednesday",
    time: "5:30 AM",
    ao: "Brozet",
    style: "Bootcamp",
    location: "Henley Middle School",
  },
  {
    day: "Wednesday",
    time: "5:30 AM",
    ao: "Blackout",
    style: "Bootcamp",
    location: "Booker T. Washington Park",
  },
  {
    day: "Wednesday",
    time: "5:30 AM",
    ao: "Northside",
    style: "Weightlifting",
    location: "Hollymeade Elementary",
  },
  {
    day: "Wednesday",
    time: "5:30 AM",
    ao: "South Park",
    style: "Bootcamp",
    location: "PVCC",
  },
  {
    day: "Thursday",
    time: "5:30 AM",
    ao: "Northside",
    style: "Bootcamp",
    location: "Hollymeade Elementary",
  },
  {
    day: "Thursday",
    time: "5:30 AM",
    ao: "Westside",
    style: "Bootcamp",
    location: "Ivy Elementary",
  },
  {
    day: "Thursday",
    time: "5:30 AM",
    ao: "Gotham",
    style: "Running",
    location: "Charlottesville High School Track",
  },
  {
    day: "Thursday",
    time: "6:00 AM",
    ao: "Gotham",
    style: "Running",
    location: "Charlottesville High School Track",
  },
  {
    day: "Friday",
    time: "5:30 AM",
    ao: "Mall Rats",
    style: "Weightlifting",
    location: "Ting Pavilion",
  },
  {
    day: "Friday",
    time: "5:30 AM",
    ao: "Code Red",
    style: "Murph",
    location: "Darden Towe",
    note: 'This is a monthly "Murph" workout that occurs on the last Friday of the month',
  },
  {
    day: "Friday",
    time: "5:45 AM",
    ao: "Northside Smurph",
    style: "Bootcamp",
    location: "Hollymeade Elementary",
  },
  {
    day: "Friday",
    time: "6:00 AM",
    ao: "Gotham",
    style: "Bootcamp",
    location: "Charlottesville High School Track",
  },
  {
    day: "Saturday",
    time: "6:30 AM",
    ao: "Blackout",
    style: "Bootcamp",
    location: "Booker T. Washington Park",
  },
  {
    day: "Saturday",
    time: "6:30 AM",
    ao: "Westside",
    style: "Bootcamp",
    location: "Ivy Elementary",
  },
  {
    day: "Saturday",
    time: "6:00 AM",
    ao: "Brozet",
    style: "Bootcamp",
    location: "Henley Middle School",
  },
  {
    day: "Saturday",
    time: "7:30 AM",
    ao: "The Bridge",
    style: "Bootcamp",
    location: "The Bridge",
  },
];

const locationLinks = {
  "McIntire Skate Park":
    "https://www.google.com/maps/dir/Skate+Park+Parking+Lot/38.0454722,-78.4770833/@38.0461274,-78.4790955,17z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x89b387536a6b1fc1:0xc37e1262438e9ccd!2m2!1d-78.4779845!2d38.047042!1m0!3e2?entry=ttu&g_ep=EgoyMDI0MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  "Ting Pavilion":
    "https://www.google.com/maps/place/Ting+Pavilion/@38.0292483,-78.4792507,17z/data=!3m1!4b1!4m6!3m5!1s0x89b386271b91c5bd:0x5a57b8a69f550594!8m2!3d38.0292483!4d-78.4766758!16s%2Fg%2F11b63fdztf?entry=tts&shorturl=1",
  "Hollymeade Elementary":
    "https://www.google.com/maps/place/Hollymead+Elementary+School/@38.1123927,-78.4419,17z/data=!3m1!4b1!4m6!3m5!1s0x89b477ae299786ef:0xc87e607eca4b5979!8m2!3d38.1123927!4d-78.4393251!16s%2Fm%2F0761kd1?entry=tts&shorturl=1",
  "Charlottesville High School Track":
    "https://www.google.com/maps/search/38.053023,+-78.477560?entry=tts&shorturl=1",
  "The Rotunda":
    "https://www.google.com/maps/place/The+Rotunda/@38.0355514,-78.5060009,17z/data=!3m1!4b1!4m6!3m5!1s0x89b38645c3e1a2f7:0x7c424e84bcb81680!8m2!3d38.0355514!4d-78.503426!16zL20vMDM3NnJz?entry=tts&shorturl=1",
  "Henley Middle School":
    "https://www.google.com/maps/place/Henley+Middle+School/@38.0522233,-78.7083119,651m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89b37ee3b044c157:0x1ae308633ca9432b!8m2!3d38.0522191!4d-78.705737!16s%2Fm%2F0761kd9?entry=tts&g_ep=EgoyMDI2MDIxMS4wIPu8ASoASAFQAw%3D%3D&skid=70a47e8a-3180-4eaa-8d17-ea3de4dc7cdf",
  "Booker T. Washington Park":
    "https://www.google.com/maps/search/38.041731,+-78.492054?entry=tts&shorturl=1",
  "PVCC":
    "https://www.google.com/maps/place/V.+Earl+Dickinson+Theater/@38.0052525,-78.4871154,18z/data=!4m6!3m5!1s0x89b38608f5f00001:0x18203478da2441fb!8m2!3d38.0053931!4d-78.4882095!16s%2Fg%2F11c52ynzj9?entry=tts&g_ep=EgoyMDI1MDMyNC4wIPu8ASoASAFQAw%3D%3D&skid=a4758395-f606-4fa2-8369-61aa13b6c675",
  "Ivy Elementary":
    "https://www.google.com/maps/place/Ivy+Elementary+School/@38.0812482,-78.6029415,17z/data=!3m1!4b1!4m6!3m5!1s0x89b380922bf81631:0x17b0801218a6b382!8m2!3d38.0812441!4d-78.5980706!16s%2Fm%2F076f1kh?entry=tts",
  "Ivy Elementary School":
    "https://www.google.com/maps/place/Ivy+Elementary+School/@38.0812482,-78.6029415,17z/data=!3m1!4b1!4m6!3m5!1s0x89b380922bf81631:0x17b0801218a6b382!8m2!3d38.0812441!4d-78.5980706!16s%2Fm%2F076f1kh?entry=tts",
  "Darden Towe":
    "https://www.google.com/maps/place/Darden+Towe+Park/@38.0422311,-78.4536407,16.97z/data=!4m6!3m5!1s0x89b3885f0771c4ed:0xbe8b7cceaa752287!8m2!3d38.0422139!4d-78.451038!16s%2Fg%2F1tgk1j6t?entry=tts&shorturl=1",
  "The Bridge":
    "https://www.google.com/maps/place/Bridge+Ministry/@37.0894801,-80.1422525,8.3z/data=!4m7!3m6!1s0x89b3a94b88a6ea8f:0x4d37776cf64de2b1!8m2!3d37.5136037!4d-78.5628912!15sChVUSGUgQnJpZGdlIG1pbmlzdHJpZXNaFyIVdGhlIGJyaWRnZSBtaW5pc3RyaWVzkgEaYWRkaWN0aW9uX3RyZWF0bWVudF9jZW50ZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUXROVXhtYlVWUkVBReABAA!16s%2Fg%2F1tf5fmql?entry=tts&shorturl=1",
  "Virginia L. Murray Elementary":
    "https://www.google.com/maps/place/Virginia+L.+Murray+Elementary+School/@38.058077,-78.6151385,17z/data=!3m1!4b1!4m6!3m5!1s0x89b38055339f6ab9:0xd153bcdfe70abebe!8m2!3d38.058077!4d-78.6125636!16s%2Fm%2F076bfxb?client=safari&sca_esv=558180114&rls=en&output=search&q=murray+elementary+school&source=lnms&sa=X&ved=2ahUKEwjH5vfaiOeAAxXSNlkFHephBhwQ0pQJegQIDBAB&entry=tts&shorturl=1",
};

const glossary = [
  {
    category: "Getting Started",
    term: "AO",
    definition:
      "Area of Operation. A location where the group meets to work out. You might hear, 'I post at the Northside AO.'",
  },
  {
    category: "Getting Started",
    term: "Beatdown",
    definition: "A workout. Just another name for a workout.",
  },
  {
    category: "Getting Started",
    term: "FNG",
    definition: "Friendly New Guy. The label for a man posting with F3 for the first time.",
  },
  {
    category: "Getting Started",
    term: "Gloom",
    definition:
      "Pre-dawn. Most people are asleep, but not us. 'See you in the gloom' is a common F3 sign-off.",
  },
  {
    category: "Getting Started",
    term: "Post",
    definition:
      "A verb meaning to show up for a workout. Example: 'Yeah, I posted at Northside last week.'",
  },
  {
    category: "Getting Started",
    term: "Q",
    definition:
      "The man leading the workout. He plans it, runs it, and owns the tone for the morning.",
  },
  {
    category: "Workout Terms",
    term: "Backblast",
    definition:
      "The workout summary the Q posts in Slack afterward, covering who was there, what was done, and any announcements or prayer requests.",
  },
  {
    category: "Workout Terms",
    term: "Coupon",
    definition:
      "A weighted object used to enhance a workout. Many guys use a cinderblock, but anything heavy and hold-able works.",
  },
  {
    category: "Workout Terms",
    term: "OYO",
    definition:
      "On your own. Scale the movement or pace to your current fitness level.",
  },
  {
    category: "Workout Terms",
    term: "Ruck",
    definition:
      "A workout where you carry a weighted backpack or another load while moving.",
  },
  {
    category: "Workout Terms",
    term: "Six",
    definition:
      "The back of the pack. 'Check your six' means do not leave a man behind.",
  },
  {
    category: "Workout Terms",
    term: "EC",
    definition:
      "Optional extra work before the official start time for men who want to get after it early.",
  },
  {
    category: "Community & Culture",
    term: "COT",
    definition:
      "Circle of Trust. The closing circle for announcements, prayer, and support.",
  },
  {
    category: "Community & Culture",
    term: "Downrange",
    definition:
      "Working out with an F3 group outside your home region, like posting in Seattle while visiting family there.",
  },
  {
    category: "Community & Culture",
    term: "Kotter",
    definition:
      "A man returning after time away from workouts. The name comes from the TV show 'Welcome Back, Kotter.'",
  },
  {
    category: "Community & Culture",
    term: "PAX",
    definition:
      "An F3 participant. In practice, it usually means any man who already has an F3 name.",
  },
  {
    category: "Community & Culture",
    term: "PLC",
    definition:
      "Parking Lot Coffee. Sticking around after the workout for fellowship, coffee, and conversation.",
  },
  {
    category: "Community & Culture",
    term: "T-claps",
    definition:
      "Thunderclaps, the standard F3 way to show appreciation for effort or leadership.",
  },
  {
    category: "Leadership & Commitment",
    term: "EH",
    definition:
      "Emotional Headlock. The process of talking with a guy and getting him to come to an F3 workout.",
  },
  {
    category: "Leadership & Commitment",
    term: "HC",
    definition:
      "Hard Commit. Committing to show up for a workout, usually by responding to a pre-blast with the HC emoji.",
  },
  {
    category: "Leadership & Commitment",
    term: "HIM",
    definition:
      "High Impact Man. A man embracing the F3 pillars and making a positive impact in his neighborhood.",
  },
  {
    category: "Leadership & Commitment",
    term: "OTB",
    definition:
      "Off the books. A workout that is not officially listed on the schedule page or F3 Nation map.",
  },
  {
    category: "Leadership & Commitment",
    term: "Respect",
    definition:
      "An age-based honorific for men age 50 and older.",
  },
  {
    category: "Leadership & Commitment",
    term: "Shield Lock",
    definition:
      "A smaller, consistent group of men committed to deeper accountability with one another.",
  },
  {
    category: "Comms & Logistics",
    term: "Slack",
    definition:
      "The app F3 Charlottesville uses to communicate, post announcements, and share backblasts. After your first workout and FNG form, you will get an invite.",
  },
];

const scheduleFiltersEl = document.getElementById("scheduleFilters");
const scheduleGridEl = document.getElementById("scheduleGrid");
const glossaryGridEl = document.getElementById("glossaryGrid");
const menuToggleEl = document.getElementById("menuToggle");
const siteNavEl = document.getElementById("siteNav");

const days = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let activeDay = "";

function createCardMarkup(workout) {
  const noteMarkup = workout.note ? `<p>${workout.note}</p>` : "";
  const mapLink = locationLinks[workout.location];
  const locationMarkup = mapLink
    ? `
      <p class="location">
        ${workout.location}
        <a href="${mapLink}" target="_blank" rel="noreferrer">See map</a>
      </p>
    `
    : `<p class="location">${workout.location}</p>`;

  return `
    <article class="schedule-card">
      <div class="schedule-meta">
        <span>${workout.day}</span>
        <span>${workout.time}</span>
      </div>
      <h3>${workout.ao}</h3>
      <p>${workout.style}</p>
      ${locationMarkup}
      ${noteMarkup}
    </article>
  `;
}

function renderSchedule() {
  if (!activeDay) {
    scheduleGridEl.innerHTML = `
      <div class="schedule-empty">
        Choose a day above to view the current workout schedule.
      </div>
    `;
    return;
  }

  const visibleWorkouts =
    activeDay === "All" ? workouts : workouts.filter((workout) => workout.day === activeDay);

  scheduleGridEl.innerHTML = visibleWorkouts.map(createCardMarkup).join("");
}

function renderFilters() {
  scheduleFiltersEl.innerHTML = days
    .map(
      (day) => `
        <button
          class="filter-chip"
          type="button"
          data-day="${day}"
          aria-pressed="${day === activeDay}"
        >
          ${day}
        </button>
      `
    )
    .join("");
}

function createGlossaryMarkup(entry) {
  return `
    <article class="glossary-card">
      <h3>${entry.term}</h3>
      <p>${entry.definition}</p>
    </article>
  `;
}

function renderGlossary() {
  const categoryOrder = [
    "Getting Started",
    "Workout Terms",
    "Community & Culture",
    "Leadership & Commitment",
    "Comms & Logistics",
  ];

  const glossaryByCategory = glossary.reduce((groups, entry) => {
    if (!groups[entry.category]) {
      groups[entry.category] = [];
    }

    groups[entry.category].push(entry);
    return groups;
  }, {});

  glossaryGridEl.innerHTML = categoryOrder
    .filter((category) => glossaryByCategory[category]?.length)
    .map((category) => {
      const entries = [...glossaryByCategory[category]].sort((left, right) =>
        left.term.localeCompare(right.term)
      );

      return `
        <section class="glossary-section">
          <div class="glossary-section-head">
            <p class="section-label">${category}</p>
          </div>
          <div class="glossary-term-grid">
            ${entries.map(createGlossaryMarkup).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function closeMenu() {
  menuToggleEl.setAttribute("aria-expanded", "false");
  siteNavEl.classList.remove("is-open");
}

if (scheduleFiltersEl && scheduleGridEl) {
  renderFilters();
  renderSchedule();

  scheduleFiltersEl.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-day]");

    if (!trigger) {
      return;
    }

    activeDay = activeDay === trigger.dataset.day ? "" : trigger.dataset.day;
    renderFilters();
    renderSchedule();
  });
}

if (glossaryGridEl) {
  renderGlossary();
}

if (menuToggleEl && siteNavEl) {
  menuToggleEl.addEventListener("click", () => {
    const isExpanded = menuToggleEl.getAttribute("aria-expanded") === "true";
    menuToggleEl.setAttribute("aria-expanded", String(!isExpanded));
    siteNavEl.classList.toggle("is-open", !isExpanded);
  });

  siteNavEl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}
