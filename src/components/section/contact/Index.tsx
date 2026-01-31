import ConnectionCard from "./components/ConnectionCard";

export default function ContactIndex() {
  return (
    <div className="flex gap-4 max-w-360 m-auto mt-4">
      <ConnectionCard label="facebook" />
      <ConnectionCard label="instagram" />
      <ConnectionCard label="twitter" />
      <ConnectionCard label="discord" />
    </div>
  );
}
