const crewStack = [
  {
    name: 'Friday sprint',
    status: '4 confirmed, 2 pending',
    detail: 'Venue shortlist is down to two spots within a 12-minute walk.',
  },
  {
    name: 'After-work dinner',
    status: 'Needs headcount',
    detail: 'Dietary notes are in, but the booking window closes at 5:30 PM.',
  },
  {
    name: 'Sunday reset',
    status: 'Ready to share',
    detail: 'Groceries, gym pairings, and cleanup coverage are already assigned.',
  },
];

const boardLanes = [
  {
    title: 'Locked',
    items: [
      'Arrival target is set for 7:15 PM.',
      'Rain backup is already approved.',
      'Playlist voting closes at 5:00 PM.',
    ],
  },
  {
    title: 'Open questions',
    items: [
      'Keep everyone in Williamsburg or move closer to the train?',
      'Who is bringing the speaker and backup charger?',
      'Do we split into dinner and after-party groups?',
    ],
  },
  {
    title: 'Next signals',
    items: [
      'Ride pairing starts once the venue is final.',
      'Waitlist opens if two more people join.',
      'Parking notes go out with the final lock message.',
    ],
  },
];

const activityRail = [
  'Maya moved four maybes into confirmed and reopened seating.',
  'Jon attached a live travel-time shortlist for the final vote.',
  'Nia proposed a 7:40 PM regroup window for late arrivals.',
];

export function DesktopSurface() {
  return (
    <main className="shell surface-shell">
      <section className="surface-hero">
        <p className="eyebrow">Desktop surface</p>
        <h1>Computer-friendly planning for bigger canvases.</h1>
        <p className="lede">
          This route is the first step toward a browser experience that feels
          native to laptops instead of a stretched phone mock.
        </p>
      </section>

      <section className="surface-grid" aria-label="Desktop planning layout">
        <aside className="surface-panel surface-panel--rail">
          <p className="card-kicker">Crew stack</p>
          <h2>What is heating up right now.</h2>
          <div className="surface-board">
            {crewStack.map((item) => (
              <article className="surface-card" key={item.name}>
                <h3>{item.name}</h3>
                <p className="surface-meta">{item.status}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </aside>

        <section className="surface-panel surface-panel--board">
          <p className="card-kicker">Plan board</p>
          <h2>Friday sprint</h2>
          <div className="surface-lanes">
            {boardLanes.map((lane) => (
              <article className="surface-card" key={lane.title}>
                <h3>{lane.title}</h3>
                <ul className="surface-list">
                  {lane.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <aside className="surface-panel surface-panel--activity">
          <p className="card-kicker">Activity rail</p>
          <h2>Fresh movement without the scroll hunt.</h2>
          <ul className="surface-list">
            {activityRail.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
