// Skeleton loader component for loading states
export function Skeleton({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-gray-200 ${className}`}
    />
  );
}

// Pre-built skeleton for a crypto table row
export function CryptoRowSkeleton() {
  return (
    <tr className="border-b border-cb-border">
      <td className="py-4 pl-4 pr-2 hidden sm:table-cell"><Skeleton className="h-4 w-6" /></td>
      <td className="py-4 px-3">
        <div className="flex items-center gap-3">
          <Skeleton className="w-9 h-9 rounded-full" />
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-3.5 w-20" />
            <Skeleton className="h-3 w-10" />
          </div>
        </div>
      </td>
      <td className="py-4 px-3 text-right"><Skeleton className="h-4 w-20 ml-auto" /></td>
      <td className="py-4 px-3 text-right hidden md:table-cell"><Skeleton className="h-4 w-14 ml-auto" /></td>
      <td className="py-4 px-3 text-right hidden lg:table-cell"><Skeleton className="h-4 w-20 ml-auto" /></td>
      <td className="py-4 px-3 hidden lg:table-cell"><Skeleton className="h-10 w-24" /></td>
      <td className="py-4 pl-3 pr-4"><Skeleton className="h-8 w-14 rounded-full" /></td>
    </tr>
  );
}

// Pre-built skeleton for an article card
export function ArticleCardSkeleton() {
  return (
    <div className="bg-white border border-cb-border rounded-2xl overflow-hidden">
      <Skeleton className="aspect-video w-full rounded-none" />
      <div className="p-5 flex flex-col gap-3">
        <div className="flex justify-between">
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
