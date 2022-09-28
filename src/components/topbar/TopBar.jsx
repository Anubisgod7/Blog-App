import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft"></div>
        <div className="topCenter">
          <ul className="toplist">
            <li className="toplistitem">Home</li>
            <li className="toplistitem">About</li>
            <li className="toplistitem">Contact</li>
            <li className="toplistitem">Write</li>
          </ul>
        </div>
        <div className="topRight"></div>
        </div>
  )
}
