import AuthCheck from "@/components/AuthCheck";
import LogoutButton from "@/components/LogoutButton";

export default function Dashboard() {
  return (
    <AuthCheck>
      <div>
        <LogoutButton />
      </div>
    </AuthCheck>
  );
} 