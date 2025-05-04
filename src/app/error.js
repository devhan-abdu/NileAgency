'use client'; 
export default function Error({
  error,
  reset,
}) {

 
  return (
    <main className="flex h-screen flex-col items-center justify-center text-foreground-500">
      <h2 className="text-center text-xl">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-primary-500 px-4 py-2 text-sm text-black transition-colors hover:bg-primary-500/70 cursor-pointer"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}