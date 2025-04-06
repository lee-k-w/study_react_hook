export default function Navigation({ pageList, setPageIndex, pageIndex }) {
  return (
    <nav className="navbar border-1 border-gray-300 shadow-sm m-2 w-auto">
      <ul className="menu menu-horizontal gap-2">
        {pageList.map((page, index) => (
          <li key={page.name}>
            <button
              className={`btn ${pageIndex === index && "btn-primary"}`}
              onClick={() => setPageIndex(index)}
            >
              {page.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
