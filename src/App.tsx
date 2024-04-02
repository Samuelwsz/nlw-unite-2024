import { AttendeeList } from "./components/attendee-list"
import { NavBar } from "./components/navbar"

export default function App() {
  return (
    <>
      <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
        <NavBar />
        <AttendeeList />
      </div>
    </>
  )
}
