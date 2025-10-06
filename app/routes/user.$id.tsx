import { useParams } from "react-router";

export default function UserPage() {
  const { id } = useParams();
  return <h2>👤 User Profile – ID: {id}</h2>;
}
