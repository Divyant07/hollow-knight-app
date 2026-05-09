import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Equipment.css";

const EQUIPMENT = [
  { id: 1, name: "Mothwing Cloak", area: "Greenpath", location: "Hornet's arena reward", effect: "Allows dashing horizontally." },
  { id: 2, name: "Mantis Claw", area: "Mantis Village", location: "Mantis Lords reward", effect: "Allows clinging to walls and jumping off them." },
  { id: 3, name: "Crystal Heart", area: "Crystal Peak", location: "Crystallised Mound", effect: "Allows a super dash, flying horizontally at speed." },
  { id: 4, name: "Monarch Wings", area: "Ancient Basin", location: "Broken Vessel reward", effect: "Allows a double jump in mid-air." },
  { id: 5, name: "Shade Cloak", area: "The Abyss", location: "Shade Cloak basin", effect: "Upgrades the dash to pass through enemies and beams." },
  { id: 6, name: "Isma's Tear", area: "Royal Waterways", location: "Dung Defender's chamber", effect: "Allows swimming in acid without taking damage." },
  { id: 7, name: "Dream Nail", area: "Resting Grounds", location: "Seer's gift", effect: "Allows entering dreams and collecting essence." },
  { id: 8, name: "Awoken Dream Nail", area: "Resting Grounds", location: "2400 essence reward", effect: "Upgraded Dream Nail. Can open certain seals." },
  { id: 9, name: "Vengeful Spirit", area: "Forgotten Crossroads", location: "Ancestral Mound", effect: "Fires a projectile that deals spell damage." },
  { id: 10, name: "Desolate Dive", area: "City of Tears", location: "Soul Master reward", effect: "Slams downward dealing spell damage and breaking floors." },
  { id: 11, name: "Howling Wraiths", area: "Fog Canyon", location: "Teacher's Archives", effect: "Fires upward dealing spell damage in an area." },
  { id: 12, name: "Cyclone Slash", area: "Forgotten Crossroads", location: "Nailmaster Mato", effect: "Nail art that spins in a circle hitting multiple times." },
];

export default function Equipment() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  return (
    <div className="eq-layout">
      <div className="eq-topbar">
        <button className="eq-back" onClick={() => selected ? setSelected(null) : navigate("/completion")}>
          ← {selected ? "Equipment" : "Completion tracker"}
        </button>
        <span className="eq-title">{selected ? selected.name : "Equipment"}</span>
      </div>

      <div className="eq-body">
        <div className={`eq-grid ${selected ? "hidden" : ""}`}>
          {EQUIPMENT.map((item) => (
            <div key={item.id} className="eq-card" onClick={() => setSelected(item)}>
              <div className="eq-art">
                <span className="eq-art-placeholder">◇</span>
              </div>
              <span className="eq-name">{item.name}</span>
              <span className="eq-area">{item.area}</span>
            </div>
          ))}
        </div>

        {selected && (
          <div className="eq-expand">
            <div className="eq-map-placeholder">
              <span>Map :3</span>
            </div>
            <div className="eq-expand-fields">
              <div className="eq-field">
                <label>Area</label>
                <span>{selected.area}</span>
              </div>
              <div className="eq-field">
                <label>Location</label>
                <span>{selected.location}</span>
              </div>
              <div className="eq-field eq-field-full">
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