import { PageHeader } from "@/components/page-header";
import { Globe } from "lucide-react";

export function NetworkTR069Dashboard() {
    return (
        <div>
            <PageHeader path="Network / TR-069 (ACS) /" title="Painel" color="bg-green-400" icon={<Globe />}/>
        </div>
    )
}