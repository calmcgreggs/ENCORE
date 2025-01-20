import Fake3 from "@/components/games/AttackerOrAlly/emails/fake/easy/Fake3";
import { motion } from "framer-motion";

export default function testing() {
  return (
    <div className="w-screen h-[90vh]">
      <Fake3
        subject="Immediate System Update for SCADA Software"
        from="it-support@updates.com"
      />
    </div>
  );
}
