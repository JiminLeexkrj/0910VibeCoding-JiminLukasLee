import profile from "@/data/profile.json";

const BARCODE_PATTERN = [2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1, 3, 1, 2, 2, 1, 3];

export default function Home() {
  const [firstName, ...restName] = profile.name.en.split(" ");
  const initials = `${firstName[0]}${restName[restName.length - 1]?.[0] ?? ""}`;

  return (
    <div className="flex flex-1 items-center justify-center bg-neutral-950 px-3 py-8 sm:px-6 sm:py-12">
      <div className="relative w-full max-w-3xl border-[3px] border-white/90 bg-neutral-950 p-4 text-white sm:p-8">
        {/* Special issue badge */}
        <div className="absolute -right-2 -top-3 z-10 flex h-16 w-16 rotate-12 flex-col items-center justify-center rounded-full bg-yellow-400 text-center text-[9px] font-black uppercase leading-tight text-black shadow-lg sm:-right-4 sm:-top-4 sm:h-20 sm:w-20 sm:text-[10px]">
          <span>Special</span>
          <span>Intro</span>
          <span>Issue</span>
        </div>

        {/* Top strip */}
        <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/70 sm:text-xs">
          <span>Vol. 01 &middot; Sep 2026</span>
          <span>Korea University Edition</span>
        </div>

        {/* Masthead */}
        <h1
          className="text-center font-[family-name:var(--font-bebas)] text-[20vw] leading-[0.82] tracking-tight text-red-600 sm:text-8xl md:text-9xl"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
        >
          {firstName.toUpperCase()}
        </h1>
        <p className="mt-1 text-center text-sm uppercase tracking-[0.35em] text-white/80 sm:text-base">
          {restName.join(" ")} &middot; {profile.name.kr}
        </p>

        {/* Deck / tagline */}
        <p className="mt-4 text-center text-sm font-semibold uppercase tracking-wide text-yellow-400 sm:text-base">
          {profile.university} &mdash; {profile.department}
        </p>

        {/* Cover lines + hero medallion */}
        <div className="mt-8 grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
          <ul className="space-y-3 text-center sm:text-left">
            {profile.projects.map((project) => (
              <li
                key={project.title}
                className="text-xs font-bold uppercase leading-tight sm:text-sm"
              >
                <span className="text-red-500">Inside &rarr;</span>{" "}
                {project.title}{" "}
                <span className="font-normal normal-case text-white/50">
                  ({project.year})
                </span>
              </li>
            ))}
          </ul>

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 text-5xl font-black text-black shadow-[6px_6px_0_0_rgba(255,255,255,0.12)] sm:h-36 sm:w-36 sm:text-6xl">
            {initials.toUpperCase()}
          </div>

          <ul className="space-y-3 text-center sm:text-right">
            {profile.interests.length > 0 ? (
              <li className="text-xs font-bold uppercase leading-tight sm:text-sm">
                <span className="text-red-500">Plus &rarr;</span>{" "}
                {profile.interests.join(", ")}
              </li>
            ) : (
              <li className="text-xs font-bold uppercase italic leading-tight text-white/50 sm:text-sm">
                Coming next issue: interests &amp; hobbies
              </li>
            )}
            <li className="text-xs font-bold uppercase leading-tight sm:text-sm">
              <span className="text-red-500">Hotline &rarr;</span>{" "}
              {profile.contact.phone}
            </li>
          </ul>
        </div>

        {/* Footer: barcode + links */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/30 pt-4 sm:flex-row">
          <div className="flex items-end gap-[2px]" aria-hidden>
            {BARCODE_PATTERN.map((w, i) => (
              <span
                key={i}
                className="bg-white"
                style={{ width: `${w}px`, height: i % 3 === 0 ? "28px" : "20px" }}
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.url.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="rounded-full border border-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
