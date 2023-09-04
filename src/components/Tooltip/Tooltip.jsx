export default function Tooltip({ text }) {
  return (
    <div className="absolute top-[-40px] bg-color-2 px-2 py-1 rounded-sm font-Montserrat z-[110]">
      <h1>{text}</h1>
    </div>
  );
}
