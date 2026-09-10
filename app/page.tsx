import profile from "@/data/profile.json";

export default function Home() {
  const [firstName, ...restName] = profile.name.en.split(" ");
  const initials = `${firstName[0]}${restName[restName.length - 1]?.[0] ?? ""}`;
  const interestsLine =
    profile.interests.length > 0 ? profile.interests.join(" · ") : "다음 호에 공개";

  return (
    <div className="relative flex-1 overflow-hidden bg-[#060d09] font-sans text-[#f4f1e4]">
      {/* Layered forest-canopy background */}
      <div
        className="pointer-events-none absolute -inset-[6%]"
        style={{
          background:
            "radial-gradient(70% 55% at 62% 8%, #9fbf7a 0%, #4d6b3f 22%, #23361f 48%, #0b140d 78%, #060d09 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-55"
        style={{
          background:
            "repeating-linear-gradient(93deg, rgba(4,10,6,0.92) 0 14px, rgba(4,10,6,0) 14px 78px), repeating-linear-gradient(87deg, rgba(6,14,9,0.75) 0 26px, rgba(6,14,9,0) 26px 150px)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 blur-[1.5px]"
        style={{
          background:
            "repeating-linear-gradient(97deg, rgba(2,7,4,0.55) 0 40px, rgba(2,7,4,0) 40px 230px)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,13,9,0.35) 0%, rgba(6,13,9,0.05) 30%, rgba(6,13,9,0.55) 72%, #060d09 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        style={{
          background:
            "radial-gradient(58% 42% at 60% 6%, rgba(226,240,196,0.34) 0%, rgba(226,240,196,0) 62%)",
          animation: "drift 34s ease-in-out infinite alternate",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 220px 60px rgba(3,8,5,0.85)" }}
      />

      {/* Content */}
      <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-5 py-8 sm:gap-8 sm:px-10 sm:py-12">
        {/* Top strip */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#cfe3c8]/30 pb-3 text-xs uppercase tracking-[0.22em] text-[#f4f1e4]/80">
          <span>Vol. 01 &middot; Sep 2026</span>
          <span className="text-[#c8de9c]">Korea University Edition</span>
          <span className="font-[family-name:var(--font-bebas)] text-sm tracking-[0.12em] text-[#f4f1e4]">
            Special Intro Issue
          </span>
        </div>

        {/* Masthead */}
        <div className="flex flex-col gap-1.5">
          <div
            className="font-[family-name:var(--font-bebas)] text-[20vw] leading-[0.82] tracking-tight text-[#f4f1e4] sm:text-[160px] md:text-[220px]"
            style={{ textShadow: "0 18px 60px rgba(3,10,5,0.6)" }}
          >
            {firstName.toUpperCase()}
          </div>
          <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
            <span className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide text-[#c8de9c] sm:text-5xl">
              {restName.join(" ").toUpperCase()} &middot; {profile.name.kr}
            </span>
            <span className="text-xs uppercase tracking-[0.24em] text-[#f4f1e4]/72">
              {profile.university} &mdash; {profile.department}
            </span>
          </div>
        </div>

        {/* Cover lines + medallion */}
        <div className="grid grid-cols-1 items-start gap-8 pt-2 sm:grid-cols-[1fr_auto_1fr] sm:gap-10">
          <div className="flex flex-col gap-4">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#c8de9c]">
              Inside
            </div>
            {profile.projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col gap-1 border-b border-[#cfe3c8]/18 pb-3.5"
              >
                <div className="font-[family-name:var(--font-bebas)] text-2xl leading-tight tracking-wide sm:text-3xl">
                  {project.title}
                </div>
                <div className="text-[11px] tracking-[0.2em] text-[#f4f1e4]/60">
                  {project.year}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center py-2">
            <div
              className="grid aspect-square w-[min(78%,250px)] place-items-center rounded-full"
              style={{
                background:
                  "radial-gradient(120% 120% at 30% 20%, #e6f0bf 0%, #a9c877 30%, #3f6236 66%, #16261a 100%)",
                boxShadow:
                  "0 30px 80px rgba(4,12,6,0.65), inset 0 0 0 1px rgba(244,241,228,0.35)",
              }}
            >
              <span className="font-[family-name:var(--font-bebas)] text-6xl tracking-wide text-[#0a1a0e] sm:text-8xl">
                {initials.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[#c8de9c]">
                Plus
              </div>
              <div className="text-base leading-relaxed text-[#f4f1e4]/92">
                {interestsLine}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[11px] uppercase tracking-[0.3em] text-[#c8de9c]">
                Hotline
              </div>
              <div className="font-[family-name:var(--font-bebas)] text-3xl tracking-wide">
                {profile.contact.phone}
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
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
                  className="rounded-full border border-[#cfe3c8]/50 px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors hover:border-[#c8de9c] hover:bg-[#c8de9c] hover:text-[#0a1a0e]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer barcode */}
        <div className="mt-3 flex flex-wrap items-end justify-between gap-5 border-t border-[#cfe3c8]/30 pt-4 sm:mt-6">
          <div
            className="h-[46px] flex-[0_1_220px] opacity-85"
            style={{
              background:
                "repeating-linear-gradient(90deg, #f4f1e4 0 2px, transparent 2px 4px, #f4f1e4 4px 7px, transparent 7px 11px, #f4f1e4 11px 12px, transparent 12px 16px)",
            }}
          />
          <div className="text-[11px] uppercase tracking-[0.24em] text-[#f4f1e4]/60">
            Printed in the forest &middot; No. 0910
          </div>
        </div>
      </div>
    </div>
  );
}
