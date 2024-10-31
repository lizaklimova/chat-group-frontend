import { PropsWithChildren, useState } from "react"
import { IconLayoutSidebar, IconLogout, IconSquareRoundedPlus, IconTent } from "@tabler/icons-react" // Importing the Logout icons
import { Link } from "react-router-dom"
import classNames from "classnames"
import { Paper, Textarea } from "@mantine/core"

type BaseLayoutProps = Readonly<PropsWithChildren>

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="relative flex h-screen w-full overflow-hidden transition-colors z-0">
      <div
        className={classNames(
          "flex-shrink-0 overflow-x-hidden shadow-md transition-all duration-300 ease-in-out",
          {
            "w-[260px] opacity-100": isSidebarOpen,
            "w-0 opacity-0": !isSidebarOpen
          }
        )}
      >
        <Paper shadow="md" style={{ width: "260px", height: "100%" }}>
          <nav className="flex flex-col h-full px-3">
            <div className="flex justify-between h-[48px] items-center">
              <IconLayoutSidebar size={24} onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
              <IconSquareRoundedPlus size={24} />
            </div>
            <div className="flex flex-col py-2">
              <div className="flex items-center md:hidden">
                <button
                  className="flex w-full items-center gap-2 rounded-lg p-2 text-sm hover:bg-gray-200"
                  type="button"
                >
                  <img
                    src="https://lh3.googleusercontent.com/a/AEdFTp42tPzjEtMwtls5fiySIkhUsXH909RvCww0N72s=s96-c"
                    alt="User"
                    width="32"
                    height="32"
                    className="rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </button>
              </div>
            </div>
          </nav>
        </Paper>
      </div>

      <div className="relative flex h-full flex-1 flex-col overflow-hidden">
        <main className="relative flex-1 overflow-auto">
          <div className="flex flex-col h-full">
            <div className="shadow-md sticky top-0 p-3 mb-1.5 flex items-center justify-between z-10">
              {!isSidebarOpen && (
                <div className="flex items-center gap-x-2">
                  <IconLayoutSidebar size={24} onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
                  <IconSquareRoundedPlus size={24} />
                </div>
              )}
              <Link to="/" className="flex ml-auto">
                <IconLogout size={24} color="#000" />
              </Link>
            </div>
            <div className="flex flex-1">{children}</div>
            <div className="relative w-full flex items-center py-2">
              <div className="w-full flex flex-col gap-2 p-4">
                <div className="flex items-center gap-2">
                  <div className="flex-grow">
                    <Textarea
                      placeholder="Type your message..."
                      className="textarea-bordered"
                      autosize
                      minRows={2}
                    />
                  </div>
                  <IconTent size={24} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
