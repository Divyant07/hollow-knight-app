import ChecklistItem from "./components/ChecklistItem";

const DUMMY = [
  { name: "Rescued Grub #1", category: "Grubs", notes: "Forgotten Crossroads" },
  { name: "Shaman Stone", category: "Charms", notes: "Ancestral Mound" },
  { name: "Hornet", category: "Bosses" },
];

export default function App() {
  return (
    <div style={{
      background: "#0a0a0d",
      minHeight: "100vh",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }}>
      {DUMMY.map((item) => (
        <ChecklistItem key={item.name} {...item} />
      ))}
    </div>
  );
}