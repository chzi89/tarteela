import { getAyahs } from "@/lib/api";

interface Ayah {
  id: string;
  arabic_text: string;
  translation: string;
}

interface SurahDetailProps {
  params: {
    id: string;
  };
}

export default async function SurahDetail({ params }: SurahDetailProps) {
  const ayahs = await getAyahs(params.id);

  return (
    <div style={{ padding: 20 }}>
      <h2>Tilawat</h2>

      {ayahs.map((a: Ayah) => (
        <div key={a.id} style={{ marginBottom: 15 }}>
          <p style={{ fontSize: 22 }}>{a.arabic_text}</p>
          <p>{a.translation}</p>
        </div>
      ))}
    </div>
  );
}