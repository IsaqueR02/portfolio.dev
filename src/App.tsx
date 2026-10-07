import { Navbar } from "@/features/navbar/navbar"
import { HomePage } from "@/features/home"

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      <HomePage />
    </div>
  )
}

export default App