import { Button, Popover } from "flowbite-react";

export function PopoverButton({info}) {
  return (
    <>
      <Popover
        aria-labelledby="default-popover" 
        content={
          <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
            <div className="border-b border-gray-200 bg-[#b0d2e8] px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
              <h3
                id="default-popover"
                className="font-semibold text-gray-900 dark:text-white">
                Caracteristicas
              </h3>
            </div>
            <div className="px-3 py-2">
              {
                info.map((item) => {
                  return <p className="mb-2">{item}</p>
                })
              }
            </div>
          </div>
        }
        placement="bottom">
        <Button className="absolute bg-white rounded-full border-2 border-[#81abf5] text-black focus:ring-0 size-12 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-down">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M16 15l-4 4" />
            <path d="M8 15l4 4" />
          </svg>
        </Button>
      </Popover>
    </>
  );
}
