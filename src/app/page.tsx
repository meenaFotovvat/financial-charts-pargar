import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-vazirmatn)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Link
          href="/Candlestick"
          className="text-4xl font-bold text-center sm:text-left"
        >
          نمایش چارت نماد های مالی
        </Link>
        <Link
          href="/BarComparison"
          className="text-4xl font-bold text-center sm:text-left"
        >
          پیاده سازی نمودار
        </Link>
        <article></article>
      </main>
    </div>
  );
}
