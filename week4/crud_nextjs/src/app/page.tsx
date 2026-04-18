import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Properties CRUD</h1>
      <Link href="/dashboard/properties">Go to Dashboard</Link>
    </main>
  );
}
