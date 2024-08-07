import React from "react";
import { getTopics } from "../../api";

export default function SidebarData() {
  useEffect(() => {
    getTopics().then((topics) => {
      return topics;
    });
  }, []);
}
