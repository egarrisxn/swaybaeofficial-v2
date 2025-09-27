interface SectionDividerProps {
  className: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div className='mx-auto h-28 w-full max-w-13xl overflow-hidden xs:h-32'>
      <svg
        viewBox='0 0 1200 200'
        preserveAspectRatio='none'
        className='size-full'
      >
        <path
          d='
            M0,100
            C300,0 900,200 1200,100
          '
          fill='none'
          strokeWidth={3}
          className={className}
        />
      </svg>
    </div>
  );
}
