import './index.css'

const TabItem = props => {
  const {eachTab, activeTabButton, activeTabId} = props
  const {tabId, displayText} = eachTab
  const tabItemClicked = () => {
    activeTabButton(tabId)
  }
  const isActive = tabId === activeTabId

  const btnClass = isActive ? 'btn-border-class' : ''
  return (
    <li>
      <button
        className={`btn-tab ${btnClass}`}
        onClick={tabItemClicked}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
