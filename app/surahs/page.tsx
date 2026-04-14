import Link from "next/link";
import { getSurahs } from "@/lib/api";

interface Surah {
  id: number;
  name: string;
}

export default async function SurahPage() {
  const surahs = await getSurahs();

  return (
    <div style={{ padding: 20 }}>
      <h2>Surahs</h2>

      {surahs.map((s: Surah) => (
        <div key={s.id} style={{ margin: 10 }}>
          <Link href={`/surah/${s.id}`}>
            {s.name}
          </Link>
        </div>
      ))}
    </div>
  );
}