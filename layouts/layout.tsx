import Footer from "@/components/footer";
import Header from "@/components/header";
import { FirebaseProvider } from "@/context/FirebaseContext";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <FirebaseProvider>
        <div className="max-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </FirebaseProvider>
    </ClerkProvider>
  );
}
