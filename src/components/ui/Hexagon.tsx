interface HexagonProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
  filled?: boolean;
}

/** Hexágono (mesma orientação do ícone do logo: pontas nas laterais). */
export function Hexagon({ size = 120, className, strokeWidth = 1, filled = false }: HexagonProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 0.878}
      viewBox="0 0 100 87.8"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M25.6 1.5h48.8L98.3 43.9 74.4 86.3H25.6L1.7 43.9z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
        fill={filled ? 'currentColor' : 'none'}
      />
    </svg>
  );
}
