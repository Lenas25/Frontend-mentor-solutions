
export default function Sidebar() {
  return (
    <>
      <aside className="fixed left-0 top-0 h-screen flex items-center justify-center">
        <ul className="hidden lg:flex bg-[#81abf5] px-3 py-10 rounded-3xl mx-10 flex-col gap-5 text-2xl text-white">
          <li>
            <a href="#home">
              <i className="bx bxs-home"></i>
            </a>
          </li>
          <li>
            <a href="#definition">
              <i className="bx bx-book-open"></i>
            </a>
          </li>
          <li>
            <a href="#skills">
              <i className="bx bx-git-branch"></i>
            </a>
          </li>
          <li>
            <a href="#motivaciones">
              <i className="bx bx-line-chart"></i>
            </a>
          </li>
          <li>
            <a href="#vida-academica">
              <i className="bx bxs-group"></i>
            </a>
          </li>
          <li>
            <a href="#recursos-personales">
            <i className='bx bx-cog'></i>
            </a>
          </li>
          <li>
            <a href="#mensajes">
              <i className="bx bxs-message-rounded"></i>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
