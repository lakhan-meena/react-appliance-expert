import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Legal from "./pages/Legal"
import ServicePage from "./pages/ServicePage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Legal pageKey="terms" />} />
          <Route path="privacy" element={<Legal pageKey="privacy" />} />
          <Route path="disclaimer" element={<Legal pageKey="disclaimer" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
