import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState } from "react"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const NotificationBanner = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <div
      style={{
        position: "fixed",
        top: "14px",
        left: "50%",
        transform: `translate(-50%, ${isVisible ? "0" : "-20px"}) scale(${isVisible ? "1" : "0.95"})`,
        zIndex: 10000,
        background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
        backdropFilter: "blur(8px)",
        borderRadius: "10px",
        boxShadow: "0 2px 16px rgba(37, 99, 235, 0.25), 0 1px 2px rgba(37, 99, 235, 0.15)",
        padding: "8px",
        width: "280px",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "9px",
          padding: "2px"
        }}>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            width: "28px",
            height: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transform: isHovered ? "scale(1.05) rotate(8deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "white"
          }}>
          <SearchIcon />
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontWeight: 500,
              fontSize: "13.5px",
              color: "white",
              letterSpacing: "-0.01em",
              lineHeight: "1.4"
            }}>
            Address detected on this page
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationBanner
