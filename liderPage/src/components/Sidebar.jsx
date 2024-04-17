
export default function Sidebar() {
  return (
    <>
      <aside className="fixed left-0 top-0 h-screen flex items-center justify-center">
        <ul className="hidden lg:flex bg-[#81abf5] px-3 py-10 rounded-3xl mx-10 flex-col gap-5 text-2xl text-[#1c305c]">
          <li>
            <a href="#home">
              <i class="bx bxs-home"></i>
            </a>
          </li>
          <li>
            <a href="#definition">
              <i class="bx bx-book-open"></i>
            </a>
          </li>
          <li>
            <a href="#skills">
              <i class="bx bx-git-branch"></i>
            </a>
          </li>
          <li>
            <a href="#motivaciones">
              <i class="bx bx-line-chart"></i>
            </a>
          </li>
          <li>
            <a href="#vida-academica">
              <i class="bx bxs-group"></i>
            </a>
          </li>
          <li>
            <a href="#recursos-personales">
            <i class='bx bx-cog'></i>
            </a>
          </li>
          <li>
            <a href="#mensajes">
              <i class="bx bxs-message-rounded"></i>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
