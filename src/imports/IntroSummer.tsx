function Sun() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%+719.5px)] size-[987px] top-[-419px]" data-name="Sun">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 987 987">
        <g id="Sun">
          <g id="Ellipse 2">
            <circle cx="503.74" cy="493.5" fill="var(--fill-0, #FF971D)" fillOpacity="0.6" r="428.12" style={{ mixBlendMode: "hard-light" }} />
          </g>
          <g id="Ellipse 3">
            <circle cx="493.5" cy="493.5" fill="url(#paint0_radial_1_186)" fillOpacity="0.6" r="493.5" style={{ mixBlendMode: "hard-light" }} />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(493.5 493.5) rotate(90) scale(493.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_186" r="1">
            <stop offset="0.875" stopColor="#FF8A00" />
            <stop offset="1" stopColor="#FF971D" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function IntroSummer() {
  return (
    <div className="bg-gradient-to-b from-[8.651%] from-white relative size-full to-[rgba(255,255,255,0)]" data-name="Intro - Summer">
      <div className="absolute bg-[#a0b9fa] h-[1024px] left-0 top-0 w-[1440px]" data-name="Sky" />
      <div className="absolute font-['Inika:Regular',sans-serif] h-[134px] leading-[normal] left-[581px] not-italic text-[48px] text-black top-[257px] w-[278px] whitespace-pre-wrap">
        <p className="mb-0">Hi,</p>
        <p>I’m Bennett</p>
      </div>
      <Sun />
    </div>
  );
}