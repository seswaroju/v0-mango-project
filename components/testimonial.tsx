interface TestimonialProps {
  quote: string
  author: string
  location?: string
}

export function Testimonial({ quote, author, location }: TestimonialProps) {
  return (
    <div className="premium-card p-6">
      <div className="mb-4 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-mango-500"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
      <p className="mb-4 text-sm italic leading-relaxed text-muted-foreground">"{quote}"</p>
      <div>
        <p className="font-medium text-mango-800">{author}</p>
        {location && <p className="text-xs text-muted-foreground">{location}</p>}
      </div>
    </div>
  )
}
