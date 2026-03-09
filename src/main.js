const workouts = [
  {
    day: "Monday",
    time: "5:15 AM",
    ao: "The Anvil",
    style: "Ruck / run / bootcamp rotation",
    location: "Darden Towe Park, front parking lot",
    note: "Monthly Murph on the second Monday.",
  },
  {
    day: "Monday",
    time: "5:30 AM",
    ao: "The Goonies",
    style: "Bootcamp",
    location: "Crozet Park, by the basketball courts",
    note: "Fast-moving full-body work in Crozet.",
  },
  {
    day: "Tuesday",
    time: "5:15 AM",
    ao: "The Boondocks",
    style: "Bootcamp",
    location: "Greencroft Club parking lot",
    note: "Southwest Charlottesville gloom.",
  },
  {
    day: "Tuesday",
    time: "5:30 AM",
    ao: "The Depot",
    style: "Bootcamp / run option",
    location: "Crozet Library parking lot",
    note: "Mix of pavement and bodyweight work.",
  },
  {
    day: "Tuesday",
    time: "5:30 AM",
    ao: "The Sandlot",
    style: "Bootcamp",
    location: "Darden Towe Park, by the baseball fields",
    note: "Wide-open field work and carries.",
  },
  {
    day: "Tuesday",
    time: "5:30 AM",
    ao: "The Streak",
    style: "Run",
    location: "Mad Bowl lot at UVA",
    note: "Dedicated running workout.",
  },
  {
    day: "Tuesday",
    time: "6:00 PM",
    ao: "The High Ground",
    style: "Run / hill repeats",
    location: "PVCC North Lot by the disc golf tee",
    note: "Evening option with elevation.",
  },
  {
    day: "Wednesday",
    time: "5:15 AM",
    ao: "The Cinder",
    style: "Ruck",
    location: "Rivanna Rowing parking lot",
    note: "Midweek ruck with conversation baked in.",
  },
  {
    day: "Wednesday",
    time: "5:30 AM",
    ao: "The Fighting Racoons",
    style: "Bootcamp",
    location: "Ruckersville Elementary track",
    note: "Greene County work under the lights.",
  },
  {
    day: "Wednesday",
    time: "5:30 AM",
    ao: "Mile High",
    style: "Bootcamp",
    location: "Murray Elementary bus loop",
    note: "Neighborhood beatdown in the city.",
  },
  {
    day: "Thursday",
    time: "5:15 AM",
    ao: "The Boondocks",
    style: "Bootcamp",
    location: "Greencroft Club parking lot",
    note: "Same AO, new Q, different hurt.",
  },
  {
    day: "Thursday",
    time: "5:30 AM",
    ao: "The Goonies",
    style: "Bootcamp",
    location: "Crozet Park, by the basketball courts",
    note: "Crozet repeat with a fresh plan.",
  },
  {
    day: "Thursday",
    time: "5:30 AM",
    ao: "The Sandlot",
    style: "Bootcamp",
    location: "Darden Towe Park, by the baseball fields",
    note: "Strong turnout, plenty of room to scale.",
  },
  {
    day: "Thursday",
    time: "5:30 AM",
    ao: "The Streak",
    style: "Run",
    location: "Mad Bowl lot at UVA",
    note: "Pace groups and route options.",
  },
  {
    day: "Friday",
    time: "5:15 AM",
    ao: "The Anvil",
    style: "Bootcamp / grinder",
    location: "Darden Towe Park, front parking lot",
    note: "Close the work week under load.",
  },
  {
    day: "Friday",
    time: "5:30 AM",
    ao: "The Fighting Racoons",
    style: "Bootcamp",
    location: "Ruckersville Elementary track",
    note: "Greene County Friday option.",
  },
  {
    day: "Friday",
    time: "5:30 AM",
    ao: "The Rail Yard",
    style: "Bootcamp / run mix",
    location: "Crozet Library parking lot",
    note: "Crozet finisher before the weekend.",
  },
  {
    day: "Friday",
    time: "5:30 AM",
    ao: "Mile High",
    style: "Bootcamp",
    location: "Murray Elementary bus loop",
    note: "City workout with solid post-work coffee odds.",
  },
  {
    day: "Saturday",
    time: "7:00 AM",
    ao: "The Sandlot",
    style: "Bootcamp",
    location: "Darden Towe Park, by the baseball fields",
    note: "Weekend standard issue beatdown.",
  },
  {
    day: "Saturday",
    time: "7:00 AM",
    ao: "The Wolfpack",
    style: "Ruck / bootcamp rotation",
    location: "Crozet Park, by the basketball courts",
    note: "Crozet weekend post.",
  },
  {
    day: "Saturday",
    time: "7:30 AM",
    ao: "The High Ground",
    style: "Run",
    location: "PVCC North Lot by the disc golf tee",
    note: "Longer weekend miles available.",
  },
];

const glossary = [
  {
    term: "AO",
    definition: "Area of Operations, which is just the F3 name for a workout site.",
  },
  {
    term: "COT",
    definition: "Circle of Trust. The closing circle for announcements, prayer, and support.",
  },
  {
    term: "Downrange",
    definition: "Posting with another F3 region while traveling.",
  },
  {
    term: "EH",
    definition: "An EH, or Endorsement, is an invitation to bring another man to a workout.",
  },
  {
    term: "FNG",
    definition: "Friendly New Guy. The man posting with F3 for the first time.",
  },
  {
    term: "Kotter",
    definition: "A man returning after time away from the workouts.",
  },
  {
    term: "M",
    definition: "Your wife. F3 shorthand for the most important woman in your life.",
  },
  {
    term: "OYO",
    definition: "On your own. Scale the movement or pace to your current fitness level.",
  },
  {
    term: "PAX",
    definition: "The men of F3, taken from a term for a peaceful society.",
  },
  {
    term: "Q",
    definition: "The man leading the workout. He plans it, runs it, and owns the tone.",
  },
  {
    term: "Respect",
    definition: "An age-based honorific for men age 50 and older.",
  },
  {
    term: "Shield Lock",
    definition: "A small, consistent group of men committed to deeper accountability.",
  },
  {
    term: "Six",
    definition: "The back of the pack. Check your six means do not leave a man behind.",
  },
  {
    term: "Slaughter Starter",
    definition: "Optional extra work before the official start time for early arrivals.",
  },
  {
    term: "T-claps",
    definition: "Thunderclaps, the standard F3 way to show appreciation.",
  },
];

const scheduleFiltersEl = document.getElementById("scheduleFilters");
const scheduleGridEl = document.getElementById("scheduleGrid");
const glossaryGridEl = document.getElementById("glossaryGrid");
const glossarySearchEl = document.getElementById("glossarySearch");
const menuToggleEl = document.getElementById("menuToggle");
const siteNavEl = document.getElementById("siteNav");

const days = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let activeDay = "All";

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

function renderGlossary(searchTerm = "") {
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const visibleTerms = glossary.filter((entry) => {
    if (!normalizedSearch) {
      return true;
    }

    return (
      entry.term.toLowerCase().includes(normalizedSearch) ||
      entry.definition.toLowerCase().includes(normalizedSearch)
    );
  });

  glossaryGridEl.innerHTML = visibleTerms.map(createGlossaryMarkup).join("");
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

    activeDay = trigger.dataset.day;
    renderFilters();
    renderSchedule();
  });
}

if (glossaryGridEl) {
  renderGlossary();
}

if (glossarySearchEl) {
  glossarySearchEl.addEventListener("input", (event) => {
    renderGlossary(event.target.value);
  });
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
