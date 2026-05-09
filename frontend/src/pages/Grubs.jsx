import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Grubs.css";

const GRUBS = [
  { id: 1, name: "Grub #1", area: "Forgotten Crossroads", location: "Near the start", ability: "None" },
  { id: 2, name: "Grub #2", area: "Forgotten Crossroads", location: "Below Salubra", ability: "None" },
  { id: 3, name: "Grub #3", area: "Forgotten Crossroads", location: "Guarded by Aspid", ability: "None" },
  { id: 4, name: "Grub #4", area: "Forgotten Crossroads", location: "Near Grubfather", ability: "None" },
  { id: 5, name: "Grub #5", area: "Greenpath", location: "Sealed vessel room", ability: "Mothwing Cloak" },
  { id: 6, name: "Grub #6", area: "Greenpath", location: "Near Stone Sanctuary", ability: "None" },
  { id: 7, name: "Grub #7", area: "Fungal Wastes", location: "Above Spore Shroom", ability: "None" },
  { id: 8, name: "Grub #8", area: "Fungal Wastes", location: "Near Mantis Village", ability: "Mantis Claw" },
  { id: 9, name: "Grub #9", area: "City of Tears", location: "Pleasure House area", ability: "None" },
  { id: 10, name: "Grub #10", area: "City of Tears", location: "Near King's Station", ability: "Crystal Heart" },
  { id: 11, name: "Grub #11", area: "Crystal Peak", location: "Below Crystallised Mound", ability: "None" },
  { id: 12, name: "Grub #12", area: "Crystal Peak", location: "Near Crushers", ability: "Monarch Wings" },
  { id: 13, name: "Grub #13", area: "Resting Grounds", location: "Near Seer", ability: "None" },
  { id: 14, name: "Grub #14", area: "Deepnest", location: "Near Hot Spring", ability: "None" },
  { id: 15, name: "Grub #15", area: "Deepnest", location: "Nosk's lair area", ability: "None" },
  { id: 16, name: "Grub #16", area: "Ancient Basin", location: "Below Palace Grounds", ability: "Monarch Wings" },
  { id: 17, name: "Grub #17", area: "Kingdom's Edge", location: "Near Hive entrance", ability: "None" },
  { id: 18, name: "Grub #18", area: "The Hive", location: "Inside the Hive", ability: "None" },
];

export default function Grubs() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  function openGrub(grub) {
    setSelected(grub);
  }

  function closeGrub() {
    setSelected(null);
  }

  return (
    <div className="gr-layout">
      <div className="gr-topbar">
        <button className="gr-back" onClick={() => navigate("/completion")}>
          ← Completion tracker
        </button>
        <span className="gr-title">Grubs</span>
      </div>

      <div className="gr-body">
        {/* Grid */}
        <div className={`gr-grid ${selected ? "hidden" : ""}`}>
          {GRUBS.map((grub) => (
            <div key={grub.id} className="gr-card" onClick={() => openGrub(grub)}>
              <div className="gr-art">
                <span className="gr-art-placeholder">○</span>
              </div>
              <span className="gr-name">{grub.name}</span>
              <span className="gr-area">{grub.area}</span>
            </div>
          ))}
        </div>

        {/* Expand view */}
        {selected && (
          <div className="gr-expand">
            <button className="gr-close" onClick={closeGrub}>← Back</button>
            <h2 className="gr-expand-title">{selected.name}</h2>
            <div className="gr-map-placeholder">
              <span>Map :3</span>
            </div>
            <div className="gr-expand-fields">
              <div className="gr-field">
                <label>Area</label>
                <span>{selected.area}</span>
              </div>
              <div className="gr-field">
                <label>Location</label>
                <span>{selected.location}</span>
              </div>
              <div className="gr-field">
                <label>Required ability</label>
                <span className={`gr-ability ${selected.ability === "None" ? "none" : ""}`}>
                  {selected.ability}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}