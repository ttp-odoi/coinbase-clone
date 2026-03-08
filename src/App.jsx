import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./components/common/Toast";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Home          from "./pages/Home";
import Explore       from "./pages/Explore";
import AssetDetail   from "./pages/AssetDetail";
import Learn         from "./pages/Learn";
import Products      from "./pages/Products";
import Earn          from "./pages/Earn";
import Wallet        from "./pages/Wallet";
import CoinbaseOne   from "./pages/CoinbaseOne";
import Card          from "./pages/Card";
import SignIn        from "./pages/SignIn";
import SignUp        from "./pages/SignUp";
import NotFound      from "./pages/NotFound";
import Dashboard     from "./pages/Dashboard";
import AdvancedTrade from "./pages/AdvancedTrade";
import Institutional from "./pages/Institutional";
import About         from "./pages/About";
import Careers       from "./pages/Careers";
import Blog          from "./pages/Blog";
import Help          from "./pages/Help";
import Security      from "./pages/Security";
import Fees          from "./pages/Fees";
import Taxes         from "./pages/Taxes";
import Legal         from "./pages/Legal";

// Layout wrapper — adds Navbar + Footer to every non-auth page
function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          {/* ── Auth pages (no nav/footer) ── */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* ── Main pages (with nav/footer) ── */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/explore" element={<MainLayout><Explore /></MainLayout>} />
          <Route path="/asset/:id" element={<MainLayout><AssetDetail /></MainLayout>} />
          <Route path="/learn" element={<MainLayout><Learn /></MainLayout>} />
          <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
          <Route path="/earn" element={<MainLayout><Earn /></MainLayout>} />
          <Route path="/wallet" element={<MainLayout><Wallet /></MainLayout>} />
          <Route path="/coinbase-one" element={<MainLayout><CoinbaseOne /></MainLayout>} />
          <Route path="/card" element={<MainLayout><Card /></MainLayout>} />
          <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
          <Route path="/advanced-trade" element={<MainLayout><AdvancedTrade /></MainLayout>} />
          <Route path="/institutional" element={<MainLayout><Institutional /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/careers" element={<MainLayout><Careers /></MainLayout>} />
          <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
          <Route path="/help" element={<MainLayout><Help /></MainLayout>} />
          <Route path="/security" element={<MainLayout><Security /></MainLayout>} />
          <Route path="/fees" element={<MainLayout><Fees /></MainLayout>} />
          <Route path="/taxes" element={<MainLayout><Taxes /></MainLayout>} />
          <Route path="/legal" element={<MainLayout><Legal /></MainLayout>} />

          {/* ── 404 ── */}
          <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}
