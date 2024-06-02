import AboutUs from "@/components/AboutUs";
import EquipmentService from "@/components/EquipmentService";
import EventOrganizer from "@/components/EventOrganizer";
import Header from "@/components/Header";
import LivePackages from "@/components/LivePackages";
import LiveService from "@/components/LiveService";
import LiveStream from "@/components/LiveStream";
import Navbar from "@/components/Navbar";
import RecordLive from "@/components/RecordLive";
import SetUpLiveStreaming from "@/components/SetUpLiveStreaming";

export default function Home() {
  return (
    <main>
      <Header />
      <LiveStream />
      <LiveService />
      <RecordLive />
      <LivePackages />
      <EquipmentService />
      <EventOrganizer />
      <SetUpLiveStreaming />
      <AboutUs />
    </main>
  );
}

