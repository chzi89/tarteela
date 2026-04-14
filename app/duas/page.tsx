import { getDuas } from "@/lib/api";

interface Dua {
  id: string | number;
  title: string;
  arabic_text: string;
  translation: string;
}

export default async function DuaPage() {
  const duas = await getDuas();

  return (
    <div style={{ padding: 20 }}>
      <h2>Duas</h2>

      {duas.map((d: Dua) => (
        <div key={d.id}>
          <h3>{d.title}</h3>
          <p>{d.arabic_text}</p>
          <p>{d.translation}</p>
        </div>
      ))}
    </div>
  );
}