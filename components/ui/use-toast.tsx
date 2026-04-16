export const toast = ({ title, description }: { title?: string; description?: string }) => {
  const toastElement = document.createElement("div")
  toastElement.style.cssText = `
    position: fixed;
    top: 1.25rem;
    right: 1.25rem;
    z-index: 9999;
    padding: 1rem 1.25rem;
    max-width: 360px;
    border-radius: 0.875rem;
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    opacity: 1;
    transition: opacity 0.3s ease;
  `
  toastElement.innerHTML = `
    <div style="font-weight: 600; font-size: 0.875rem; color: #ffffff; margin-bottom: 0.25rem;">${title ?? ""}</div>
    <div style="font-size: 0.8125rem; color: rgba(148,163,184,1);">${description ?? ""}</div>
  `
  document.body.appendChild(toastElement)

  setTimeout(() => {
    toastElement.style.opacity = "0"
    setTimeout(() => {
      if (document.body.contains(toastElement)) document.body.removeChild(toastElement)
    }, 300)
  }, 3000)
}
