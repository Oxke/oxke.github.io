import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  width?: string;
  className?: string;
}

export default function LazyImage({
  src,
  alt,
  width = "100%",
  className,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          aspectRatio: "16 / 9",
          background: "var(--cmd-bg-color, #e2f3eb4a)",
          borderRadius: "4px",
          opacity: loaded ? 0 : 1,
          transition: "opacity 0.4s ease",
          position: loaded ? "absolute" : "relative",
          inset: 0,
        }}
      >
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".3" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="0.8s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      </div>
      <img
        src={src}
        alt={alt}
        width={width}
        className={className}
        onLoad={() => setLoaded(true)}
        style={{
          display: "block",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />
    </div>
  );
}
