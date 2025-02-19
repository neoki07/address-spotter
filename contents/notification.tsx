import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo"
import { useEffect, useState } from "react"
import { scanForAddresses } from "~utils/page-scanner"
import styleText from "data-text:./notification.module.css"
import * as styles from "./notification.module.css"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
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

const CloseIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 3l8 8M3 11l8-8"
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
    const addresses = scanForAddresses()
    setIsVisible(addresses.length > 0)
  }, [])

  if (!isVisible) {
    return null
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <div
      className={styles.banner}
      data-visible={isVisible}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className={styles.container}>
        <div className={styles.iconWrapper} data-hovered={isHovered}>
          <SearchIcon />
        </div>
        <div className={styles.content}>
          <div className={styles.text}>このページに住所が見つかりました。</div>
        </div>
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="通知を閉じる">
          <CloseIcon />
        </button>
      </div>
    </div>
  )
}

export default NotificationBanner
