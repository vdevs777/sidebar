import { PageHeader } from "@/components/page-header";
import { Layers } from "lucide-react";

export function InventoryDashboard() {
    return (
        <div>
            <PageHeader path="Inventário /" title="Painel" color="bg-green-400" icon={<Layers />}/>
        </div>
    )
}