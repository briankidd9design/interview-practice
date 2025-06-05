import "./HolyGrailLayoutCss/styles.css";

export default function HolyGrailLayout() {
  return (
    <>
      <header>Header</header>
      <div className="main-content">
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </>
  );
}
