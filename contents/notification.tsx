import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState } from "react"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

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
        top: "16px",
        left: "50%",
        transform: `translate(-50%, ${isVisible ? "0" : "-20px"}) scale(${isVisible ? "1" : "0.95"})`,
        zIndex: 10000,
        backgroundColor: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(8px)",
        borderRadius: "12px",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)",
        padding: "10px",
        width: "300px",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "2px"
        }}>
        <div
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
            borderRadius: "10px",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transform: isHovered ? "scale(1.05) rotate(8deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: isHovered
              ? "0 4px 12px rgba(37, 99, 235, 0.3)"
              : "0 2px 8px rgba(37, 99, 235, 0.2)"
          }}>
          <span style={{ fontSize: "20px" }}>🔍</span>
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "14px",
              color: "#1f2937",
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
