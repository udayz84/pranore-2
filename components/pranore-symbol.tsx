/**
 * The supplied PRANORE symbol ("Pranore Symbol-03.svg") rendered inline.
 * Mark lightened to a flowing gold: a vertical gradient (light champagne at
 * the top into deeper gold at the bottom) with a slow shimmer sweeping
 * through it. Asset copy at /images/pranore/pranore-symbol.svg.
 */
export function PranoreSymbol({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 595.28 485.71"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <defs>
        <linearGradient id="pranore-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EDD8AD" />
          <stop offset="50%" stopColor="#C8A875" />
          <stop offset="100%" stopColor="#BC935F" />
          <animateTransform
            attributeName="gradientTransform"
            type="translate"
            values="0 -0.22; 0 0.22; 0 -0.22"
            dur="3.8s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      <path
        fill="url(#pranore-gold)"
        d="M553.76,451.62H41.52V110.43h45.63V34.09h466.62v417.53ZM87.14,405.99h420.99V79.72H132.77v76.34h-45.63v249.94Z"
      />
      <path
        fill="url(#pranore-gold)"
        d="M439.69,148.16v36.34h-184v42.17h184v33.7h-229.63v40.85h229.63v36.33H155.58v-113.05h45.63v-76.34h238.48Z"
      />
    </svg>
  );
}
