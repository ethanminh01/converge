import { SwapCard } from "@/components/swap/SwapCard";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { Footer } from "@/components/layout/Footer";

export default function SwapPage() {
  return (
    <>
      <TopNavBar />

      <main className="relative flex-1 flex flex-col items-center justify-center pt-8 md:pt-32 pb-24 md:pb-32 px-4">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary-fixed opacity-30 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-fixed opacity-20 blur-[100px]" />
        </div>

        <div className="z-10">
          <SwapCard />
        </div>
      </main>

      <Footer />
      <MobileBottomNav />
    </>
  );
}
