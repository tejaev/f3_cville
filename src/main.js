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
    location: "UVA",
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
    term: "Slaughter Starter",
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
  return `
    <article class="schedule-card">
      <div class="schedule-meta">
        <span>${workout.day}</span>
        <span>${workout.time}</span>
      </div>
      <h3>${workout.ao}</h3>
      <p>${workout.style}</p>
      <p class="location">${workout.location}</p>
      <p>${workout.note}</p>
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
