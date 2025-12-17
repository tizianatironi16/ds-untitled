import './App.css'

// Components follow the structure and naming from the Figma design

function StatusBarIPhone() {
  return (
    <div className="status-bar" data-name="StatusBar / iPhone 13">
      <div className="status-time">9:41</div>
      <div className="status-right" />
    </div>
  )
}

function HeaderTitle() {
  return (
    <div className="header-title" data-name="Header title">
      Main
    </div>
  )
}

function BaseIconsChevronLeft() {
  return (
    <button
      className="icon-button"
      aria-label="Back"
      data-name="Base icons/chevron-left"
    >
      ‹
    </button>
  )
}

function BaseIconsChevronRight() {
  return (
    <button
      className="icon-button"
      aria-label="Forward"
      data-name="Base icons/chevron-right"
    >
      ›
    </button>
  )
}

function HeaderMobile() {
  return (
    <header className="phone-header" data-name="Header/Icon_left">
      <BaseIconsChevronLeft />
      <HeaderTitle />
      <BaseIconsChevronRight />
    </header>
  )
}

function ProgressSteps() {
  return (
    <div
      className="progress-steps"
      data-name="Progress steps / Progress minimal icons connected"
    >
      <div className="progress-line progress-line--active" />
      <div className="progress-line" />

      <div className="progress-dots">
        <div className="step step--done" data-name="_Step base / done">
          <span className="step-check">✓</span>
        </div>
        <div className="step step--current" data-name="_Step base / current">
          <span className="step-dot" />
        </div>
        <div
          className="step step--upcoming"
          data-name="_Step base / upcoming"
        >
          <span className="step-dot" />
        </div>
      </div>
    </div>
  )
}

function Content() {
  return (
    <main className="phone-content" data-name="Content">
      <div className="copy-block">
        <h1 className="display-heading">Display/sm/Semibold</h1>
        <p className="body-large">Text/xl/Regular</p>
      </div>

      <label className="input-field" data-name="Input fields">
        <span className="sr-only">Example input</span>
        <input
          type="text"
          placeholder="Placeholder"
          className="input-element"
        />
      </label>
    </main>
  )
}

function BottomButton() {
  return (
    <div className="bottom-area" data-name="bottom content">
      <button className="cta-button" data-name="Button">
        <span className="cta-arrow">‹</span>
        <span className="cta-label">Button CTA</span>
        <span className="cta-arrow">›</span>
      </button>
    </div>
  )
}

function HomeIndicator() {
  return (
    <div className="home-indicator-wrapper" data-name="HomeIndicator">
      <div className="home-indicator" />
    </div>
  )
}

function Phone() {
  return (
    <div className="phone-frame" data-name="Phone">
      <StatusBarIPhone />
      <HeaderMobile />
      <ProgressSteps />
      <Content />
      <BottomButton />
      <HomeIndicator />
    </div>
  )
}

function App() {
  return (
    <div className="app-root">
      <Phone />
    </div>
  )
}

export default App
