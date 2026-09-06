export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 600 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-2xl"
      aria-hidden="true"
    >
      {/* Court surface */}
      <g opacity="0.08">
        <rect x="100" y="160" width="400" height="300" rx="8" fill="white" />
        <line x1="100" y1="310" x2="500" y2="310" stroke="white" strokeWidth="3" />
        <line x1="300" y1="160" x2="300" y2="460" stroke="white" strokeWidth="2" />
        <rect x="200" y="250" width="200" height="120" rx="4" stroke="white" strokeWidth="2" strokeDasharray="8 5" fill="none" />
      </g>

      {/* Player - athletic forehand swing */}
      <g transform="translate(180, 50)" opacity="0.95">
        {/* Head */}
        <circle cx="130" cy="45" r="26" fill="white" />
        {/* Headband */}
        <path d="M106 40 Q130 30 154 40" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" />

        {/* Torso - leaning forward */}
        <path d="M130 71 L145 170" stroke="white" strokeWidth="10" strokeLinecap="round" />

        {/* Left arm - back for balance */}
        <path d="M135 95 L80 110 L50 135" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        {/* Left hand open */}
        <circle cx="48" cy="137" r="6" fill="white" opacity="0.8" />

        {/* Right arm - extended forward in swing */}
        <path d="M138 95 L195 65 L240 35" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />

        {/* Paddle */}
        <g transform="translate(240, 20) rotate(-25)">
          {/* Handle */}
          <rect x="-4" y="12" width="8" height="22" rx="3" fill="#D97706" />
          {/* Face */}
          <ellipse cx="0" cy="-4" rx="26" ry="20" fill="#F59E0B" />
          {/* Edge guard */}
          <ellipse cx="0" cy="-4" rx="26" ry="20" stroke="#D97706" strokeWidth="2" fill="none" />
          {/* Surface texture */}
          <line x1="-12" y1="-8" x2="12" y2="-8" stroke="#EAB308" strokeWidth="1" opacity="0.5" />
          <line x1="-15" y1="-2" x2="15" y2="-2" stroke="#EAB308" strokeWidth="1" opacity="0.5" />
          <line x1="-12" y1="4" x2="12" y2="4" stroke="#EAB308" strokeWidth="1" opacity="0.5" />
        </g>

        {/* Right hand gripping */}
        <circle cx="238" cy="36" r="7" fill="white" opacity="0.9" />

        {/* Shorts */}
        <path d="M138 158 L125 200 M138 158 L160 195" stroke="white" strokeWidth="12" strokeLinecap="round" />
        {/* Shorts bottom edge */}
        <path d="M122 168 Q140 175 163 168" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />

        {/* Left leg - back, pushing off */}
        <path d="M125 200 L95 280 L75 340" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        {/* Left shoe */}
        <path d="M75 340 L55 345 L53 340 L72 335" fill="white" opacity="0.85" />
        <path d="M56 345 L75 340" stroke="#F59E0B" strokeWidth="2" />

        {/* Right leg - lunging forward */}
        <path d="M160 195 L190 270 L210 330" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        {/* Right shoe */}
        <path d="M210 330 L232 335 L234 330 L213 325" fill="white" opacity="0.85" />
        <path d="M232 335 L210 330" stroke="#F59E0B" strokeWidth="2" />
      </g>

      {/* Pickleball - just hit, flying off paddle */}
      <g>
        {/* Ball shadow / glow */}
        <circle cx="470" cy="95" r="22" fill="#F59E0B" opacity="0.15" />
        {/* Ball */}
        <circle cx="470" cy="95" r="16" fill="#F59E0B" />
        <circle cx="470" cy="95" r="16" stroke="#EAB308" strokeWidth="1.5" fill="none" />
        {/* Holes */}
        <circle cx="464" cy="89" r="2.5" fill="#D97706" />
        <circle cx="476" cy="89" r="2.5" fill="#D97706" />
        <circle cx="470" cy="100" r="2.5" fill="#D97706" />
        <circle cx="460" cy="97" r="2" fill="#D97706" />
        <circle cx="480" cy="97" r="2" fill="#D97706" />
        <circle cx="470" cy="85" r="2" fill="#D97706" />
        <circle cx="464" cy="104" r="1.5" fill="#D97706" />
        <circle cx="477" cy="104" r="1.5" fill="#D97706" />

        {/* Speed lines */}
        <line x1="492" y1="82" x2="530" y2="72" stroke="#FDE68A" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        <line x1="490" y1="95" x2="535" y2="90" stroke="#FDE68A" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        <line x1="492" y1="108" x2="525" y2="112" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      </g>

      {/* Impact starburst */}
      <g opacity="0.6">
        <line x1="445" y1="60" x2="438" y2="42" stroke="#FDE68A" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="460" y1="55" x2="465" y2="38" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />
        <line x1="500" y1="72" x2="518" y2="58" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />
        <line x1="498" y1="118" x2="512" y2="132" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />
        <line x1="450" y1="120" x2="440" y2="136" stroke="#FDE68A" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Decorative floating pickleballs */}
      <g opacity="0.15">
        <circle cx="70" cy="420" r="24" fill="white" />
        <circle cx="65" cy="414" r="3" fill="rgba(0,0,0,0.15)" />
        <circle cx="77" cy="414" r="3" fill="rgba(0,0,0,0.15)" />
        <circle cx="70" cy="427" r="3" fill="rgba(0,0,0,0.15)" />
      </g>
      <g opacity="0.1">
        <circle cx="540" cy="380" r="32" fill="white" />
        <circle cx="533" cy="372" r="3.5" fill="rgba(0,0,0,0.12)" />
        <circle cx="549" cy="372" r="3.5" fill="rgba(0,0,0,0.12)" />
        <circle cx="540" cy="390" r="3.5" fill="rgba(0,0,0,0.12)" />
      </g>
      <g opacity="0.07">
        <circle cx="520" cy="200" r="18" fill="white" />
      </g>

      {/* Net posts */}
      <g opacity="0.12" stroke="white" strokeWidth="2.5" strokeLinecap="round">
        <line x1="90" y1="290" x2="90" y2="320" />
        <line x1="510" y1="290" x2="510" y2="320" />
        <line x1="90" y1="305" x2="510" y2="305" />
        {/* Net mesh suggestion */}
        <g strokeWidth="0.8" opacity="0.5">
          <line x1="150" y1="295" x2="150" y2="315" />
          <line x1="210" y1="295" x2="210" y2="315" />
          <line x1="270" y1="295" x2="270" y2="315" />
          <line x1="330" y1="295" x2="330" y2="315" />
          <line x1="390" y1="295" x2="390" y2="315" />
          <line x1="450" y1="295" x2="450" y2="315" />
        </g>
      </g>

      {/* Motion arc from paddle */}
      <path d="M430 55 Q450 40 470 80" stroke="rgba(253,230,138,0.3)" strokeWidth="2" strokeDasharray="4 3" fill="none" />
    </svg>
  );
}
