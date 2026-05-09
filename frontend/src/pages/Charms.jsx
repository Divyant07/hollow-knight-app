import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Charms.css";

const CHARMS = [
  { id: 1, name: "Wayward Compass", location: "Iselda's shop", area: "Dirtmouth", notchCost: 1, effect: "Shows your location on the map." },
  { id: 2, name: "Gathering Swarm", location: "Iselda's shop", area: "Dirtmouth", notchCost: 1, effect: "Collects nearby Geo automatically." },
  { id: 3, name: "Stalwart Shell", location: "Iselda's shop", area: "Dirtmouth", notchCost: 2, effect: "Increases invincibility frames after taking damage." },
  { id: 4, name: "Soul Catcher", location: "Ancestral Mound", area: "Forgotten Crossroads", notchCost: 2, effect: "Increases soul gained from hitting enemies." },
  { id: 5, name: "Shaman Stone", location: "Ancestral Mound", area: "Forgotten Crossroads", notchCost: 3, effect: "Increases spell damage." },
  { id: 6, name: "Quick Slash", location: "Soul Sanctum", area: "City of Tears", notchCost: 3, effect: "Increases nail attack speed significantly." },
  { id: 7, name: "Mark of Pride", location: "Mantis Village", area: "Fungal Wastes", notchCost: 3, effect: "Increases nail attack range." },
  { id: 8, name: "Long Nail", location: "Nailmaster Mato", area: "Forgotten Crossroads", notchCost: 2, effect: "Slightly increases nail attack range." },
  { id: 9, name: "Quick Focus", location: "Sly's shop", area: "Dirtmouth", notchCost: 3, effect: "Increases healing speed." },
  { id: 10, name: "Fragile Strength", location: "Leg Eater", area: "Fungal Wastes", notchCost: 3, effect: "Increases nail damage by 50%." },
  { id: 11, name: "Grubsong", location: "Grubfather reward", area: "Forgotten Crossroads", notchCost: 1, effect: "Gain soul when taking damage." },
  { id: 12, name: "Spell Twister", location: "Soul Sanctum", area: "City of Tears", notchCost: 2, effect: "Reduces soul cost of spells." },
];

export default function Charms() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <div className="ch-layout">
      <div className="ch-topbar">
        <button className="ch-back" onClick={() => selected ? setSelected(null) : navigate("/completion")}>
          ← {selected ? "Charms" : "Completion tracker"}
        </button>
        <span className="ch-title">{selected ? selected.name : "Charms"}</span>
      </div>

      <div className="ch-body">
        <div className={`ch-grid ${selected ? "hidden" : ""}`}>
          {CHARMS.map((charm) => (
            <div key={charm.id} className="ch-card" onClick={() => setSelected(charm)}>
              <div className="ch-art">
                <span className="ch-art-placeholder">◈</span>
              </div>
              <span className="ch-name">{charm.name}</span>
              <span className="ch-area">{charm.area}</span>
              <span className="ch-notch">{"◻".repeat(charm.notchCost)}</span>
            </div>
          ))}
        </div>

        {selected && (
          <div className="ch-expand">
            <div className="ch-map-placeholder">
              <span>Map :3</span>
            </div>
            <div className="ch-expand-fields">
              <div className="ch-field">
                <label>Area</label>
                <span>{selected.area}</span>
              </div>
              <div className="ch-field">
                <label>Location</label>
                <span>{selected.location}</span>
              </div>
              <div className="ch-field">
                <label>Notch cost</label>
                <span className="ch-notch-display">{"◻".repeat(selected.notchCost)} {selected.notchCost}</span>
              </div>
              <div className="ch-field ch-field-full">
                <label>Effect</label>
                <span>{selected.effect}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}